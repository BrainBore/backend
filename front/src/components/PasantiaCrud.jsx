import { useEffect, useMemo, useState } from 'react'
import { pasantiaService } from '../services/pasantia.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

export const PASANTIA_TIPOS = [
  'Todos',
  'Pasantía de Verano',
  'Práctica Guiada',
  'Convenio Institucional',
  'Bolsa de Trabajo',
]

const emptyForm = {
  titulo: '',
  tipo: 'Pasantía de Verano',
  descripcion: '',
  area: '',
  empresa: '',
  fechaCierre: '',
  requisitos: '',
}

export default function PasantiaCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedTipoFilter, setSelectedTipoFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await pasantiaService.findAll()
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
    setEditingId(p.id)
    const cie = p.fechaCierre ? p.fechaCierre.split('T')[0] : ''
    setForm({
      titulo: p.titulo,
      tipo: p.tipo,
      descripcion: p.descripcion,
      area: p.area,
      empresa: p.empresa,
      fechaCierre: cie,
      requisitos: p.requisitos,
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
    if (!window.confirm('¿Está seguro de eliminar esta pasantía / convocatoria laboral?')) return
    try {
      await pasantiaService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Pasantía eliminada exitosamente')
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
        tipo: form.tipo.trim(),
        descripcion: form.descripcion.trim(),
        area: form.area.trim(),
        empresa: form.empresa.trim(),
        fechaCierre: form.fechaCierre ? form.fechaCierre : null,
        requisitos: form.requisitos.trim(),
      }

      if (editingId) {
        const updated = await pasantiaService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Pasantía actualizada con éxito')
      } else {
        const created = await pasantiaService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Pasantía creada con éxito')
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
      const matchesTipo =
        selectedTipoFilter === 'Todos' ||
        (r.tipo && r.tipo.toLowerCase() === selectedTipoFilter.toLowerCase())
      const s = searchTerm.toLowerCase()
      const matchesSearch =
        !searchTerm ||
        (r.titulo && r.titulo.toLowerCase().includes(s)) ||
        (r.empresa && r.empresa.toLowerCase().includes(s)) ||
        (r.area && r.area.toLowerCase().includes(s)) ||
        (r.requisitos && r.requisitos.toLowerCase().includes(s))
      return matchesTipo && matchesSearch
    })
  }, [records, selectedTipoFilter, searchTerm])

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
            Pasantías y Bolsa de Trabajo
          </h2>
          <p className="text-xs text-slate-500">
            Administre oportunidades de pasantías, prácticas profesionales y convenios de empleo para estudiantes.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-umsa-blue px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-sky-800"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nueva Pasantía</span>
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
              {editingId ? 'Editar Pasantía' : 'Registrar Nueva Pasantía'}
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
                Título del Cargo / Convocatoria *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej. Pasante en Análisis de Riesgo Crediticio"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Empresa u Organización *
              </label>
              <input
                type="text"
                required
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                placeholder="Ej. Banco Central de Bolivia"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Tipo de Convocatoria *
              </label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              >
                <option value="Pasantía de Verano">Pasantía de Verano</option>
                <option value="Práctica Guiada">Práctica Guiada</option>
                <option value="Convenio Institucional">Convenio Institucional</option>
                <option value="Bolsa de Trabajo">Bolsa de Trabajo</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Área de Especialidad / Enfoque *
              </label>
              <input
                type="text"
                required
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                placeholder="Ej. Modelado Actuarial / Business Intelligence"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Fecha de Cierre de Postulación
              </label>
              <input
                type="date"
                value={form.fechaCierre}
                onChange={(e) => setForm({ ...form, fechaCierre: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Requisitos Clave
              </label>
              <input
                type="text"
                value={form.requisitos}
                onChange={(e) => setForm({ ...form, requisitos: e.target.value })}
                placeholder="Ej. Estudiantes desde 7mo semestre, dominio de R o Python"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Descripción del Puesto y Funciones *
              </label>
              <textarea
                rows={3}
                required
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                placeholder="Describa el objetivo de la pasantía, actividades a desarrollar y modalidad..."
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-400">Tipo:</span>
            {PASANTIA_TIPOS.map((tipo) => {
              const count =
                tipo === 'Todos'
                  ? records.length
                  : records.filter((r) => r.tipo && r.tipo.toLowerCase() === tipo.toLowerCase()).length

              return (
                <button
                  key={tipo}
                  type="button"
                  onClick={() => setSelectedTipoFilter(tipo)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedTipoFilter === tipo
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tipo} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por título, empresa o área..."
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

      {/* Tabla de Pasantías */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando pasantías...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron pasantías con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Oportunidad / Empresa</th>
                <th className="px-3 py-3">Tipo / Área</th>
                <th className="px-3 py-3">Requisitos</th>
                <th className="px-3 py-3">Cierre</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((p) => {
                const cieDate = p.fechaCierre ? p.fechaCierre.split('T')[0] : 'Abierta'

                return (
                  <tr key={p.id} className="transition hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{p.id}</td>
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-800">{p.titulo}</div>
                      <div className="text-[11px] font-medium text-slate-500">{p.empresa}</div>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-umsa-blue mr-1">
                        {p.tipo}
                      </span>
                      <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">
                        {p.area}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 max-w-xs truncate text-[11px]" title={p.requisitos}>
                      {p.requisitos || 'Sin requisitos específicos'}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 font-mono text-[11px]">
                      {cieDate}
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
                        onClick={() => handleDelete(p.id)}
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
