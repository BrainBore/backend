import { useEffect, useMemo, useState } from 'react'
import { materiaPregradoService } from '../services/materia-pregrado.service'
import { planEstudiosService } from '../services/plan-estudios.service'
import {
  IconSearch,
  IconClose,
  IconBookOpen,
  IconLayers,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from './Icons'

export const CYCLES = [
  { id: 'all', label: 'Todos los Ciclos', semRange: null },
  { id: 'basico', label: 'Ciclo Básico (1° y 2° Semestre)', semRange: [1, 2] },
  { id: 'formacion', label: 'Ciclo de Formación (3° y 4° Semestre)', semRange: [3, 4] },
  { id: 'profesional', label: 'Ciclo Profesional (5°, 6° y 7° Semestre)', semRange: [5, 6, 7] },
  { id: 'titulacion', label: 'Ciclo de Titulación (8° Semestre)', semRange: [8] },
]

export function getCycleForSemester(sem) {
  if (sem <= 2) return 'Ciclo Básico'
  if (sem <= 4) return 'Ciclo de Formación'
  if (sem <= 7) return 'Ciclo Profesional'
  return 'Ciclo de Titulación'
}

const emptyForm = {
  siglaMateriaAct: '',
  nombreMateriaAct: '',
  horasMateria: 200,
  prerrequisitos: 'Ninguno',
  semestre: 1,
  planIds: [2], // Por defecto Plan Nuevo (ID 2)
}

export default function MateriaPlanCrud() {
  const [materias, setMaterias] = useState([])
  const [planes, setPlanes] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [selectedCycle, setSelectedCycle] = useState('all')
  const [selectedPlanFilter, setSelectedPlanFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const loadData = async () => {
    try {
      setLoading(true)
      const [matData, planData] = await Promise.all([
        materiaPregradoService.findAll(),
        planEstudiosService.findAll(),
      ])
      setMaterias(matData)
      setPlanes(planData)
      setError('')
    } catch (err) {
      setError(err.message || 'Error al cargar datos de materias')
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
    setError('')
    setMessage('')
    setIsFormOpen(true)
  }

  const startEdit = (materia) => {
    const planIds = (materia.incluye || []).map((i) => i.idPlanEstudio)
    setForm({
      siglaMateriaAct: materia.siglaMateriaAct,
      nombreMateriaAct: materia.nombreMateriaAct,
      horasMateria: materia.horasMateria,
      prerrequisitos: materia.prerrequisitos,
      semestre: materia.semestre,
      planIds: planIds.length > 0 ? planIds : [2],
    })
    setEditingId(materia.idMateriaAct)
    setError('')
    setMessage('')
    setIsFormOpen(true)
  }

  const handlePlanCheckbox = (planId) => {
    setForm((prev) => {
      const exists = prev.planIds.includes(planId)
      const nextPlanIds = exists
        ? prev.planIds.filter((id) => id !== planId)
        : [...prev.planIds, planId]
      return { ...prev, planIds: nextPlanIds }
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      if (editingId) {
        await materiaPregradoService.update(editingId, form)
        setMessage('Materia actualizada correctamente')
      } else {
        await materiaPregradoService.create(form)
        setMessage('Materia registrada con éxito')
      }
      setIsFormOpen(false)
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al guardar materia')
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Está seguro de eliminar esta materia? Esta acción no se puede deshacer.')) return
    try {
      await materiaPregradoService.remove(id)
      setMessage('Materia eliminada')
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al eliminar materia')
    }
  }

  const filteredMaterias = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    const activeCycleConfig = CYCLES.find((c) => c.id === selectedCycle)

    return materias.filter((m) => {
      // Filtro por ciclo
      if (activeCycleConfig && activeCycleConfig.semRange) {
        if (!activeCycleConfig.semRange.includes(m.semestre)) return false
      }
      // Filtro por plan
      if (selectedPlanFilter !== 'all') {
        const planId = Number(selectedPlanFilter)
        const hasPlan = (m.incluye || []).some((i) => i.idPlanEstudio === planId)
        if (!hasPlan) return false
      }
      // Filtro por búsqueda
      if (!term) return true
      return (
        m.siglaMateriaAct.toLowerCase().includes(term) ||
        m.nombreMateriaAct.toLowerCase().includes(term) ||
        m.prerrequisitos.toLowerCase().includes(term)
      )
    })
  }, [materias, selectedCycle, selectedPlanFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Materias y Planes de Estudio</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra el catálogo de materias organizadas por ciclo formativo y asignadas a los planes de estudio.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nueva Materia</span>
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
        <form onSubmit={submit} className="grid gap-4 rounded-xl border border-sky-200 bg-sky-50/50 p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <h3 className="text-sm font-bold text-umsa-blue">
              {editingId ? 'Editar Asignatura' : 'Registrar Nueva Asignatura'}
            </h3>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="text-slate-400 hover:text-slate-700"
              title="Cerrar"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-xs font-semibold text-slate-700">
              Sigla de la Materia *
              <input
                type="text"
                value={form.siglaMateriaAct}
                onChange={(e) => setForm({ ...form, siglaMateriaAct: e.target.value.toUpperCase() })}
                required
                placeholder="Ej. EST-113"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Nombre de la Materia *
              <input
                type="text"
                value={form.nombreMateriaAct}
                onChange={(e) => setForm({ ...form, nombreMateriaAct: e.target.value })}
                required
                placeholder="Ej. Estadística Descriptiva"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Semestre Académico *
              <select
                value={form.semestre}
                onChange={(e) => setForm({ ...form, semestre: Number(e.target.value) })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={s}>
                    {s}° Semestre ({getCycleForSemester(s)})
                  </option>
                ))}
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Carga Horaria (Horas) *
              <input
                type="number"
                min="20"
                step="20"
                value={form.horasMateria}
                onChange={(e) => setForm({ ...form, horasMateria: Number(e.target.value) })}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Prerrequisitos *
              <input
                type="text"
                value={form.prerrequisitos}
                onChange={(e) => setForm({ ...form, prerrequisitos: e.target.value })}
                required
                placeholder="Ej. MAT-132, EST-113 o Ninguno"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            {/* Asignación a Planes de Estudio */}
            <div className="sm:col-span-3">
              <span className="mb-1 block text-xs font-semibold text-slate-700">
                Planes de Estudio a los que pertenece *
              </span>
              <div className="flex flex-wrap gap-4 rounded-lg border border-slate-200 bg-white p-3">
                {planes.map((plan) => (
                  <label key={plan.idPlanEstudio} className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.planIds.includes(plan.idPlanEstudio)}
                      onChange={() => handlePlanCheckbox(plan.idPlanEstudio)}
                      className="h-4 w-4 rounded border-slate-300 text-umsa-blue focus:ring-sky-200"
                    />
                    <span>{plan.nombrePlan}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666] disabled:opacity-50"
            >
              <IconCheck className="h-3.5 w-3.5" />
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar Materia' : 'Guardar Materia'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Controles y Filtros */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        {/* Filtros de Ciclo Formativo */}
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
            Agrupación por Ciclo Formativo:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {CYCLES.map((cycle) => (
              <button
                key={cycle.id}
                type="button"
                onClick={() => setSelectedCycle(cycle.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCycle === cycle.id
                    ? 'bg-umsa-blue text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cycle.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Plan y Búsqueda */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-400">Plan:</span>
            <button
              type="button"
              onClick={() => setSelectedPlanFilter('all')}
              className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                selectedPlanFilter === 'all'
                  ? 'bg-umsa-blue text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({materias.length})
            </button>
            {planes.map((p) => {
              const count = materias.filter((m) => (m.incluye || []).some((i) => i.idPlanEstudio === p.idPlanEstudio)).length
              return (
                <button
                  key={p.idPlanEstudio}
                  type="button"
                  onClick={() => setSelectedPlanFilter(String(p.idPlanEstudio))}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedPlanFilter === String(p.idPlanEstudio)
                      ? 'bg-umsa-blue text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {p.nombrePlan} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por sigla, nombre..."
              className="w-full rounded-lg border border-slate-300 py-1.5 pl-8 pr-7 text-xs outline-none focus:border-umsa-blue focus:ring-1 focus:ring-sky-100"
            />
            <span className="pointer-events-none absolute left-2.5 top-2 text-slate-400">
              <IconSearch className="h-3.5 w-3.5" />
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-2 text-slate-400 hover:text-slate-700"
                title="Limpiar"
              >
                <IconClose className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabla de Asignaturas */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando materias...</div>
      ) : filteredMaterias.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron asignaturas con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3">Sigla</th>
                <th className="px-3 py-3">Nombre de Asignatura</th>
                <th className="px-3 py-3">Ciclo / Semestre</th>
                <th className="px-3 py-3">Horas</th>
                <th className="px-3 py-3">Prerrequisitos</th>
                <th className="px-3 py-3">Planes</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMaterias.map((m) => {
                const ciclo = getCycleForSemester(m.semestre)
                const planesAsignados = (m.incluye || []).map((i) => i.planEstudio?.nombrePlan).filter(Boolean)

                return (
                  <tr key={m.idMateriaAct} className="transition hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{m.siglaMateriaAct}</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-800">{m.nombreMateriaAct}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-umsa-blue">
                        {ciclo} ({m.semestre}°)
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{m.horasMateria} hrs</td>
                    <td className="px-3 py-2.5 font-mono text-[11px] text-slate-500 max-w-xs truncate" title={m.prerrequisitos}>
                      {m.prerrequisitos}
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex flex-wrap gap-1">
                        {planesAsignados.map((nombre) => (
                          <span
                            key={nombre}
                            className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                              nombre === 'Plan Nuevo'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {nombre}
                          </span>
                        ))}
                      </div>
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
                        onClick={() => remove(m.idMateriaAct)}
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
