import { useEffect, useMemo, useState } from 'react'
import { convocatoriaAuxiliaturaService } from '../services/convocatoria-auxiliatura.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

export const ESTADO_FILTERS = ['Todos', 'Abierta', 'Próximamente', 'Concluida']

const emptyForm = {
  materia: '',
  tipo: 'Docencia',
  descripcion: '',
  fechaPublicacion: '',
  fechaCierre: '',
  plazas: 1,
  estado: 'Abierta',
}

export default function ConvocatoriaAuxiliaturaCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEstadoFilter, setSelectedEstadoFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await convocatoriaAuxiliaturaService.findAll()
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

  const startEdit = (c) => {
    setEditingId(c.id)
    const pub = c.fechaPublicacion ? c.fechaPublicacion.split('T')[0] : ''
    const cie = c.fechaCierre ? c.fechaCierre.split('T')[0] : ''
    setForm({
      materia: c.materia,
      tipo: c.tipo,
      descripcion: c.descripcion,
      fechaPublicacion: pub,
      fechaCierre: cie,
      plazas: c.plazas,
      estado: c.estado,
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
    if (!window.confirm('¿Está seguro de eliminar esta convocatoria de auxiliatura?')) return
    try {
      await convocatoriaAuxiliaturaService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Convocatoria eliminada exitosamente')
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
      if (editingId) {
        const updated = await convocatoriaAuxiliaturaService.update(editingId, form)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Convocatoria actualizada exitosamente')
      } else {
        const created = await convocatoriaAuxiliaturaService.create(form)
        setRecords((prev) => [...prev, created])
        setMessage('Convocatoria registrada exitosamente')
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
      const matchEstado =
        selectedEstadoFilter === 'Todos' ||
        r.estado.toLowerCase() === selectedEstadoFilter.toLowerCase()
      const term = searchTerm.toLowerCase().trim()
      const matchSearch =
        !term ||
        r.materia.toLowerCase().includes(term) ||
        r.tipo.toLowerCase().includes(term) ||
        r.descripcion.toLowerCase().includes(term) ||
        r.estado.toLowerCase().includes(term)
      return matchEstado && matchSearch
    })
  }, [records, selectedEstadoFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Convocatorias de Auxiliaturas</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra las plazas de auxiliatura para docencia, laboratorios y proyectos de la carrera.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nueva Convocatoria</span>
        </button>
      </div>

      {/* Alertas */}
      <div aria-live="polite">
        {error && (
          <div className="mb-4 inline-flex w-full items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
            <IconAlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {!error && message && (
          <div className="mb-4 inline-flex w-full items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-700">
            <IconCheck className="h-4 w-4 shrink-0" />
            <span>{message}</span>
          </div>
        )}
      </div>

      {/* Formulario Drawer */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-sky-200 bg-sky-50/50 p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-umsa-blue">
                {editingId ? 'Editar Convocatoria de Auxiliatura' : 'Registrar Nueva Convocatoria'}
              </h3>
              {editingId && (
                <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                  ID: {editingId}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={closeForm}
              className="text-slate-400 hover:text-slate-700"
              title="Cerrar"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Materia / Denominación de la Convocatoria *
              <input
                type="text"
                required
                value={form.materia}
                onChange={(e) => setForm({ ...form, materia: e.target.value })}
                placeholder="Ej. Auxiliatura de Docencia - Gestión II/2026"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Tipo *
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              >
                <option value="Docencia">Docencia</option>
                <option value="Laboratorio">Laboratorio</option>
                <option value="Investigación">Investigación</option>
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-3">
              Descripción del Alcance *
              <textarea
                rows={3}
                required
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                placeholder="Áreas de conocimiento, asignaturas a apoyar y condiciones del concurso de méritos..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Fecha de Publicación
              <input
                type="date"
                value={form.fechaPublicacion}
                onChange={(e) => setForm({ ...form, fechaPublicacion: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Fecha de Cierre
              <input
                type="date"
                value={form.fechaCierre}
                onChange={(e) => setForm({ ...form, fechaCierre: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <div className="grid grid-cols-2 gap-2">
              <label className="text-xs font-semibold text-slate-700">
                Plazas *
                <input
                  type="number"
                  min="1"
                  required
                  value={form.plazas}
                  onChange={(e) => setForm({ ...form, plazas: Number(e.target.value) })}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
                />
              </label>

              <label className="text-xs font-semibold text-slate-700">
                Estado *
                <select
                  value={form.estado}
                  onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
                >
                  <option value="Abierta">Abierta</option>
                  <option value="Próximamente">Próximamente</option>
                  <option value="Concluida">Concluida</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666] disabled:opacity-50"
            >
              <IconCheck className="h-3.5 w-3.5" />
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar Convocatoria' : 'Guardar Convocatoria'}</span>
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Controles y Filtros */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-400">Estado:</span>
            {ESTADO_FILTERS.map((estado) => {
              const count =
                estado === 'Todos'
                  ? records.length
                  : records.filter((r) => r.estado.toLowerCase() === estado.toLowerCase()).length

              return (
                <button
                  key={estado}
                  type="button"
                  onClick={() => setSelectedEstadoFilter(estado)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedEstadoFilter === estado
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {estado} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por materia, tipo o estado..."
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

      {/* Tabla de Convocatorias */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando convocatorias...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron convocatorias con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Materia / Convocatoria</th>
                <th className="px-3 py-3">Tipo</th>
                <th className="px-3 py-3 text-center">Plazas</th>
                <th className="px-3 py-3">Fechas (Pub / Cierre)</th>
                <th className="px-3 py-3">Estado</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((c) => {
                const pubDate = c.fechaPublicacion ? c.fechaPublicacion.split('T')[0] : '-'
                const cieDate = c.fechaCierre ? c.fechaCierre.split('T')[0] : '-'

                return (
                  <tr key={c.id} className="transition hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{c.id}</td>
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-800">{c.materia}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 max-w-sm">{c.descripcion}</div>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-umsa-blue">
                        {c.tipo}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center font-bold text-slate-700">
                      {c.plazas}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 font-mono text-[11px]">
                      {pubDate} al {cieDate}
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          c.estado === 'Abierta'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : c.estado === 'Próximamente'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {c.estado}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium">
                      <button
                        type="button"
                        onClick={() => startEdit(c)}
                        className="mr-3 inline-flex items-center gap-1 text-umsa-blue hover:underline"
                      >
                        <IconEdit className="h-3 w-3" />
                        <span>Editar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(c.id)}
                        className="inline-flex items-center gap-1 text-red-600 hover:underline"
                      >
                        <IconTrash className="h-3 w-3" />
                        <span>Eliminar</span>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
