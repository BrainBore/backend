import { useEffect, useMemo, useState } from 'react'
import { datosArchivoService } from '../services/datos-archivo.service'
import { bancoDatosService } from '../services/banco-datos.service'
import {
  IconSearch,
  IconClose,
  IconEdit,
  IconTrash,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconFileText,
  IconExternalLink,
} from './Icons'

const emptyForm = {
  titulo: '',
  formato: 'CSV',
  peso: '',
  linkDescarga: '',
  idBancoDatos: '',
}

export default function DatosArchivoCrud() {
  const [records, setRecords] = useState([])
  const [bancos, setBancos] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBancoFilter, setSelectedBancoFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const [archivosData, bancosData] = await Promise.all([
        datosArchivoService.findAll(),
        bancoDatosService.findAll(),
      ])
      setRecords(Array.isArray(archivosData) ? archivosData : [])
      setBancos(Array.isArray(bancosData) ? bancosData : [])
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
      formato: item.formato || 'CSV',
      peso: item.peso || '',
      linkDescarga: item.linkDescarga || '',
      idBancoDatos: item.idBancoDatos ? String(item.idBancoDatos) : '',
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
    if (!window.confirm('¿Está seguro de eliminar este archivo de datos?')) return
    try {
      await datosArchivoService.remove(id)
      setRecords((prev) => prev.filter((r) => r.id !== id))
      if (editingId === id) closeForm()
      setMessage('Archivo de datos eliminado exitosamente')
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
        formato: form.formato.trim(),
        peso: form.peso.trim(),
        linkDescarga: form.linkDescarga.trim(),
        idBancoDatos: form.idBancoDatos ? Number(form.idBancoDatos) : null,
      }

      if (editingId) {
        const updated = await datosArchivoService.update(editingId, payload)
        setRecords((prev) => prev.map((r) => (r.id === editingId ? updated : r)))
        setMessage('Archivo de datos actualizado exitosamente')
      } else {
        const created = await datosArchivoService.create(payload)
        setRecords((prev) => [...prev, created])
        setMessage('Archivo de datos registrado exitosamente')
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
        r.formato?.toLowerCase().includes(term) ||
        r.peso?.toLowerCase().includes(term) ||
        r.bancoRel?.titulo?.toLowerCase().includes(term)

      const matchBanco =
        !selectedBancoFilter || String(r.idBancoDatos) === selectedBancoFilter

      return matchSearch && matchBanco
    })
  }, [records, searchTerm, selectedBancoFilter])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Archivos y Microdatos Descargables</h2>
          <p className="mt-1 text-sm text-slate-500">
            Administra los archivos individuales (CSV, SAV, DTA, RData) vinculados a cada banco de datos.
          </p>
        </div>
        <button
          type="button"
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-umsa-blue px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-sky-900"
        >
          <IconPlus className="h-4 w-4" />
          <span>Nuevo archivo</span>
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
              {editingId ? 'Editar Archivo de Datos' : 'Registrar Nuevo Archivo de Datos'}
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
                Título o Nombre Descriptivo del Archivo *
              </label>
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                placeholder="Ej: Personas - Chuquisaca o Consolidado Nacional BOLIVIA"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Banco de Datos Perteneciente *
              </label>
              <select
                required
                value={form.idBancoDatos}
                onChange={(e) => setForm({ ...form, idBancoDatos: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              >
                <option value="">-- Seleccione un banco de datos --</option>
                {bancos.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.titulo} ({b.fuente || 'INE'} - {b.anio || ''})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Formato del Archivo *
              </label>
              <select
                value={form.formato}
                onChange={(e) => setForm({ ...form, formato: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              >
                <option value="CSV">CSV (Texto separado por comas)</option>
                <option value="SAV">SAV (IBM SPSS Statistics)</option>
                <option value="DTA">DTA (Stata Dataset)</option>
                <option value="RData">RData / RDS (Entorno R)</option>
                <option value="XLSX">XLSX (Microsoft Excel)</option>
                <option value="ZIP">ZIP / RAR (Comprimido)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Peso / Tamaño del Archivo
              </label>
              <input
                type="text"
                value={form.peso}
                onChange={(e) => setForm({ ...form, peso: e.target.value })}
                placeholder="Ej: 35 MB o 290 MB"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-umsa-blue focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Enlace de Descarga Directa o Drive *
              </label>
              <input
                type="url"
                required
                value={form.linkDescarga}
                onChange={(e) => setForm({ ...form, linkDescarga: e.target.value })}
                placeholder="https://drive.google.com/file/d/..."
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
              {saving ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Registrar Archivo'}
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
            placeholder="Buscar por nombre de archivo o formato..."
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
          value={selectedBancoFilter}
          onChange={(e) => setSelectedBancoFilter(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-umsa-blue"
        >
          <option value="">Todos los bancos de datos</option>
          {bancos.map((b) => (
            <option key={b.id} value={b.id}>
              {b.titulo}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
            <tr>
              <th className="py-3 px-4">Archivo</th>
              <th className="py-3 px-4">Banco de Datos</th>
              <th className="py-3 px-4">Formato</th>
              <th className="py-3 px-4">Peso</th>
              <th className="py-3 px-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  Cargando archivos de datos...
                </td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  {searchTerm || selectedBancoFilter
                    ? 'No se encontraron archivos con esos criterios.'
                    : 'No hay archivos registrados.'}
                </td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 font-bold text-slate-800">
                    <div className="flex items-center gap-2">
                      <IconFileText className="h-4 w-4 text-umsa-blue shrink-0" />
                      <span>{item.titulo}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-600">
                    {item.bancoRel?.titulo || '—'}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block rounded font-mono font-semibold bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
                      {item.formato}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">{item.peso || '—'}</td>
                  <td className="py-3 px-4 text-right space-x-1">
                    {item.linkDescarga && (
                      <a
                        href={item.linkDescarga}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded p-1 text-slate-400 hover:text-umsa-blue transition"
                        title="Abrir enlace de descarga"
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
