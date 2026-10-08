import { useEffect, useState } from 'react'
import { convocatoriaService } from '../services/convocatoria.service'
import {
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconCalendar,
} from './Icons'

const emptyForm = {
  periodoConvocatoria: '',
  descConvocatoria: '',
  insPreu: '',
  insPsa: '',
  fechaEntregaDocs: new Date().toISOString().split('T')[0],
  matriculacionKardex: '',
}

export default function ConvocatoriaCrud() {
  const [convocatorias, setConvocatorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await convocatoriaService.findAll()
      setConvocatorias(data)
      setError('')
    } catch (err) {
      setError(err.message || 'Error al cargar convocatorias')
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

  const startEdit = (item) => {
    const rawDate = item.fechaEntregaDocs ? new Date(item.fechaEntregaDocs).toISOString().split('T')[0] : ''
    setForm({
      periodoConvocatoria: item.periodoConvocatoria,
      descConvocatoria: item.descConvocatoria,
      insPreu: item.insPreu,
      insPsa: item.insPsa,
      fechaEntregaDocs: rawDate,
      matriculacionKardex: item.matriculacionKardex,
    })
    setEditingId(item.idConvocatoria)
    setError('')
    setMessage('')
    setIsFormOpen(true)
  }

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      if (editingId) {
        await convocatoriaService.update(editingId, form)
        setMessage('Convocatoria actualizada con éxito')
      } else {
        await convocatoriaService.create(form)
        setMessage('Convocatoria creada con éxito')
      }
      setIsFormOpen(false)
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al guardar convocatoria')
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar esta convocatoria de admisión?')) return
    try {
      await convocatoriaService.remove(id)
      setMessage('Convocatoria eliminada')
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al eliminar convocatoria')
    }
  }

  const formatDate = (isoString) => {
    if (!isoString) return '-'
    const d = new Date(isoString)
    return d.toLocaleDateString('es-BO', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Convocatorias de Admisión</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra los periodos oficiales de admisión a la carrera (cronograma PSA, Curso Preuniversitario y Kárdex).
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

      {/* Formulario */}
      {isFormOpen && (
        <form onSubmit={submit} className="grid gap-4 rounded-xl border border-sky-200 bg-sky-50/50 p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <h3 className="text-sm font-bold text-umsa-blue">
              {editingId ? 'Editar Convocatoria' : 'Registrar Nueva Convocatoria'}
            </h3>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold text-slate-700">
              Periodo de Convocatoria *
              <input
                type="text"
                value={form.periodoConvocatoria}
                onChange={(e) => setForm({ ...form, periodoConvocatoria: e.target.value })}
                required
                placeholder="Ej. Gestión 2026 - Primer Semestre"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Fecha Límite Entrega de Documentos *
              <input
                type="date"
                value={form.fechaEntregaDocs}
                onChange={(e) => setForm({ ...form, fechaEntregaDocs: e.target.value })}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Descripción del Periodo *
              <textarea
                rows={2}
                value={form.descConvocatoria}
                onChange={(e) => setForm({ ...form, descConvocatoria: e.target.value })}
                required
                placeholder="Descripción del proceso de ingreso y alcance institucional..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Cronograma Curso Pre-U *
              <input
                type="text"
                value={form.insPreu}
                onChange={(e) => setForm({ ...form, insPreu: e.target.value })}
                required
                placeholder="Ej. Agosto - Septiembre (año previo)"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Cronograma Prueba PSA *
              <input
                type="text"
                value={form.insPsa}
                onChange={(e) => setForm({ ...form, insPsa: e.target.value })}
                required
                placeholder="Ej. Noviembre - Diciembre (año previo)"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Matriculación e Inicio en Kárdex *
              <input
                type="text"
                value={form.matriculacionKardex}
                onChange={(e) => setForm({ ...form, matriculacionKardex: e.target.value })}
                required
                placeholder="Ej. Finales de Febrero en Kárdex Académico"
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
              <span>{saving ? 'Guardando...' : editingId ? 'Actualizar' : 'Guardar'}</span>
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

      {/* Tarjetas / Tabla de Convocatorias */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando convocatorias...</div>
      ) : convocatorias.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No hay convocatorias de admisión registradas.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {convocatorias.map((c) => (
            <div
              key={c.idConvocatoria}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-sky-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="inline-block rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-umsa-blue uppercase">
                      ID {c.idConvocatoria}
                    </span>
                    <h3 className="mt-1 font-bold text-slate-800 text-sm">{c.periodoConvocatoria}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => startEdit(c)}
                      className="rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-umsa-blue"
                      title="Editar"
                    >
                      <IconEdit className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(c.idConvocatoria)}
                      className="rounded p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                      title="Eliminar"
                    >
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{c.descConvocatoria}</p>

                <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-3 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Curso Preuniversitario:</span>
                    <span className="text-slate-800 font-medium">{c.insPreu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Prueba PSA:</span>
                    <span className="text-slate-800 font-medium">{c.insPsa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Entrega de Documentos:</span>
                    <span className="text-umsa-blue font-bold flex items-center gap-1">
                      <IconCalendar className="h-3 w-3" />
                      {formatDate(c.fechaEntregaDocs)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200/60 pt-2">
                    <span className="font-semibold text-slate-500">Matriculación Kárdex:</span>
                    <span className="text-emerald-700 font-semibold">{c.matriculacionKardex}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
