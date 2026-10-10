import { useEffect, useMemo, useState } from 'react'
import { directivoEstudianteService } from '../services/directivo-estudiante.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

export const DIRECTIVO_AREAS = [
  'Todos',
  'Directiva CEE',
  'Delegados HCF',
  'Delegados Académico',
]

const emptyForm = {
  nombre: '',
  cargo: '',
  area: 'Directiva CEE',
}

export default function DirectivoEstudianteCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedAreaFilter, setSelectedAreaFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await directivoEstudianteService.findAll()
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

  const startEdit = (d) => {
    setEditingId(d.id)
    setForm({
      nombre: d.nombre,
      cargo: d.cargo,
      area: d.area,
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
    if (!window.confirm('¿Está seguro de eliminar este directivo estudiantil?')) return
    try {
      await directivoEstudianteService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Directivo eliminado exitosamente')
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
        const updated = await directivoEstudianteService.update(editingId, form)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Directivo actualizado exitosamente')
      } else {
        const created = await directivoEstudianteService.create(form)
        setRecords((prev) => [...prev, created])
        setMessage('Directivo registrado exitosamente')
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
      const matchArea =
        selectedAreaFilter === 'Todos' ||
        r.area.toLowerCase() === selectedAreaFilter.toLowerCase()
      const term = searchTerm.toLowerCase().trim()
      const matchSearch =
        !term ||
        r.nombre.toLowerCase().includes(term) ||
        r.cargo.toLowerCase().includes(term) ||
        r.area.toLowerCase().includes(term)
      return matchArea && matchSearch
    })
  }, [records, selectedAreaFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Directiva y Representación Estudiantil</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra los miembros de la Directiva del CEE, Delegados al HCF y Delegados al Consejo Académico.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nuevo Directivo</span>
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
                {editingId ? 'Editar Representante Estudiantil' : 'Registrar Nuevo Representante Estudiantil'}
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
              Nombre Completo *
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Ej. Jhoseline Gloria Chambi Velasco"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Área de Representación *
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              >
                <option value="Directiva CEE">Directiva CEE</option>
                <option value="Delegados HCF">Delegados HCF</option>
                <option value="Delegados Académico">Delegados Académico</option>
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-3">
              Cargo / Función *
              <input
                type="text"
                required
                value={form.cargo}
                onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                placeholder="Ej. Primera Secretaria Ejecutiva, Primer Titular..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666] disabled:opacity-50"
            >
              <IconCheck className="h-3.5 w-3.5" />
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar Directivo' : 'Guardar Directivo'}</span>
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
            <span className="text-xs font-bold uppercase text-slate-400">Área:</span>
            {DIRECTIVO_AREAS.map((area) => {
              const count =
                area === 'Todos'
                  ? records.length
                  : records.filter((r) => r.area.toLowerCase() === area.toLowerCase()).length

              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedAreaFilter(area)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedAreaFilter === area
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {area} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre o cargo..."
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

      {/* Tabla de Directivos */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando directivos estudiantiles...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron directivos con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Nombre del Estudiante</th>
                <th className="px-3 py-3">Cargo</th>
                <th className="px-3 py-3">Área de Representación</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((d) => (
                <tr key={d.id} className="transition hover:bg-slate-50/70">
                  <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{d.id}</td>
                  <td className="px-3 py-2.5 font-semibold text-slate-800">{d.nombre}</td>
                  <td className="px-3 py-2.5 text-slate-700 font-medium">{d.cargo}</td>
                  <td className="px-3 py-2.5">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                        d.area === 'Directiva CEE'
                          ? 'bg-sky-50 text-umsa-blue border border-sky-100'
                          : d.area === 'Delegados HCF'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {d.area}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium">
                    <button
                      type="button"
                      onClick={() => startEdit(d)}
                      className="mr-3 inline-flex items-center gap-1 text-umsa-blue hover:underline"
                    >
                      <IconEdit className="h-3 w-3" />
                      <span>Editar</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(d.id)}
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
