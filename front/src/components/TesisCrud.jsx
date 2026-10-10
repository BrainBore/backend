import { useEffect, useMemo, useState } from 'react'
import { tesisService } from '../services/tesis.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconGraduationCap,
  IconExternalLink,
} from './Icons'

const emptyForm = {
  titulo: '',
  tipo: 'Tesis',
  area: '',
  tutor: '',
  investigador: '',
  resumen: '',
  link: '',
}

export default function TesisCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTipoFilter, setSelectedTipoFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await tesisService.findAll()
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
      tipo: item.tipo || 'Tesis',
      area: item.area || '',
      tutor: item.tutor || '',
      investigador: item.investigador || '',
      resumen: item.resumen || '',
      link: item.link || '',
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
    if (!window.confirm('¿Está seguro de eliminar este trabajo de grado del repositorio?')) return
    try {
      await tesisService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Trabajo de grado eliminado exitosamente')
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
        area: form.area.trim(),
        tutor: form.tutor.trim(),
        investigador: form.investigador.trim(),
        resumen: form.resumen.trim(),
        link: form.link.trim(),
      }

      if (editingId) {
        const updated = await tesisService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Trabajo de grado actualizado exitosamente')
      } else {
        const created = await tesisService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Trabajo de grado registrado exitosamente')
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
    return records.filter((r) => {
      const matchSearch =
        !term ||
        r.titulo?.toLowerCase().includes(term) ||
        r.investigador?.toLowerCase().includes(term) ||
        r.tutor?.toLowerCase().includes(term) ||
        r.area?.toLowerCase().includes(term) ||
        r.resumen?.toLowerCase().includes(term)

      const matchTipo = !selectedTipoFilter || r.tipo === selectedTipoFilter

      return matchSearch && matchTipo
    })
  }, [records, searchTerm, selectedTipoFilter])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Cyber-Tesis y Producción Intelectual</h2>
          <p className="mt-1 text-sm text-slate-500">
            Administra tesis de grado, trabajos dirigidos y enlaces al repositorio institucional UMSA.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-sky-900"
        >
          <IconPlus className="h-4 w-4" />
          <span>Nueva tesis</span>
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
              {editingId ? 'Editar Tesis / Trabajo' : 'Registrar Nuevo Trabajo de Grado'}
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
                Título del Trabajo de Grado *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej: Clasificación mediante redes neuronales y conglomerados..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Modalidad de Titulación *
              </label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              >
                <option value="Tesis">Tesis de Grado</option>
                <option value="Trabajo Dirigido">Trabajo Dirigido</option>
                <option value="Proyecto de Grado">Proyecto de Grado</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Área de Investigación / Materia *
              </label>
              <input
                type="text"
                required
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                placeholder="Ej: Redes neuronales, Muestreo, Series de tiempo"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Investigador / Postulante *
              </label>
              <input
                type="text"
                required
                value={form.investigador}
                onChange={(e) => setForm({ ...form, investigador: e.target.value })}
                placeholder="Ej: Flores Rivero, Luis Fernando"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tutor Académico / Institucional
              </label>
              <input
                type="text"
                value={form.tutor}
                onChange={(e) => setForm({ ...form, tutor: e.target.value })}
                placeholder="Ej: Dr. Ramiro Coa Clemente"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Enlace al Repositorio UMSA (Handle / PDF)
              </label>
              <input
                type="url"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://repositorio.umsa.bo/handle/123456789/..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Resumen / Abstract
              </label>
              <textarea
                rows={3}
                value={form.resumen}
                onChange={(e) => setForm({ ...form, resumen: e.target.value })}
                placeholder="Breve resumen de metodología, aportes principales y resultados..."
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
              {saving ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Registrar Tesis'}
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por título, investigador, tutor, área o resumen..."
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

        <select
          value={selectedTipoFilter}
          onChange={(e) => setSelectedTipoFilter(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-umsa-blue"
        >
          <option value="">Todas las modalidades</option>
          <option value="Tesis">Tesis de Grado</option>
          <option value="Trabajo Dirigido">Trabajo Dirigido</option>
          <option value="Proyecto de Grado">Proyecto de Grado</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
            <tr>
              <th className="py-3 px-4">Trabajo de Grado</th>
              <th className="py-3 px-4">Modalidad</th>
              <th className="py-3 px-4">Área Temática</th>
              <th className="py-3 px-4">Investigador</th>
              <th className="py-3 px-4">Tutor</th>
              <th className="py-3 px-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  Cargando catálogo de tesis...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  {searchTerm || selectedTipoFilter
                    ? 'No se encontraron trabajos de grado con esos criterios.'
                    : 'No hay tesis registradas.'}
                </td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 font-bold text-slate-800">
                    <div className="flex items-start gap-2">
                      <IconGraduationCap className="h-4 w-4 text-umsa-blue shrink-0 mt-0.5" />
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
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        item.tipo === 'Tesis'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.tipo || 'General'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{item.area || '—'}</td>
                  <td className="py-3 px-4 font-medium text-slate-800">{item.investigador || '—'}</td>
                  <td className="py-3 px-4 text-slate-500">{item.tutor || '—'}</td>
                  <td className="py-3 px-4 text-right space-x-1">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded p-1 text-slate-400 hover:text-umsa-blue transition"
                        title="Ver en repositorio UMSA"
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    )}
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
