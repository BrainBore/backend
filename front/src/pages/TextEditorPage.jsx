import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { seccionPaginaService } from '../services/seccion-pagina.service'
import { authStateService } from '../services/auth-state.service'

const pageGroups = [
  { label: 'Inicio', items: [{ slug: '/', label: 'Inicio' }] },
  {
    label: 'Institucional',
    items: [
      { slug: '/institucional/acerca', label: 'Acerca de la carrera' },
      { slug: '/institucional/acreditacion', label: 'Acreditación y evaluación continua', aliases: ['/acreditacion'] },
      { slug: '/institucional/autoridades', label: 'Autoridades' },
      { slug: '/institucional/docentes', label: 'Plantel docente y administrativo' },
      { slug: '/institucional/convenios', label: 'Convenios interinstitucionales' },
      { slug: '/institucional/reglamentos', label: 'Reglamentos y resoluciones' },
    ],
  },
  {
    label: 'Pregrado',
    items: [
      { slug: '/pregrado/perfil-profesional', label: 'Perfil profesional' },
      { slug: '/pregrado/malla-curricular', label: 'Malla curricular' },
      { slug: '/pregrado/calendario-academico', label: 'Calendario académico' },
      { slug: '/pregrado/admisiones', label: 'Admisiones' },
      { slug: '/pregrado/convalidaciones', label: 'Convalidaciones' },
      { slug: '/pregrado/modalidades-graduacion', label: 'Modalidades de graduación' },
    ],
  },
  {
    label: 'Postgrado',
    items: [
      { slug: '/postgrado', label: 'Maestría terminal' },
      { slug: '/postgrado/maestria-autofinanciada', label: 'Maestría autofinanciada' },
      { slug: '/postgrado/diplomados-especialidades', label: 'Diplomados y especialidades' },
    ],
  },
  {
    label: 'Estudiantes',
    items: [
      { slug: '/estudiantes/guia-seguimiento-tramites', label: 'Trámites estudiantiles' },
      { slug: '/estudiantes/centro-estudiantes', label: 'Centro de estudiantes' },
      { slug: '/estudiantes/convocatorias-auxiliaturas', label: 'Auxiliaturas' },
      { slug: '/estudiantes/pasantias-bolsa-trabajo', label: 'Pasantías y bolsa de trabajo' },
      { slug: '/estudiantes/sociedad-cientifica', label: 'Sociedad científica' },
    ],
  },
  {
    label: 'Investigación',
    items: [
      { slug: '/investigacion/acerca-ieta', label: 'Acerca del IETA' },
      { slug: '/investigacion/personal', label: 'Personal de investigación' },
      { slug: '/investigacion/proyectos', label: 'Proyectos' },
      { slug: '/investigacion/revista-varianza', label: 'Revista Varianza' },
      { slug: '/investigacion/autores-varianza', label: 'Autores Varianza' },
      { slug: '/investigacion/servicios', label: 'Servicios' },
      { slug: '/investigacion/contacto', label: 'Contacto de investigación' },
    ],
  },
  {
    label: 'Recursos',
    items: [
      { slug: '/recursos/biblioteca', label: 'Biblioteca' },
      { slug: '/recursos/banco-datos', label: 'Banco de datos' },
      { slug: '/recursos/revistas', label: 'Revistas' },
      { slug: '/recursos/tesis', label: 'Tesis' },
      { slug: '/recursos/documentos', label: 'Documentos' },
    ],
  },
  { label: 'Contacto', items: [{ slug: '/contacto', label: 'Contacto' }] },
]

const pageTabs = pageGroups.flatMap((group) => group.items)

export default function TextEditorPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [sections, setSections] = useState([])
  const [activePageSlug, setActivePageSlug] = useState('/')
  const [openGroup, setOpenGroup] = useState(null)
  const [activeKey, setActiveKey] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    seccionPaginaService
      .findAll()
      .then((data) => {
        if (!isMounted) return
        setSections(data)
        const initialPageSlug = findInitialPage(data)
        setActivePageSlug(initialPageSlug)
        setActiveKey(
          data.find((section) => normalizePageSlug(section.paginaSlug) === initialPageSlug)?.claveCampo ?? '',
        )
      })
      .catch((requestError) => {
        if (isMounted) setError(requestError.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const pageSections = sections.filter(
    (section) => normalizePageSlug(section.paginaSlug) === activePageSlug,
  )
  const activeSection = pageSections.find((section) => section.claveCampo === activeKey)

  const changePage = (pageSlug) => {
    setActivePageSlug(pageSlug)
    setActiveKey(
      sections.find((section) => normalizePageSlug(section.paginaSlug) === pageSlug)?.claveCampo ?? '',
    )
    setMessage(null)
  }

  const updateActiveSection = (field, value) => {
    setSections((currentSections) =>
      currentSections.map((section) =>
        section.claveCampo === activeKey ? { ...section, [field]: value } : section,
      ),
    )
    setMessage(null)
  }

  const saveSection = async () => {
    if (!activeSection || !activeSection.claveCampo.trim()) return

    setSaving(true)
    setError('')
    setMessage(null)

    try {
      await seccionPaginaService.save(activeSection)
      setMessage('Cambios guardados')
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const handleImageFile = (event) => {
    const [file] = event.target.files
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Selecciona un archivo de imagen válido.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => updateActiveSection('valor', reader.result)
    reader.onerror = () => setError('No se pudo leer la imagen seleccionada.')
    reader.readAsDataURL(file)
  }

  const signOut = () => {
    authStateService.signOut()
    navigate('/auth/log-in')
  }

  if (loading) {
    return <main className="min-h-screen p-8 text-umsa-text-suave">Cargando editor...</main>
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-800 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-umsa-orange">
              Administración de contenido
            </p>
            <h1 className="text-2xl font-bold text-umsa-blue sm:text-3xl">Editor de página</h1>
          </div>
          <button
            type="button"
            onClick={signOut}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-umsa-blue hover:text-umsa-blue"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="relative z-10 mb-4 flex flex-wrap gap-1 border-b border-slate-200 pb-1">
          {pageGroups.map((group, groupIndex) => {
            const groupHasActivePage = group.items.some((item) => item.slug === activePageSlug)
            const groupSectionCount = group.items.reduce(
              (total, item) =>
                total + sections.filter((section) => normalizePageSlug(section.paginaSlug) === item.slug).length,
              0,
            )

            if (group.items.length === 1) {
              const [tab] = group.items

              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => changePage(tab.slug)}
                  className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                    activePageSlug === tab.slug
                      ? 'bg-umsa-blue text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-umsa-blue'
                  }`}
                >
                  {group.label}
                </button>
              )
            }

            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === groupIndex ? null : groupIndex)}
                  className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                    groupHasActivePage
                      ? 'bg-umsa-blue text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-umsa-blue'
                  }`}
                >
                  {group.label}
                  <span className="ml-2 text-xs">{openGroup === groupIndex ? '▲' : '▼'}</span>
                </button>
                {openGroup === groupIndex && (
                  <div className="absolute left-0 top-full min-w-72 rounded-b-xl rounded-tr-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {group.items.map((tab) => {
                      const sectionCount = sections.filter(
                        (section) => normalizePageSlug(section.paginaSlug) === tab.slug,
                      ).length

                      return (
                        <button
                          key={tab.slug}
                          type="button"
                          onClick={() => {
                            changePage(tab.slug)
                            setOpenGroup(null)
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                            activePageSlug === tab.slug
                              ? 'bg-sky-50 font-semibold text-umsa-blue'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-umsa-blue'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className="ml-4 text-xs text-slate-400">{sectionCount}</span>
                        </button>
                      )
                    })}
                    {groupSectionCount === 0 && (
                      <p className="px-3 py-2 text-xs text-slate-400">Sin contenido registrado</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="grid min-h-[620px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[250px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
              Secciones de {pageTabs.find((tab) => tab.slug === activePageSlug)?.label ?? activePageSlug}
            </h2>
            <div className="space-y-2">
              {pageSections.map((section) => (
                <button
                  key={section.claveCampo}
                  type="button"
                  onClick={() => {
                    setActiveKey(section.claveCampo)
                    setMessage(null)
                  }}
                  className={`w-full rounded-lg border px-3 py-3 text-left transition ${
                    section.claveCampo === activeKey
                      ? 'border-umsa-blue bg-umsa-blue text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                  }`}
                >
                  <span className="block truncate text-sm font-semibold">{section.claveCampo}</span>
                  <span className="mt-1 block text-xs opacity-70">{section.tipo}</span>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex min-w-0 flex-col p-5 sm:p-8">
            {activeSection ? (
              <>
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <label htmlFor="section-key" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Clave de sección
                    </label>
                    <input
                      id="section-key"
                      value={activeSection.claveCampo}
                      readOnly
                      className="w-full max-w-md bg-transparent text-lg font-bold text-slate-800 outline-none"
                    />
                  </div>
                  <select
                    value={activeSection.tipo}
                    onChange={(event) => updateActiveSection('tipo', event.target.value)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                  >
                    <option value="texto">Texto</option>
                    <option value="imagen">Imagen</option>
                  </select>
                </div>

                {activeSection.tipo === 'imagen' ? (
                  <div className="flex flex-1 flex-col gap-4">
                    <label htmlFor="image-value" className="text-sm font-semibold text-slate-600">
                      URL o contenido de la imagen
                    </label>
                    <input
                      id="image-value"
                      value={activeSection.valor}
                      onChange={(event) => updateActiveSection('valor', event.target.value)}
                      className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                      placeholder="https://..."
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-fit rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-umsa-blue hover:text-umsa-blue"
                    >
                      Seleccionar imagen
                    </button>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageFile} className="hidden" />
                    <div className="flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
                      {activeSection.valor ? (
                        <img src={activeSection.valor} alt="Vista previa de la sección" className="max-h-80 max-w-full object-contain" />
                      ) : (
                        <span className="text-sm text-slate-400">La vista previa aparecerá aquí</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col">
                    <label htmlFor="text-value" className="mb-2 text-sm font-semibold text-slate-600">
                      Contenido
                    </label>
                    <textarea
                      id="text-value"
                      value={activeSection.valor}
                      onChange={(event) => updateActiveSection('valor', event.target.value)}
                      className="min-h-80 flex-1 resize-y rounded-xl border border-slate-300 p-4 text-base leading-7 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                      placeholder="Escribe el contenido de esta sección..."
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
                  <div aria-live="polite" className="text-sm">
                    {error && <span className="text-red-600">{error}</span>}
                    {!error && message && <span className="font-medium text-emerald-600">{message}</span>}
                  </div>
                  <button
                    type="button"
                    onClick={saveSection}
                    disabled={saving}
                    className="rounded-lg bg-umsa-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {saving ? 'Guardando...' : 'Guardar sección'}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-center text-slate-400">
                No hay secciones existentes para esta página.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

function findInitialPage(sections) {
  const firstExistingPage = pageTabs.find((tab) =>
    sections.some((section) => normalizePageSlug(section.paginaSlug) === tab.slug),
  )

  return firstExistingPage?.slug ?? pageTabs[0].slug
}

function normalizePageSlug(slug) {
  if (slug === '/acreditacion') return '/institucional/acreditacion'
  return slug
}
