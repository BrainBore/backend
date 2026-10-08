import { useEffect, useMemo, useState } from 'react'
import { programaService } from '../services/programa.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

export const PROGRAM_TYPES = [
  'Todos',
  'Maestría',
  'Maestría Autofinanciada',
  'Diplomado',
  'Especialidad',
]

const emptyForm = {
  nombre: '',
  tipo: 'Maestría',
  costo: '',
}

export default function ProgramaCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await programaService.findAll()
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

  const startEdit = (p) => {
    setEditingId(p.idPrograma)
    setForm({
      nombre: p.nombre,
      tipo: p.tipo,
      costo: p.costo,
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
    if (!window.confirm('¿Está seguro de eliminar este programa de postgrado?')) return
    try {
      await programaService.remove(id)
      setRecords((prev) => prev.filter((r) => r.idPrograma !== id))
      if (editingId === id) closeForm()
      setMessage('Programa eliminado exitosamente')
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
        const updated = await programaService.update(editingId, form)
        setRecords((prev) => prev.map((r) => (r.idPrograma === editingId ? updated : r)))
        setMessage('Programa actualizado exitosamente')
      } else {
        const created = await programaService.create(form)
        setRecords((prev) => [...prev, created])
        setMessage('Programa creado exitosamente')
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
      const matchType =
        selectedTypeFilter === 'Todos' ||
        r.tipo.toLowerCase().includes(selectedTypeFilter.toLowerCase())
      const term = searchTerm.toLowerCase().trim()
      const matchSearch =
        !term ||
        r.nombre.toLowerCase().includes(term) ||
        r.costo.toLowerCase().includes(term) ||
        r.tipo.toLowerCase().includes(term)
      return matchType && matchSearch
    })
  }, [records, selectedTypeFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Programas de Postgrado</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra la oferta académica de maestrías, diplomados y especialidades de la carrera.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nuevo Programa</span>
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

      {/* Formulario Modal / Drawer */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-sky-200 bg-sky-50/50 p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-umsa-blue">
                {editingId ? 'Editar Programa de Postgrado' : 'Registrar Nuevo Programa de Postgrado'}
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
              Nombre del Programa *
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Ej. Maestría en Ciencia y Análisis de Datos"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Tipo de Programa *
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              >
                <option value="Maestría">Maestría</option>
                <option value="Maestría Autofinanciada">Maestría Autofinanciada</option>
                <option value="Diplomado">Diplomado</option>
                <option value="Especialidad">Especialidad</option>
                <option value="Doctorado">Doctorado</option>
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-3">
              Costo / Modalidad Económica *
              <input
                type="text"
                required
                value={form.costo}
                onChange={(e) => setForm({ ...form, costo: e.target.value })}
                placeholder="Ej. 18.000 Bs. (Colegiatura) ó 4.500 Bs."
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
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar Programa' : 'Guardar Programa'}</span>
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
            <span className="text-xs font-bold uppercase text-slate-400">Tipo:</span>
            {PROGRAM_TYPES.map((type) => {
              const count =
                type === 'Todos'
                  ? records.length
                  : records.filter((r) => r.tipo.toLowerCase().includes(type.toLowerCase())).length

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedTypeFilter(type)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedTypeFilter === type
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar programa o costo..."
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

      {/* Tabla de Programas */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando programas...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron programas con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Nombre del Programa</th>
                <th className="px-3 py-3">Tipo</th>
                <th className="px-3 py-3">Costo / Inversión</th>
                <th className="px-3 py-3 text-center">Módulos</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((p) => {
                const modCount = p.organiza?.length || 0

                return (
                  <tr key={p.idPrograma} className="transition hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{p.idPrograma}</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-800">{p.nombre}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-umsa-blue">
                        {p.tipo}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 font-medium">{p.costo}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {modCount} {modCount === 1 ? 'módulo' : 'módulos'}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium">
                      <button
                        type="button"
                        onClick={() => startEdit(p)}
                        className="mr-3 inline-flex items-center gap-1 text-umsa-blue hover:underline"
                      >
                        <IconEdit className="h-3 w-3" />
                        <span>Editar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(p.idPrograma)}
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
