import { useEffect, useMemo, useState } from 'react'
import { libroService } from '../services/libro.service'
import { autorService } from '../services/autor.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconBookOpen,
  IconExternalLink,
} from './Icons'

const emptyForm = {
  titulo: '',
  editor: '',
  descripcionFisica: '',
  codigoIsbn: '',
  calificacionDewey: '',
  temas: '',
  link: '',
  idAutor: '',
}

export default function LibroCrud() {
  const [records, setRecords] = useState([])
  const [autores, setAutores] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAutorFilter, setSelectedAutorFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const [librosData, autoresData] = await Promise.all([
        libroService.findAll(),
        autorService.findAll(),
      ])
      setRecords(Array.isArray(librosData) ? librosData : [])
      setAutores(Array.isArray(autoresData) ? autoresData : [])
      setError('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const startCreate = () => {
    setForm(emptyForm)
    setEditingId(null)
    setIsFormOpen(true)
    setMessage('')
    setError('')
  }

  const startEdit = (item) => {
    setEditingId(item.id)
    setForm({
      titulo: item.titulo || '',
      editor: item.editor || '',
      descripcionFisica: item.descripcionFisica || '',
      codigoIsbn: item.codigoIsbn || '',
      calificacionDewey: item.calificacionDewey || '',
      temas: item.temas || '',
      link: item.link || '',
      idAutor: item.idAutor ? String(item.idAutor) : '',
    })
    setIsFormOpen(true)
    setMessage('')
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setEditingId(null)
    setForm(emptyForm)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('¿Está seguro de eliminar este libro del catálogo?')) return
    try {
      await libroService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Libro eliminado exitosamente')
      setTimeout(() => setMessage(''), 3500)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      const payload = {
        titulo: form.titulo.trim(),
        editor: form.editor.trim(),
        descripcionFisica: form.descripcionFisica.trim(),
        codigoIsbn: form.codigoIsbn.trim(),
        calificacionDewey: form.calificacionDewey.trim(),
        temas: form.temas.trim(),
        link: form.link.trim(),
        idAutor: form.idAutor ? Number(form.idAutor) : null,
      }

      if (editingId) {
        const updated = await libroService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Libro actualizado exitosamente')
      } else {
        const created = await libroService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Libro registrado exitosamente')
      }

      closeForm()
      setTimeout(() => setMessage(''), 3500)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const filteredRecords = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return records.filter((r) => {
      const matchSearch =
        !term ||
        r.titulo?.toLowerCase().includes(term) ||
        r.temas?.toLowerCase().includes(term) ||
        r.editor?.toLowerCase().includes(term) ||
        r.codigoIsbn?.toLowerCase().includes(term) ||
        r.calificacionDewey?.toLowerCase().includes(term) ||
        r.autorRel?.nombre?.toLowerCase().includes(term)

      const matchAutor =
        !selectedAutorFilter || String(r.idAutor) === selectedAutorFilter

      return matchSearch && matchAutor
    })
  }, [records, searchTerm, selectedAutorFilter])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Catálogo de Libros y Textos</h2>
          <p className="mt-1 text-sm text-slate-500">
            Administra el acervo bibliográfico, códigos Dewey, ISBN y enlaces OPAC/KOHA.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-sky-900"
        >
          <IconPlus className="h-4 w-4" />
          <span>Nuevo libro</span>
        </button>
      </div>

      {/* Notifications */}
      {message && (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800 font-medium">
          <IconCheck className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800 font-medium">
          <IconAlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Modal / Form */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 shadow-xs transition"
        >
          <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4">
            <h3 className="text-sm font-bold text-umsa-blue uppercase tracking-wider">
              {editingId ? 'Editar Libro' : 'Registrar Nuevo Libro'}
            </h3>
            <button
              type="button"
              onClick={closeForm}
              className="text-slate-400 hover:text-slate-600 transition"
              title="Cancelar"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Título del Libro *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej: Estadística Matemática con Aplicaciones"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Autor Principal
              </label>
              <select
                value={form.idAutor}
                onChange={(e) => setForm({ ...form, idAutor: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              >
                <option value="">-- Sin autor asignado / Varios --</option>
                {autores.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.nombre} ({a.area || a.tipo})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Editorial / Editor
              </label>
              <input
                type="text"
                value={form.editor}
                onChange={(e) => setForm({ ...form, editor: e.target.value })}
                placeholder="Ej: Cengage Learning / Pearson"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Calificación Dewey (Signatura Topográfica)
              </label>
              <input
                type="text"
                value={form.calificacionDewey}
                onChange={(e) => setForm({ ...form, calificacionDewey: e.target.value })}
                placeholder="Ej: 519.5 W115e"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Código ISBN
              </label>
              <input
                type="text"
                value={form.codigoIsbn}
                onChange={(e) => setForm({ ...form, codigoIsbn: e.target.value })}
                placeholder="Ej: 978-607-481-223-7"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Descripción Física
              </label>
              <input
                type="text"
                value={form.descripcionFisica}
                onChange={(e) => setForm({ ...form, descripcionFisica: e.target.value })}
                placeholder="Ej: 944 páginas, il., 27 cm"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Enlace al Catálogo KOHA / OPAC o Descarga
              </label>
              <input
                type="url"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://bibliotecas.umsa.bo/..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Temas y Descriptores
              </label>
              <input
                type="text"
                value={form.temas}
                onChange={(e) => setForm({ ...form, temas: e.target.value })}
                placeholder="Ej: Estadística Matemática, Muestreo, Inferencia, Regresión"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2 border-t border-sky-100 pt-4">
            <button
              type="button"
              onClick={closeForm}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-sky-900 transition disabled:opacity-50"
            >
              {saving ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Registrar Libro'}
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por título, temas, ISBN, Dewey o autor..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-8 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
          />
          <IconSearch className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
            >
              <IconClose className="h-4 w-4" />
            </button>
          )}
        </div>

        <select
          value={selectedAutorFilter}
          onChange={(e) => setSelectedAutorFilter(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-umsa-blue"
        >
          <option value="">Todos los autores</option>
          {autores.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
            <tr>
              <th className="py-3 px-4">Título del Libro</th>
              <th className="py-3 px-4">Autor</th>
              <th className="py-3 px-4">Dewey / Signatura</th>
              <th className="py-3 px-4">Editorial</th>
              <th className="py-3 px-4">ISBN</th>
              <th className="py-3 px-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  Cargando catálogo de libros...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  {searchTerm || selectedAutorFilter
                    ? 'No se encontraron libros con esos criterios.'
                    : 'No hay libros registrados en el catálogo.'}
                </td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 font-bold text-slate-800">
                    <div className="flex items-start gap-2">
                      <IconBookOpen className="h-4 w-4 text-umsa-blue shrink-0 mt-0.5" />
                      <div>
                        <span>{item.titulo}</span>
                        {item.temas && (
                          <p className="mt-0.5 line-clamp-1 font-normal text-[11px] text-slate-500">
                            {item.temas}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-600">
                    {item.autorRel?.nombre || '—'}
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold text-slate-700">
                    {item.calificacionDewey || '—'}
                  </td>
                  <td className="py-3 px-4 text-slate-600">{item.editor || '—'}</td>
                  <td className="py-3 px-4 font-mono text-[11px] text-slate-500">
                    {item.codigoIsbn || '—'}
                  </td>
                  <td className="py-3 px-4 text-right space-x-1">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded p-1 text-slate-400 hover:text-umsa-blue transition"
                        title="Abrir enlace"
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => startEdit(item)}
                      className="rounded p-1 text-slate-500 hover:bg-sky-50 hover:text-umsa-blue transition"
                      title="Editar"
                    >
                      <IconEdit className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="rounded p-1 text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
                      title="Eliminar"
                    >
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
