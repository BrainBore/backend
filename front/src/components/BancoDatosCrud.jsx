import { useEffect, useMemo, useState } from 'react'
import { bancoDatosService } from '../services/banco-datos.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconLayers,
} from './Icons'

const emptyForm = {
  titulo: '',
  tipo: 'Censos',
  fuente: 'INE',
  anio: '',
  resumen: '',
}

export default function BancoDatosCrud() {
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
      const data = await bancoDatosService.findAll()
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

  const startEdit = (item) => {
    setEditingId(item.id)
    setForm({
      titulo: item.titulo || '',
      tipo: item.tipo || 'Censos',
      fuente: item.fuente || 'INE',
      anio: item.anio ? String(item.anio) : '',
      resumen: item.resumen || '',
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
    if (!window.confirm('¿Está seguro de eliminar este banco de datos? También se eliminarán sus archivos asociados.')) return
    try {
      await bancoDatosService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Banco de datos eliminado exitosamente')
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
        fuente: form.fuente.trim(),
        anio: form.anio ? Number(form.anio) : null,
        resumen: form.resumen.trim(),
      }

      if (editingId) {
        const updated = await bancoDatosService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Banco de datos actualizado exitosamente')
      } else {
        const created = await bancoDatosService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Banco de datos registrado exitosamente')
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
    const term = searchTerm.trim().toLowerCase()
    if (!term) return records
    return records.filter(
      (r) =>
        r.titulo?.toLowerCase().includes(term) ||
        r.fuente?.toLowerCase().includes(term) ||
        r.tipo?.toLowerCase().includes(term) ||
        r.resumen?.toLowerCase().includes(term) ||
        (r.anio && String(r.anio).includes(term)),
    )
  }, [records, searchTerm])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Repositorio y Banco de Datos (Open Data)</h2>
          <p className="mt-1 text-sm text-slate-500">
            Administra censos, encuestas nacionales y proyectos de microdatos estadísticos.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-sky-900"
        >
          <IconPlus className="h-4 w-4" />
          <span>Nuevo banco de datos</span>
        </button>
      </div>

      {/* Notifications */}
      {message && (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800 font-medium">
          <IconCheck className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800 font-medium">
          <IconAlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Modal / Form */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 shadow-xs transition"
        >
          <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4">
            <h3 className="text-sm font-bold text-umsa-blue uppercase tracking-wider">
              {editingId ? 'Editar Banco de Datos' : 'Registrar Nuevo Banco de Datos'}
            </h3>
            <button
              type="button"
              onClick={closeForm}
              className="text-slate-400 hover:text-slate-600 transition"
              title="Cancelar"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Título del Proyecto o Censo *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej: Censo Nacional de Población y Vivienda 2024"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tipo / Categoría *
              </label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              >
                <option value="Censos">Censos de Población y Vivienda</option>
                <option value="Encuestas">Encuestas de Hogares</option>
                <option value="Agropecuario">Censo Agropecuario</option>
                <option value="Económico">Estadísticas Económicas</option>
                <option value="Salud">Encuestas de Demografía y Salud</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Fuente Oficial *
              </label>
              <input
                type="text"
                required
                value={form.fuente}
                onChange={(e) => setForm({ ...form, fuente: e.target.value })}
                placeholder="Ej: Instituto Nacional de Estadística (INE), UDAPE, BCB"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Año de Ejecución / Levantamiento
              </label>
              <input
                type="number"
                min="1950"
                max="2030"
                value={form.anio}
                onChange={(e) => setForm({ ...form, anio: e.target.value })}
                placeholder="Ej: 2024"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Resumen / Metadatos de la Muestra
              </label>
              <textarea
                rows={3}
                value={form.resumen}
                onChange={(e) => setForm({ ...form, resumen: e.target.value })}
                placeholder="Descripción del operativo censal, cobertura geográfica y variables incluidas..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2 border-t border-sky-100 pt-4">
            <button
              type="button"
              onClick={closeForm}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-umsa-blue px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-sky-900 transition disabled:opacity-50"
            >
              {saving ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Registrar Banco de Datos'}
            </button>
          </div>
        </form>
      )}

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por título del censo, fuente o año..."
          className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-8 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
        />
        <IconSearch className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
          >
            <IconClose className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
            <tr>
              <th className="py-3 px-4">Proyecto / Censo</th>
              <th className="py-3 px-4">Tipo</th>
              <th className="py-3 px-4">Fuente</th>
              <th className="py-3 px-4">Año</th>
              <th className="py-3 px-4">Archivos Asociados</th>
              <th className="py-3 px-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  Cargando bancos de datos...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  {searchTerm ? 'No se encontraron proyectos con ese criterio.' : 'No hay bancos de datos registrados.'}
                </td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 font-bold text-slate-800">
                    <div className="flex items-start gap-2">
                      <IconLayers className="h-4 w-4 text-umsa-blue shrink-0 mt-0.5" />
                      <div>
                        <span>{item.titulo}</span>
                        {item.resumen && (
                          <p className="mt-0.5 line-clamp-1 font-normal text-[11px] text-slate-500">
                            {item.resumen}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                      {item.tipo || 'General'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{item.fuente || '—'}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-slate-700">{item.anio || '—'}</td>
                  <td className="py-3 px-4">
                    <span className="rounded bg-sky-50 px-2 py-0.5 font-semibold text-[11px] text-umsa-blue">
                      {item.archivos?.length ?? 0} archivo(s)
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right space-x-1">
                    <button
                      type="button"
                      onClick={() => startEdit(item)}
                      className="rounded p-1 text-slate-500 hover:bg-sky-50 hover:text-umsa-blue transition"
                      title="Editar"
                    >
                      <IconEdit className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="rounded p-1 text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
                      title="Eliminar"
                    >
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
