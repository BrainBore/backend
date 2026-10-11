import { useEffect, useMemo, useState } from 'react'
import { noticiaService } from '../services/noticia.service'
import { uploadService } from '../services/upload.service'

export const NOTICIA_CATEGORIAS = [
  'Comunicado',
  'Becas',
  'Investigación',
  'Académico',
  'Eventos',
  'Institucional',
  'Postgrado',
  'Convocatorias',
]

const COLORES = [
  { label: 'Azul', value: '#00447e' },
  { label: 'Naranja', value: '#ea580c' },
  { label: 'Gris', value: '#64748b' },
]

const ESTADOS = [
  { value: 'published', label: 'Publicado' },
  { value: 'draft', label: 'Borrador' },
]

const emptyForm = {
  categoria: NOTICIA_CATEGORIAS[0],
  color: '#00447e',
  fecha: '',
  titulo: '',
  extracto: '',
  imagenUrl: '',
  tiempoLectura: '',
  enlace: '',
  estado: 'published',
  fechaExpiracion: '',
}

const inputClass =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal text-slate-800 outline-none focus:border-umsa-blue focus:ring-1 focus:ring-umsa-blue'

const toDay = (value) => (value ? String(value).slice(0, 10) : '')

const sortRecords = (list) =>
  [...list].sort((a, b) => toDay(b.fecha).localeCompare(toDay(a.fecha)) || b.id - a.id)

export default function NoticiaCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [estadoFilter, setEstadoFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let isMounted = true
    noticiaService
      .findAll()
      .then((data) => {
        if (!isMounted) return
        setRecords(sortRecords(data))
        setError('')
      })
      .catch((requestError) => isMounted && setError(requestError.message))
      .finally(() => isMounted && setLoading(false))

    return () => {
      isMounted = false
    }
  }, [])

  const categoriaOptions = NOTICIA_CATEGORIAS.includes(form.categoria)
    ? NOTICIA_CATEGORIAS
    : [...NOTICIA_CATEGORIAS, form.categoria]

  const colorOptions = COLORES.some((c) => c.value === form.color)
    ? COLORES
    : [...COLORES, { label: form.color, value: form.color }]

  const resetForm = (clearMessage = true) => {
    setForm(emptyForm)
    setEditingId(null)
    if (clearMessage) setMessage('')
  }

  const handleImageChange = async (event) => {
    const [file] = event.target.files
    event.target.value = ''
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('El archivo seleccionado debe ser una imagen.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('El tamaño de la imagen no debe superar los 10 MB.')
      return
    }

    setUploading(true)
    setError('')
    setMessage('')
    try {
      const result = await uploadService.uploadImage(file)
      setForm((current) => ({ ...current, imagenUrl: result.url }))
      setMessage(`Imagen subida con éxito: ${result.filename}`)
    } catch (uploadError) {
      setError(uploadError.message || 'Error al subir la imagen.')
    } finally {
      setUploading(false)
    }
  }

  const submit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')
    try {
      const payload = {
        ...form,
        imagenUrl: form.imagenUrl.trim(),
        fechaExpiracion: form.fechaExpiracion || null,
      }
      const saved = editingId
        ? await noticiaService.update(editingId, payload)
        : await noticiaService.create(payload)

      setRecords((current) =>
        sortRecords(
          editingId
            ? current.map((record) => (record.id === editingId ? saved : record))
            : [...current, saved],
        ),
      )
      setMessage(editingId ? 'Noticia actualizada con éxito' : 'Noticia agregada con éxito')
      setForm(emptyForm)
      setEditingId(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar esta noticia?')) return
    try {
      await noticiaService.remove(id)
      setRecords((current) => current.filter((record) => record.id !== id))
      if (editingId === id) resetForm()
      setMessage('Noticia eliminada')
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  const startEdit = (record) => {
    setEditingId(record.id)
    setForm({
      categoria: record.categoria,
      color: record.color,
      fecha: toDay(record.fecha),
      titulo: record.titulo,
      extracto: record.extracto,
      imagenUrl: record.imagenUrl || '',
      tiempoLectura: record.tiempoLectura,
      enlace: record.enlace,
      estado: record.estado,
      fechaExpiracion: toDay(record.fechaExpiracion),
    })
    setMessage('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredRecords = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    return records.filter((r) => {
      if (estadoFilter !== 'all' && r.estado !== estadoFilter) return false
      if (!term) return true
      return (
        r.titulo.toLowerCase().includes(term) ||
        r.extracto.toLowerCase().includes(term) ||
        r.categoria.toLowerCase().includes(term)
      )
    })
  }, [records, estadoFilter, searchTerm])

  const canPreview = form.imagenUrl && !form.imagenUrl.startsWith('/images/')

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-xl font-bold text-slate-800">Noticias de Inicio</h2>
        <p className="mt-1 text-sm text-slate-500">
          Administra las noticias de la sección "Actualidad Institucional" de la página de inicio.
        </p>
      </div>

      <form onSubmit={submit} className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="text-sm font-bold text-slate-800">
            {editingId ? 'Editar Noticia' : 'Nueva Noticia'}
          </h3>
          {editingId && (
            <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
              Modo Edición (ID: {editingId})
            </span>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
            Título *
            <input
              type="text"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              required
              placeholder="Ej. Apertura de inscripciones 2026"
              className={inputClass}
            />
          </label>

          <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
            Extracto *
            <textarea
              rows={3}
              value={form.extracto}
              onChange={(e) => setForm({ ...form, extracto: e.target.value })}
              required
              placeholder="Resumen corto de la noticia..."
              className={inputClass}
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Categoría *
            <select
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              required
              className={inputClass}
            >
              {categoriaOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Color *
            <select
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
              required
              className={inputClass}
            >
              {colorOptions.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Fecha de publicación *
            <input
              type="date"
              value={form.fecha}
              onChange={(e) => setForm({ ...form, fecha: e.target.value })}
              required
              className={inputClass}
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Tiempo de lectura *
            <input
              type="text"
              value={form.tiempoLectura}
              onChange={(e) => setForm({ ...form, tiempoLectura: e.target.value })}
              required
              placeholder="Ej. 3 min"
              className={inputClass}
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Enlace (ruta o URL) *
            <input
              type="text"
              value={form.enlace}
              onChange={(e) => setForm({ ...form, enlace: e.target.value })}
              required
              placeholder="Ej. /postgrado/diplomados  (o # si no tiene enlace)"
              className={inputClass}
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Estado *
            <select
              value={form.estado}
              onChange={(e) => setForm({ ...form, estado: e.target.value })}
              required
              className={inputClass}
            >
              {ESTADOS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Fecha de expiración (opcional)
            <input
              type="date"
              value={form.fechaExpiracion}
              onChange={(e) => setForm({ ...form, fechaExpiracion: e.target.value })}
              className={inputClass}
            />
          </label>

          <div className="text-sm font-semibold text-slate-700">
            Imagen (opcional)
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={uploading}
                className="text-xs font-normal text-slate-600"
              />
              {uploading && <span className="text-xs text-slate-500">Subiendo...</span>}
              {form.imagenUrl && (
                <button
                  type="button"
                  onClick={() => setForm({ ...form, imagenUrl: '' })}
                  className="text-xs font-bold text-red-600 hover:underline"
                >
                  Quitar imagen
                </button>
              )}
            </div>
            {form.imagenUrl && (
              <div className="mt-2 flex items-center gap-3">
                {canPreview && (
                  <img
                    src={uploadService.resolveMediaUrl(form.imagenUrl)}
                    alt="Vista previa"
                    className="h-16 w-24 rounded-md border border-slate-200 object-cover"
                  />
                )}
                <span className="break-all text-xs font-normal text-slate-500">{form.imagenUrl}</span>
              </div>
            )}
            {!form.imagenUrl && (
              <p className="mt-1 text-xs font-normal text-slate-400">
                Sin imagen se muestra el diseño de Comunicado Oficial.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving || uploading}
            className="rounded-lg bg-umsa-blue px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003666] disabled:opacity-50"
          >
            {saving ? 'Guardando...' : editingId ? 'Actualizar Noticia' : 'Guardar Noticia'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => resetForm()}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div aria-live="polite" className="text-sm">
        {error && <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">{error}</div>}
        {!error && message && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-700">{message}</div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase text-slate-400">Estado:</span>
          {[{ value: 'all', label: 'Todos' }, ...ESTADOS].map((opt) => {
            const count =
              opt.value === 'all' ? records.length : records.filter((r) => r.estado === opt.value).length
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setEstadoFilter(opt.value)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  estadoFilter === opt.value
                    ? 'bg-umsa-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.label} ({count})
              </button>
            )
          })}
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar noticias..."
          className="rounded-lg border border-slate-300 px-3 py-1 text-xs outline-none focus:border-umsa-blue"
        />
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">Cargando noticias...</p>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-400">
          No hay noticias en esta selección.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Noticia</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Caduca</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="transition hover:bg-slate-50/70">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-400">{record.id}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-600">{toDay(record.fecha)}</td>
                  <td className="max-w-md px-4 py-3">
                    <span
                      className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: record.color }}
                    >
                      {record.categoria}
                    </span>
                    <div className="font-bold text-slate-800">{record.titulo}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        record.estado === 'published'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {record.estado === 'published' ? 'Publicado' : 'Borrador'}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-600">
                    {toDay(record.fechaExpiracion) || '—'}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(record)}
                      className="mr-3 text-xs font-bold text-umsa-blue hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(record.id)}
                      className="text-xs font-bold text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}