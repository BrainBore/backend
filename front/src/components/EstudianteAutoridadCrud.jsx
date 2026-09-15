import { useEffect, useState } from 'react'
import { estudianteAutoridadService } from '../services/estudiante-autoridad.service'

const emptyForm = { nombre: '', cargo: '', imagen: '' }

export default function EstudianteAutoridadCrud() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let isMounted = true
    estudianteAutoridadService.findAll()
      .then((data) => {
        if (!isMounted) return
        setRecords(data)
        setError('')
      })
      .catch((requestError) => isMounted && setError(requestError.message))
      .finally(() => isMounted && setLoading(false))
    return () => { isMounted = false }
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
        ? await estudianteAutoridadService.update(editingId, form)
        : await estudianteAutoridadService.create(form)
      setRecords((current) => editingId
        ? current.map((record) => record.id === editingId ? saved : record)
        : [...current, saved])
      setMessage(editingId ? 'Registro actualizado' : 'Registro creado')
      setForm(emptyForm)
      setEditingId(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar esta autoridad estudiantil?')) return
    try {
      await estudianteAutoridadService.remove(id)
      setRecords((current) => current.filter((record) => record.id !== id))
      if (editingId === id) resetForm()
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <form onSubmit={submit} className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
        {[["nombre", "Nombre"], ["cargo", "Cargo"], ["imagen", "Imagen"]].map(([key, label]) => (
          <label key={key} className="text-sm font-semibold text-slate-600">
            {label}
            <input value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-umsa-blue" />
          </label>
        ))}
        <div className="flex items-center gap-2 sm:col-span-2">
          <button type="submit" disabled={saving} className="rounded-lg bg-umsa-blue px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{saving ? 'Guardando...' : editingId ? 'Actualizar registro' : 'Agregar registro'}</button>
          {editingId && <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600">Cancelar</button>}
        </div>
      </form>
      <div aria-live="polite" className="text-sm">{error && <span className="text-red-600">{error}</span>}{!error && message && <span className="text-emerald-600">{message}</span>}</div>
      {loading ? <p className="text-sm text-slate-400">Cargando registros...</p> : records.length === 0 ? <p className="text-sm text-slate-400">No hay registros.</p> : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-3 py-3">Nombre</th><th className="px-3 py-3">Cargo</th><th className="px-3 py-3">Acciones</th></tr></thead><tbody className="divide-y divide-slate-100">
            {records.map((record) => <tr key={record.id}><td className="px-3 py-3 font-semibold text-slate-700">{record.nombre}</td><td className="px-3 py-3 text-slate-500">{record.cargo}</td><td className="whitespace-nowrap px-3 py-3"><button type="button" onClick={() => { setEditingId(record.id); setForm({ nombre: record.nombre, cargo: record.cargo, imagen: record.imagen }); setMessage('') }} className="mr-3 font-semibold text-umsa-blue">Editar</button><button type="button" onClick={() => remove(record.id)} className="font-semibold text-red-600">Eliminar</button></td></tr>)}
          </tbody></table>
        </div>
      )}
    </div>
  )
}