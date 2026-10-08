import { useEffect, useMemo, useState } from 'react'
import { moduloService } from '../services/modulo.service'
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

const emptyForm = {
  tituloModulo: '',
  numeroModulo: 'Módulo I',
  horasPresencial: '80 hrs',
  horasInvestigacion: '120 hrs',
  programaId: '',
}

export default function ModuloCrud() {
  const [records, setRecords] = useState([])
  const [programas, setProgramas] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedProgramaFilter, setSelectedProgramaFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const [modulosData, programasData] = await Promise.all([
        moduloService.findAll(),
        programaService.findAll(),
      ])
      setRecords(Array.isArray(modulosData) ? modulosData : [])
      setProgramas(Array.isArray(programasData) ? programasData : [])
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
    setForm({
      ...emptyForm,
      programaId: programas[0] ? String(programas[0].idPrograma) : '',
    })
    setEditingId(null)
    setIsFormOpen(true)
    setMessage('')
    setError('')
  }

  const startEdit = (m) => {
    setEditingId(m.idModulo)
    const progId = m.organiza && m.organiza[0] ? m.organiza[0].idPrograma : ''
    setForm({
      tituloModulo: m.tituloModulo,
      numeroModulo: m.numeroModulo,
      horasPresencial: m.incluye?.horasPresencial || '80 hrs',
      horasInvestigacion: m.incluye?.horasInvestigacion || '120 hrs',
      programaId: progId ? String(progId) : '',
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
    if (!window.confirm('¿Está seguro de eliminar este módulo?')) return
    try {
      await moduloService.remove(id)
      setRecords((prev) => prev.filter((r) => r.idModulo !== id))
      if (editingId === id) closeForm()
      setMessage('Módulo eliminado exitosamente')
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

    const payload = {
      tituloModulo: form.tituloModulo,
      numeroModulo: form.numeroModulo,
      horasPresencial: form.horasPresencial,
      horasInvestigacion: form.horasInvestigacion,
      programaIds: form.programaId ? [Number(form.programaId)] : [],
    }

    try {
      if (editingId) {
        const updated = await moduloService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.idModulo === editingId ? updated : r)))
        setMessage('Módulo actualizado exitosamente')
      } else {
        const created = await moduloService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Módulo creado exitosamente')
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
      const matchProgram =
        selectedProgramaFilter === 'all' ||
        (r.organiza && r.organiza.some((o) => String(o.idPrograma) === String(selectedProgramaFilter)))
      const term = searchTerm.toLowerCase().trim()
      const matchSearch =
        !term ||
        r.tituloModulo.toLowerCase().includes(term) ||
        r.numeroModulo.toLowerCase().includes(term) ||
        (r.organiza &&
          r.organiza.some((o) => o.programa?.nombre?.toLowerCase().includes(term)))
      return matchProgram && matchSearch
    })
  }, [records, selectedProgramaFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Módulos de Postgrado</h2>
          <p className="mt-1 text-xs text-slate-500">
            Gestión de asignaturas y módulos organizados por programa de postgrado con carga horaria.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nuevo Módulo</span>
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
                {editingId ? 'Editar Módulo de Postgrado' : 'Registrar Nuevo Módulo de Postgrado'}
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
            <label className="text-xs font-semibold text-slate-700">
              Número / Código del Módulo *
              <input
                type="text"
                required
                value={form.numeroModulo}
                onChange={(e) => setForm({ ...form, numeroModulo: e.target.value })}
                placeholder="Ej. Módulo I, Módulo II..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Título del Módulo *
              <input
                type="text"
                required
                value={form.tituloModulo}
                onChange={(e) => setForm({ ...form, tituloModulo: e.target.value })}
                placeholder="Ej. Optimización y modelos lineales"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-3">
              Programa al que pertenece *
              <select
                value={form.programaId}
                onChange={(e) => setForm({ ...form, programaId: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              >
                <option value="">-- Sin programa asignado --</option>
                {programas.map((p) => (
                  <option key={p.idPrograma} value={p.idPrograma}>
                    {p.nombre} ({p.tipo})
                  </option>
                ))}
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-1">
              Horas Presenciales *
              <input
                type="text"
                required
                value={form.horasPresencial}
                onChange={(e) => setForm({ ...form, horasPresencial: e.target.value })}
                placeholder="Ej. 240 hrs ó 80 hrs"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-1">
              Horas de Investigación *
              <input
                type="text"
                required
                value={form.horasInvestigacion}
                onChange={(e) => setForm({ ...form, horasInvestigacion: e.target.value })}
                placeholder="Ej. 360 hrs ó 120 hrs"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <div className="text-xs text-slate-500 sm:col-span-1 flex flex-col justify-end pb-2">
              <span className="font-semibold text-slate-700">Total calculado:</span>
              <span className="font-mono font-bold text-umsa-blue">
                {(parseInt(form.horasPresencial, 10) || 0) + (parseInt(form.horasInvestigacion, 10) || 0)} hrs académicas
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666] disabled:opacity-50"
            >
              <IconCheck className="h-3.5 w-3.5" />
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar Módulo' : 'Guardar Módulo'}</span>
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
            <span className="text-xs font-bold uppercase text-slate-400">Programa:</span>
            <button
              type="button"
              onClick={() => setSelectedProgramaFilter('all')}
              className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                selectedProgramaFilter === 'all'
                  ? 'bg-umsa-blue text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({records.length})
            </button>
            {programas.map((p) => {
              const count = records.filter(
                (r) => r.organiza && r.organiza.some((o) => o.idPrograma === p.idPrograma),
              ).length

              return (
                <button
                  key={p.idPrograma}
                  type="button"
                  onClick={() => setSelectedProgramaFilter(String(p.idPrograma))}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    selectedProgramaFilter === String(p.idPrograma)
                      ? 'bg-umsa-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {p.nombre} ({count})
                </button>
              )
            })}
          </div>

          <div className="relative min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por módulo, título o programa..."
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

      {/* Tabla de Módulos */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando módulos...</div>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No se encontraron módulos con los filtros seleccionados.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-3 py-3 w-16">ID</th>
                <th className="px-3 py-3">Número</th>
                <th className="px-3 py-3">Título del Módulo</th>
                <th className="px-3 py-3">Programa Asignado</th>
                <th className="px-3 py-3 text-center">Horas Presencial</th>
                <th className="px-3 py-3 text-center">Horas Investig.</th>
                <th className="px-3 py-3 text-center">Total Horas</th>
                <th className="px-3 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((m) => {
                const programNames = (m.organiza || [])
                  .map((o) => o.programa?.nombre)
                  .filter(Boolean)
                const hp = m.incluye?.horasPresencial || '-'
                const hi = m.incluye?.horasInvestigacion || '-'
                const total =
                  (parseInt(hp, 10) || 0) + (parseInt(hi, 10) || 0)

                return (
                  <tr key={m.idModulo} className="transition hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-umsa-blue">{m.idModulo}</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 whitespace-nowrap">
                      {m.numeroModulo}
                    </td>
                    <td className="px-3 py-2.5 font-bold text-slate-800">{m.tituloModulo}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex flex-wrap gap-1">
                        {programNames.length > 0 ? (
                          programNames.map((name) => (
                            <span
                              key={name}
                              className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-umsa-blue border border-sky-100"
                            >
                              {name}
                            </span>
                          ))
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">Sin programa</span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-600 font-medium whitespace-nowrap">
                      {hp}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-600 font-medium whitespace-nowrap">
                      {hi}
                    </td>
                    <td className="px-3 py-2.5 text-center font-bold text-umsa-blue whitespace-nowrap">
                      {total > 0 ? `${total} hrs` : '-'}
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
                        onClick={() => handleDelete(m.idModulo)}
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
