import { useEffect, useMemo, useState } from 'react'
import { convenioService } from '../services/convenio.service'

export const ALLOWED_SECTORS = [
  'Sector Publico',
  'Salud y Bienestar',
  'Org. Internacionales',
  'Consultoria',
]

const emptyForm = { titulo: '', descripcion: '', sector: 'Sector Publico' }

export default function ConvenioCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [selectedSectorFilter, setSelectedSectorFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let isMounted = true
    convenioService
      .findAll()
      .then((data) => {
        if (!isMounted) return
        setRecords(data)
        setError('')
      })
      .catch((requestError) => isMounted && setError(requestError.message))
      .finally(() => isMounted && setLoading(false))

    return () => {
      isMounted = false
    }
  }, [])

  const resetForm = (clearMessage = true) => {
    setForm(emptyForm)
    setEditingId(null)
    if (clearMessage) setMessage('')
  }

  const submit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')
    try {
      const saved = editingId
        ? await convenioService.update(editingId, form)
        : await convenioService.create(form)

      setRecords((current) =>
        editingId
          ? current.map((record) => (record.id === editingId ? saved : record))
          : [...current, saved],
      )
      setMessage(editingId ? 'Convenio actualizado con éxito' : 'Convenio agregado con éxito')
      setForm(emptyForm)
      setEditingId(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar este convenio?')) return
    try {
      await convenioService.remove(id)
      setRecords((current) => current.filter((record) => record.id !== id))
      if (editingId === id) resetForm()
      setMessage('Convenio eliminado')
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  const startEdit = (record) => {
    setEditingId(record.id)
    setForm({
      titulo: record.titulo,
      descripcion: record.descripcion,
      sector: record.sector,
    })
    setMessage('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredRecords = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    return records.filter((r) => {
      if (selectedSectorFilter !== 'all' && r.sector !== selectedSectorFilter) return false
      if (!term) return true
      return (
        r.titulo.toLowerCase().includes(term) ||
        r.descripcion.toLowerCase().includes(term) ||
        r.sector.toLowerCase().includes(term)
      )
    })
  }, [records, selectedSectorFilter, searchTerm])

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Formulario de Creación / Edición */}
      <form onSubmit={submit} className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="text-sm font-bold text-slate-800">
            {editingId ? 'Editar Convenio' : 'Nuevo Convenio'}
          </h3>
          {editingId && (
            <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
              Modo Edición (ID: {editingId})
            </span>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Título de la Institución / Convenio *
            <input
              type="text"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              required
              placeholder="Ej. Instituto Nacional de Estadística (INE)"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal text-slate-800 outline-none focus:border-umsa-blue focus:ring-1 focus:ring-umsa-blue"
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Sector *
            <select
              value={form.sector}
              onChange={(e) => setForm({ ...form, sector: e.target.value })}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal text-slate-800 outline-none focus:border-umsa-blue focus:ring-1 focus:ring-umsa-blue"
            >
              {ALLOWED_SECTORS.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </label>

          <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
            Descripción del Convenio *
            <textarea
              rows={3}
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
              required
              placeholder="Descripción del alcance y propósito del convenio..."
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal text-slate-800 outline-none focus:border-umsa-blue focus:ring-1 focus:ring-umsa-blue"
            />
          </label>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-umsa-blue px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003666] disabled:opacity-50"
          >
            {saving ? 'Guardando...' : editingId ? 'Actualizar Convenio' : 'Guardar Convenio'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => resetForm()}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Alertas y Mensajes */}
      <div aria-live="polite" className="text-sm">
        {error && <div className="rounded-lg bg-red-50 p-3 text-red-700 border border-red-200">{error}</div>}
        {!error && message && <div className="rounded-lg bg-emerald-50 p-3 text-emerald-700 border border-emerald-200">{message}</div>}
      </div>

      {/* Filtros de la Tabla */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase text-slate-400">Sector:</span>
          <button
            type="button"
            onClick={() => setSelectedSectorFilter('all')}
            className={`rounded-full px-3 py-1 text-xs font-bold transition ${
              selectedSectorFilter === 'all'
                ? 'bg-umsa-blue text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({records.length})
          </button>
          {ALLOWED_SECTORS.map((sector) => {
            const count = records.filter((r) => r.sector === sector).length
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSectorFilter(sector)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  selectedSectorFilter === sector
                    ? 'bg-umsa-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sector} ({count})
              </button>
            )
          })}
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar convenios..."
          className="rounded-lg border border-slate-300 px-3 py-1 text-xs outline-none focus:border-umsa-blue"
        />
      </div>

      {/* Tabla de Registros */}
      {loading ? (
        <p className="text-sm text-slate-400">Cargando convenios...</p>
      ) : filteredRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-400">
          No hay convenios en esta selección.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Institución / Título</th>
                <th className="px-4 py-3">Sector</th>
                <th className="px-4 py-3">Descripción</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-400">{record.id}</td>
                  <td className="px-4 py-3 font-bold text-slate-800">{record.titulo}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#00447e]">
                      {record.sector}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 max-w-md line-clamp-2">{record.descripcion}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(record)}
                      className="mr-3 text-xs font-bold text-umsa-blue hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(record.id)}
                      className="text-xs font-bold text-red-600 hover:underline"
                    >
                      Eliminar
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
