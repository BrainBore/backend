import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { seccionPaginaService } from '../services/seccion-pagina.service'
import { authStateService } from '../services/auth-state.service'
import PlantelCrud from '../components/PlantelCrud'
import EstudianteAutoridadCrud from '../components/EstudianteAutoridadCrud'
import ConvenioCrud from '../components/ConvenioCrud'
import {
  IconSearch,
  IconFileText,
  IconImage,
  IconHandshake,
  IconGraduationCap,
  IconUsers,
  IconChevronDown,
  IconArrowLeft,
  IconArrowRight,
  IconClose,
  IconSave,
  IconUpload,
  IconLogOut,
  IconLock,
  IconCheck,
  IconAlertCircle,
} from '../components/Icons'

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

const KNOWN_GROUP_LABELS = {
  acreditacion: 'Acreditación',
  hito: 'Hitos',
  ieta: 'IETA',
  inicio: 'Inicio',
  mision: 'Misión',
  vision: 'Visión',
  objetivo: 'Objetivos',
  valor: 'Valores',
  chip: 'Chips informativos',
  credencial: 'Credenciales',
  cta: 'Llamado a la acción (CTA)',
  impacto: 'Impacto',
  hero: 'Portada (Hero)',
  contacto: 'Contacto',
  perfil: 'Perfil',
  admision: 'Admisiones',
  requisito: 'Requisitos',
  malla: 'Malla curricular',
  convenio: 'Convenios',
  reglamento: 'Reglamentos',
  tramite: 'Trámites',
  pasantia: 'Pasantías',
  revista: 'Revistas',
  biblioteca: 'Biblioteca',
}

function formatGroupLabel(groupKey) {
  if (KNOWN_GROUP_LABELS[groupKey]) {
    return KNOWN_GROUP_LABELS[groupKey]
  }
  if (!groupKey) return 'General'
  return groupKey.charAt(0).toUpperCase() + groupKey.slice(1)
}

function buildSectionGroups(pageSections) {
  if (!pageSections || pageSections.length === 0) return []

  const keys = pageSections.map((s) => s.claveCampo)
  const prefixCounts = {}
  keys.forEach((key) => {
    const p = key.split('_')[0]
    if (p) prefixCounts[p] = (prefixCounts[p] || 0) + 1
  })

  let commonPrefix = ''
  const sortedPrefixes = Object.entries(prefixCounts).sort((a, b) => b[1] - a[1])
  if (sortedPrefixes.length > 0) {
    const [topPrefix, topCount] = sortedPrefixes[0]
    if (topCount / keys.length >= 0.6) {
      commonPrefix = topPrefix + '_'
    }
  }

  const groupsMap = new Map()

  pageSections.forEach((section) => {
    let keyAfterPrefix = section.claveCampo
    if (commonPrefix && keyAfterPrefix.startsWith(commonPrefix)) {
      keyAfterPrefix = keyAfterPrefix.slice(commonPrefix.length)
    }

    const parts = keyAfterPrefix.split('_')
    const rawGroup = (parts[0] || 'general').toLowerCase()
    const subKey = parts.length > 1 ? parts.slice(1).join('_') : parts[0]

    const enhancedSection = {
      ...section,
      groupKey: rawGroup,
      subKey,
    }

    if (!groupsMap.has(rawGroup)) {
      groupsMap.set(rawGroup, {
        key: rawGroup,
        label: formatGroupLabel(rawGroup),
        sections: [],
      })
    }

    groupsMap.get(rawGroup).sections.push(enhancedSection)
  })

  return Array.from(groupsMap.values())
}

export default function TextEditorPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [sections, setSections] = useState([])
  const [activePageSlug, setActivePageSlug] = useState('/')
  const [openNavGroup, setOpenNavGroup] = useState(null)
  const [activeKey, setActiveKey] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState('')

  // UI state for group organization, search, and collapsible accordions
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all')
  const [openSectionGroups, setOpenSectionGroups] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

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

  const sectionGroups = useMemo(() => {
    return buildSectionGroups(pageSections)
  }, [pageSections])

  const filteredGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return sectionGroups
      .filter((group) => {
        if (selectedGroupFilter !== 'all' && group.key !== selectedGroupFilter) {
          return false
        }
        return true
      })
      .map((group) => {
        if (!term) return group
        const matchingSections = group.sections.filter(
          (s) =>
            s.claveCampo.toLowerCase().includes(term) ||
            s.subKey.toLowerCase().includes(term) ||
            (s.valor && s.valor.toLowerCase().includes(term)),
        )
        return {
          ...group,
          sections: matchingSections,
        }
      })
      .filter((group) => group.sections.length > 0)
  }, [sectionGroups, selectedGroupFilter, searchTerm])

  const activeGroup = sectionGroups.find((g) =>
    g.sections.some((s) => s.claveCampo === activeKey),
  )
  const activeGroupSections = activeGroup ? activeGroup.sections : []
  const activeIndexInGroup = activeGroupSections.findIndex(
    (s) => s.claveCampo === activeKey,
  )

  const [pageMode, setPageMode] = useState('textos')

  const hasCrudForPage = (slug) =>
    ['/institucional/convenios', '/institucional/autoridades', '/institucional/docentes'].includes(slug)

  const changePage = (pageSlug) => {
    setActivePageSlug(pageSlug)
    setSelectedGroupFilter('all')
    setSearchTerm('')
    const targetSections = sections.filter(
      (section) => normalizePageSlug(section.paginaSlug) === pageSlug,
    )
    setActiveKey(targetSections[0]?.claveCampo ?? '')
    setMessage(null)
    setPageMode('textos')
  }

  const toggleGroup = (groupKey, currentlyOpen) => {
    setOpenSectionGroups((prev) => ({
      ...prev,
      [groupKey]: !currentlyOpen,
    }))
  }

  const expandAllGroups = () => {
    const allOpen = {}
    sectionGroups.forEach((g) => {
      allOpen[g.key] = true
    })
    setOpenSectionGroups(allOpen)
  }

  const collapseAllGroups = () => {
    setOpenSectionGroups({})
  }

  const selectSection = (key) => {
    setActiveKey(key)
    setPageMode('textos')
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
      setMessage('Cambios guardados con éxito')
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

  const activePageTitle =
    pageTabs.find((tab) => tab.slug === activePageSlug)?.label ?? activePageSlug

  if (loading) {
    return <main className="min-h-screen p-8 text-umsa-text-suave">Cargando editor...</main>
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-800 sm:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-umsa-blue hover:text-umsa-blue shadow-2xs"
          >
            <IconLogOut className="h-4 w-4 text-slate-500" />
            <span>Cerrar sesión</span>
          </button>
        </div>

        {/* Page navigation tabs */}
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
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-umsa-blue'
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
                  onClick={() => setOpenNavGroup(openNavGroup === groupIndex ? null : groupIndex)}
                  className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                    groupHasActivePage
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-umsa-blue'
                  }`}
                >
                  {group.label}
                  <IconChevronDown
                    className={`ml-2 inline-block h-3.5 w-3.5 transition-transform duration-200 ${
                      openNavGroup === groupIndex ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openNavGroup === groupIndex && (
                  <div className="absolute left-0 top-full z-20 min-w-72 rounded-b-xl rounded-tr-xl border border-slate-200 bg-white p-2 shadow-xl">
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
                            setOpenNavGroup(null)
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                            activePageSlug === tab.slug
                              ? 'bg-sky-50 font-semibold text-umsa-blue'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-umsa-blue'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className="ml-4 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 font-medium">
                            {sectionCount}
                          </span>
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

        {/* Main Editor Container */}
        <div className="grid min-h-[660px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[340px_1fr]">
          {/* Sidebar with Grouped Sections */}
          <aside className="flex flex-col border-b border-slate-200 bg-slate-50 lg:border-b-0 lg:border-r">
            {/* Sidebar header */}
            <div className="border-b border-slate-200 bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Secciones de página
                </h2>
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                  {pageSections.length} {pageSections.length === 1 ? 'campo' : 'campos'}
                </span>
              </div>
              <p className="mt-1 truncate text-sm font-bold text-umsa-blue">
                {activePageTitle}
              </p>

              {/* Search bar */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Buscar clave, título o contenido..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pl-8 pr-7 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
                />
                <span className="pointer-events-none absolute left-2.5 top-2.5 text-slate-400">
                  <IconSearch className="h-3.5 w-3.5" />
                </span>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-700 transition"
                    title="Limpiar búsqueda"
                  >
                    <IconClose className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Group filter pills */}
              {sectionGroups.length > 1 && (
                <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedGroupFilter('all')}
                    className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                      selectedGroupFilter === 'all'
                        ? 'bg-umsa-blue text-white shadow-xs'
                        : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    Todos ({pageSections.length})
                  </button>
                  {sectionGroups.map((group) => (
                    <button
                      key={group.key}
                      type="button"
                      onClick={() => setSelectedGroupFilter(group.key)}
                      className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                        selectedGroupFilter === group.key
                          ? 'bg-umsa-blue text-white shadow-xs'
                          : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {group.label} ({group.sections.length})
                    </button>
                  ))}
                </div>
              )}

              {/* Expand / Collapse all controls */}
              {selectedGroupFilter === 'all' && sectionGroups.length > 1 && (
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    {filteredGroups.length} grupo{filteredGroups.length !== 1 ? 's' : ''}
                  </span>
                  <div className="flex gap-2 font-medium">
                    <button
                      type="button"
                      onClick={expandAllGroups}
                      className="text-umsa-blue hover:underline"
                    >
                      Expandir todos
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={collapseAllGroups}
                      className="text-slate-500 hover:text-slate-800 hover:underline"
                    >
                      Colapsar todos
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion List */}
            <div className="max-h-[calc(100vh-270px)] flex-1 space-y-2.5 overflow-y-auto p-3">
              {filteredGroups.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">
                  {searchTerm ? (
                    <>
                      No se encontraron secciones que coincidan con &quot;{searchTerm}&quot;.
                      <button
                        type="button"
                        onClick={() => setSearchTerm('')}
                        className="mt-2 block w-full text-center font-semibold text-umsa-blue hover:underline"
                      >
                        Limpiar búsqueda
                      </button>
                    </>
                  ) : (
                    'No hay secciones disponibles para esta vista.'
                  )}
                </div>
              ) : (
                filteredGroups.map((group) => {
                  const hasActiveSection = group.sections.some(
                    (section) => section.claveCampo === activeKey,
                  )
                  const isOpen = searchTerm
                    ? true
                    : openSectionGroups[group.key] !== undefined
                    ? openSectionGroups[group.key]
                    : hasActiveSection

                  return (
                    <div
                      key={group.key}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        hasActiveSection
                          ? 'border-sky-300 bg-white shadow-xs'
                          : 'border-slate-200 bg-white/90'
                      }`}
                    >
                      {/* Group Header Button */}
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.key, isOpen)}
                        className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs font-bold transition hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-2">
                          <IconChevronDown
                            className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-0' : '-rotate-90'
                            }`}
                          />
                          <span
                            className={
                              hasActiveSection ? 'font-bold text-umsa-blue' : 'text-slate-700'
                            }
                          >
                            {group.label}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            hasActiveSection
                              ? 'bg-sky-100 text-umsa-blue'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {group.sections.length}
                        </span>
                      </button>

                      {/* Group Items */}
                      {isOpen && (
                        <div className="space-y-1 border-t border-slate-100 bg-slate-50/60 p-1.5">
                          {group.sections.map((section) => {
                            const isSelected = section.claveCampo === activeKey
                            const isImage = section.tipo === 'imagen'

                            return (
                              <button
                                key={section.claveCampo}
                                type="button"
                                onClick={() => selectSection(section.claveCampo)}
                                className={`w-full rounded-lg px-2.5 py-2 text-left transition ${
                                  isSelected
                                    ? 'bg-umsa-blue text-white shadow-sm'
                                    : 'border border-slate-100 bg-white text-slate-700 hover:border-sky-200 hover:bg-sky-50/60'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="truncate text-xs font-semibold">
                                    {section.subKey || section.claveCampo}
                                  </span>
                                  <span
                                    className={`shrink-0 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                                      isSelected
                                        ? 'bg-white/20 text-white'
                                        : isImage
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {isImage ? (
                                      <>
                                        <IconImage className="h-3 w-3" />
                                        <span>img</span>
                                      </>
                                    ) : (
                                      <>
                                        <IconFileText className="h-3 w-3" />
                                        <span>txt</span>
                                      </>
                                    )}
                                  </span>
                                </div>
                                <div
                                  className={`mt-0.5 truncate font-mono text-[10px] ${
                                    isSelected ? 'text-sky-100' : 'text-slate-400'
                                  }`}
                                >
                                  {section.claveCampo}
                                </div>
                                {section.valor && (
                                  <div
                                    className={`mt-1 line-clamp-1 text-[11px] ${
                                      isSelected ? 'text-sky-100/90' : 'text-slate-500'
                                    }`}
                                  >
                                    {section.valor}
                                  </div>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </aside>

          {/* Right Editor Area */}
          <section className="flex min-w-0 flex-col p-5 sm:p-8">
            {hasCrudForPage(activePageSlug) && (
              <div className="mb-6 flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setPageMode('textos')}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                    pageMode === 'textos'
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <IconFileText className="h-3.5 w-3.5" />
                  <span>Contenido de Página</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPageMode('crud')}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                    pageMode === 'crud'
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {activePageSlug === '/institucional/convenios' ? (
                    <>
                      <IconHandshake className="h-3.5 w-3.5" />
                      <span>Convenios Interinstitucionales</span>
                    </>
                  ) : activePageSlug === '/institucional/autoridades' ? (
                    <>
                      <IconGraduationCap className="h-3.5 w-3.5" />
                      <span>Representación Estudiantil (HCC)</span>
                    </>
                  ) : (
                    <>
                      <IconUsers className="h-3.5 w-3.5" />
                      <span>Plantel Docente y Administrativo</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {pageMode === 'crud' && activePageSlug === '/institucional/convenios' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">Convenios Interinstitucionales</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los convenios y alianzas estratégicas de la carrera.
                  </p>
                </div>
                <ConvenioCrud />
              </>
            ) : pageMode === 'crud' && activePageSlug === '/institucional/autoridades' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">Autoridades estudiantiles</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los representantes estudiantiles de la carrera.
                  </p>
                </div>
                <EstudianteAutoridadCrud />
              </>
            ) : pageMode === 'crud' && activePageSlug === '/institucional/docentes' ? (
              <>
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-bold text-slate-800">
                    Plantel docente y administrativo
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Administra los registros que se muestran en esta sección.
                  </p>
                </div>
                <PlantelCrud />
              </>
            ) : activeSection ? (
              <>
                {/* Section context breadcrumb and group navigation */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-500">Página:</span>
                    <span className="rounded bg-slate-100 px-2 py-1 font-bold text-slate-700">
                      {activePageTitle}
                    </span>
                    {activeGroup && (
                      <>
                        <span className="text-slate-300">/</span>
                        <span className="font-semibold text-slate-500">Grupo:</span>
                        <span className="rounded bg-sky-100 px-2 py-1 font-bold text-umsa-blue">
                          {activeGroup.label}
                        </span>
                      </>
                    )}
                  </div>

                  {activeGroupSections.length > 1 && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">
                        {activeIndexInGroup + 1} de {activeGroupSections.length}
                      </span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          disabled={activeIndexInGroup <= 0}
                          onClick={() =>
                            selectSection(activeGroupSections[activeIndexInGroup - 1].claveCampo)
                          }
                          className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-xs transition hover:bg-slate-50 hover:text-umsa-blue disabled:cursor-not-allowed disabled:opacity-30"
                          title="Sección anterior en este grupo"
                        >
                          <IconArrowLeft className="h-3 w-3" />
                          <span>Anterior</span>
                        </button>
                        <button
                          type="button"
                          disabled={activeIndexInGroup >= activeGroupSections.length - 1}
                          onClick={() =>
                            selectSection(activeGroupSections[activeIndexInGroup + 1].claveCampo)
                          }
                          className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-xs transition hover:bg-slate-50 hover:text-umsa-blue disabled:cursor-not-allowed disabled:opacity-30"
                          title="Siguiente sección en este grupo"
                        >
                          <span>Siguiente</span>
                          <IconArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section Form Details */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="min-w-0 flex-1">
                    <label
                      htmlFor="section-key"
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Clave de sección
                    </label>
                    <input
                      id="section-key"
                      value={activeSection.claveCampo}
                      readOnly
                      className="w-full font-mono text-base font-bold text-slate-800 outline-none"
                    />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Tipo de dato
                    </span>
                    <div
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100/90 px-3.5 py-2 text-sm font-semibold text-slate-600 shadow-2xs select-none cursor-default"
                      title="Tipo de dato no editable"
                    >
                      {activeSection.tipo === 'imagen' ? (
                        <>
                          <IconImage className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Imagen / Archivo</span>
                        </>
                      ) : (
                        <>
                          <IconFileText className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Texto</span>
                        </>
                      )}
                    </div>
                  </div>
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
                      className="inline-flex items-center gap-2 w-fit rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-umsa-blue hover:text-umsa-blue hover:bg-sky-50/50"
                    >
                      <IconUpload className="h-4 w-4" />
                      <span>Seleccionar imagen local</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageFile}
                      className="hidden"
                    />
                    <div className="flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
                      {activeSection.valor ? (
                        <img
                          src={activeSection.valor}
                          alt="Vista previa de la sección"
                          className="max-h-80 max-w-full rounded object-contain shadow-xs"
                        />
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
                    {error && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-red-600">
                        <IconAlertCircle className="h-4 w-4" />
                        {error}
                      </span>
                    )}
                    {!error && message && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600">
                        <IconCheck className="h-4 w-4" />
                        {message}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={saveSection}
                    disabled={saving}
                    className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-6 py-2.5 text-sm font-bold text-white shadow-xs transition hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <IconSave className="h-4 w-4" />
                    <span>{saving ? 'Guardando...' : 'Guardar sección'}</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center text-slate-400">
                <p className="text-base font-semibold">No hay secciones existentes para esta página.</p>
                <p className="mt-1 text-xs text-slate-400">
                  Selecciona otra página o administra su contenido desde el menú superior.
                </p>
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
