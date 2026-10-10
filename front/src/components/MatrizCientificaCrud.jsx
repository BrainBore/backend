import { useEffect, useMemo, useState } from 'react'
import { matrizCientificaService } from '../services/matriz-cientifica.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

const emptyForm = {
  titulo: '',
  descripcion: '',
  autor: '',
}

export default function MatrizCientificaCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await matrizCientificaService.findAll()
      setRecords(Array.isArray(data) ? data : [])
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

  const startEdit = (m) => {
    setEditingId(m.id)
    setForm({
      titulo: m.titulo,
      descripcion: m.descripcion,
      autor: m.autor,
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
    if (!window.confirm('¿Está seguro de eliminar esta línea de la matriz científica?')) return
    try {
      await matrizCientificaService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Línea eliminada exitosamente')
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
        descripcion: form.descripcion.trim(),
        autor: form.autor.trim(),
      }

      if (editingId) {
        const updated = await matrizCientificaService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Línea científica actualizada con éxito')
      } else {
        const created = await matrizCientificaService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Línea científica creada con éxito')
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
    return records.filter((r) => {
      const s = searchTerm.toLowerCase()
      return (
        !searchTerm ||
        (r.titulo && r.titulo.toLowerCase().includes(s)) ||
        (r.autor && r.autor.toLowerCase().includes(s)) ||
        (r.descripcion && r.descripcion.toLowerCase().includes(s))
      )
    })
  }, [records, searchTerm])

  return (
    <div className="space-y-6">
      {/* Mensajes de feedback */}
      {message && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-800">
          <IconCheck className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium text-rose-800">
          <IconAlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Cabecera del Panel */}
      <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-800">
            Matriz Científica y Líneas de Investigación
          </h2>
          <p className="text-xs text-slate-500">
            Defina y actualice las líneas prioritarias, descriptores temáticos y tutores o coordinadores responsables.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-umsa-blue px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-sky-800"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nueva Línea</span>
        </button>
      </div>

      {/* Formulario de Alta / Edición */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-sky-100 bg-sky-50/40 p-5 shadow-xs"
        >
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800">
              {editingId ? 'Editar Línea de Investigación' : 'Registrar Nueva Línea'}
            </h3>
            <button
              type="button"
              onClick={closeForm}
              className="text-slate-400 hover:text-slate-600"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Línea / Eje Temático *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej. Modelación Espacial y Epidemiológica"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Coordinador / Tutor / Responsable *
              </label>
              <input
                type="text"
                required
                value={form.autor}
                onChange={(e) => setForm({ ...form, autor: e.target.value })}
                placeholder="Ej. Dr. Mario Vargas (Tutor) & Equipo SCE"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Descripción y Alcance *
              </label>
              <textarea
                rows={3}
                required
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                placeholder="Describa el objetivo temático, metodologías aplicadas y proyectos asociados..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-sky-100 pt-3">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-sky-800 disabled:opacity-60"
            >
              <IconCheck className="h-3.5 w-3.5" />
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar' : 'Guardar'}</span>
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Controles y Filtros */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-600">
            Total de líneas de matriz científica: <span className="font-mono text-umsa-blue">{records.length}</span>
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por tema, autor o descripción..."
              className="w-full rounded-lg border border-slate-300 py-1.5 pl-8 pr-7 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
            />
            <span className="pointer-events-none absolute left-2.5 top-2 text-slate-400">
              <IconSearch className="h-3.5 w-3.5" />
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                title="Limpiar"
              >
                <IconClose className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabla de Matriz Científica */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando matriz científica...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron líneas de investigación con los términos de búsqueda.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Línea de Investigación</th>
                <th className="px-3 py-3">Descripción Temática</th>
                <th className="px-3 py-3">Responsable / Tutor</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((m) => (
                <tr key={m.id} className="transition hover:bg-slate-50/70">
                  <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{m.id}</td>
                  <td className="px-3 py-2.5 font-semibold text-slate-800">
                    {m.titulo}
                  </td>
                  <td className="px-3 py-2.5 text-slate-600 max-w-md">
                    <p className="line-clamp-2">{m.descripcion}</p>
                  </td>
                  <td className="px-3 py-2.5 font-medium text-slate-700">
                    {m.autor}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium">
                    <button
                      type="button"
                      onClick={() => startEdit(m)}
                      className="mr-3 inline-flex items-center gap-1 text-umsa-blue hover:underline"
                    >
                      <IconEdit className="h-3 w-3" />
                      <span>Editar</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(m.id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:underline"
                    >
                      <IconTrash className="h-3 w-3" />
                      <span>Eliminar</span>
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
