import { useEffect, useMemo, useState } from 'react'
import { convalidaService } from '../services/convalida.service'
import { materiaPregradoService } from '../services/materia-pregrado.service'
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
  idMateriaAct: '',
  idMateriaAntigua: '',
  nombreMateriaAntigua: '',
  siglaMateriaAntigua: '',
}

export default function ConvalidaCrud() {
  const [convalidaciones, setConvalidaciones] = useState([])
  const [materias, setMaterias] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const loadData = async () => {
    try {
      setLoading(true)
      const [convData, matData] = await Promise.all([
        convalidaService.findAll(),
        materiaPregradoService.findAll(),
      ])
      setConvalidaciones(convData)
      setMaterias(matData)
      setError('')
    } catch (err) {
      setError(err.message || 'Error al cargar convalidaciones')
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
    setForm({
      idMateriaAct: item.idMateriaAct,
      idMateriaAntigua: item.idMateriaAntigua || '',
      nombreMateriaAntigua: item.nombreMateriaAntigua,
      siglaMateriaAntigua: item.siglaMateriaAntigua,
    })
    setEditingId(item.idMateriaAct)
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
        await convalidaService.update(editingId, form)
        setMessage('Convalidación actualizada con éxito')
      } else {
        await convalidaService.create(form)
        setMessage('Convalidación registrada correctamente')
      }
      setIsFormOpen(false)
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al guardar convalidación')
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar esta convalidación?')) return
    try {
      await convalidaService.remove(id)
      setMessage('Convalidación eliminada')
      await loadData()
    } catch (err) {
      setError(err.message || 'Error al eliminar convalidación')
    }
  }

  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    return convalidaciones.filter((item) => {
      const mat = materias.find((m) => m.idMateriaAct === item.idMateriaAct)
      const actText = mat ? `${mat.siglaMateriaAct} ${mat.nombreMateriaAct}` : ''
      if (!term) return true
      return (
        item.siglaMateriaAntigua.toLowerCase().includes(term) ||
        item.nombreMateriaAntigua.toLowerCase().includes(term) ||
        actText.toLowerCase().includes(term)
      )
    })
  }, [convalidaciones, materias, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Tabla de Convalidaciones</h2>
          <p className="mt-1 text-xs text-slate-500">
            Administra las equivalencias académicas oficiales entre las asignaturas del Plan Antiguo y el Plan Nuevo.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#003666]"
        >
          <IconPlus className="h-3.5 w-3.5" />
          <span>Nueva Convalidación</span>
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
              {editingId ? 'Editar Convalidación' : 'Registrar Nueva Convalidación'}
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
            <label className="text-xs font-semibold text-slate-700 sm:col-span-2">
              Materia del Plan Nuevo (Actual) *
              <select
                value={form.idMateriaAct}
                onChange={(e) => setForm({ ...form, idMateriaAct: Number(e.target.value) })}
                required
                disabled={Boolean(editingId)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-umsa-blue disabled:bg-slate-100"
              >
                <option value="">Selecciona la materia del Plan Nuevo...</option>
                {materias.map((m) => (
                  <option key={m.idMateriaAct} value={m.idMateriaAct}>
                    {m.siglaMateriaAct} - {m.nombreMateriaAct} (Semestre {m.semestre}°)
                  </option>
                ))}
              </select>
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Sigla de la Materia Antigua (Plan Antiguo) *
              <input
                type="text"
                value={form.siglaMateriaAntigua}
                onChange={(e) => setForm({ ...form, siglaMateriaAntigua: e.target.value.toUpperCase() })}
                required
                placeholder="Ej. EST-130"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-800 outline-none focus:border-umsa-blue"
              />
            </label>

            <label className="text-xs font-semibold text-slate-700">
              Nombre de la Materia Antigua *
              <input
                type="text"
                value={form.nombreMateriaAntigua}
                onChange={(e) => setForm({ ...form, nombreMateriaAntigua: e.target.value })}
                required
                placeholder="Ej. Estadística General"
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

      {/* Barra de búsqueda */}
      <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por materia actual o antigua..."
            className="w-full rounded-lg border border-slate-300 py-1.5 pl-8 pr-7 text-xs outline-none focus:border-umsa-blue"
          />
          <span className="pointer-events-none absolute left-2.5 top-2 text-slate-400">
            <IconSearch className="h-3.5 w-3.5" />
          </span>
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-2 text-slate-400 hover:text-slate-700"
            >
              <IconClose className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <span className="text-xs text-slate-500 font-medium">
          {filteredItems.length} equivalencia{filteredItems.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Tabla */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-400">Cargando convalidaciones...</div>
      ) : filteredItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-400">
          No hay convalidaciones registradas.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3">Materia Plan Nuevo (Actual)</th>
                <th className="px-4 py-3 text-center">↔ Equivalente ↔</th>
                <th className="px-4 py-3">Materia Plan Antiguo</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.map((c) => {
                const mat = materias.find((m) => m.idMateriaAct === c.idMateriaAct)

                return (
                  <tr key={c.idMateriaAct} className="transition hover:bg-slate-50/70">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-umsa-blue">
                          {mat ? mat.siglaMateriaAct : `ID ${c.idMateriaAct}`}
                        </span>
                        <span className="text-slate-700 font-semibold">
                          {mat ? mat.nombreMateriaAct : 'Materia Actual'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-slate-400 font-mono text-xs">
                      homologa a
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-amber-700">
                          {c.siglaMateriaAntigua}
                        </span>
                        <span className="text-slate-700">
                          {c.nombreMateriaAntigua}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-medium">
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
                        onClick={() => remove(c.idMateriaAct)}
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
