import { useEffect, useState } from 'react'
import { plantelService } from '../services/plantel.service'

const plantelTabs = [
  { key: 'docentes', label: 'Docentes', fields: [['nombre', 'Nombre'], ['gradoAcademico', 'Grado académico', 'select', ['Lic.', 'M. Sc.', 'Ph. D.']], ['tipo', 'Tipo', 'select', ['Titular', 'Interino']], ['resumenCv', 'Resumen CV', 'textarea', 500], ['correoInstitucional', 'Correo institucional'], ['cargoAutoridad', 'Cargo de autoridad', 'selectOptional', ['Director(a) de Carrera', 'Director(a) Academico(a)', 'Estamendo Docente']], ['imagen', 'Imagen']] },
  { key: 'administrativos', label: 'Administrativos', fields: [['nombre', 'Nombre'], ['cargo', 'Cargo'], ['correoInstitucional', 'Correo institucional'], ['foto', 'Foto']] },
  { key: 'auxiliares', label: 'Auxiliares', fields: [['nombre', 'Nombre'], ['tipo', 'Tipo', 'select', ['academico', 'investigacio', 'interaccion social']], ['foto', 'Foto'], ['materia', 'Materia', 'academic'], ['paralelo', 'Paralelo', 'academic'], ['diasAuxiliatura', 'Días de auxiliatura', 'academic'], ['horarioAuxiliatura', 'Horario de auxiliatura', 'academic'], ['aula', 'Aula', 'academic']] },
]

export default function PlantelCrud() {
  const [activeTab, setActiveTab] = useState(plantelTabs[0])
  const [records, setRecords] = useState([])
  const [form, setForm] = useState({})
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let isMounted = true
    plantelService.findAll(activeTab.key)
      .then((data) => {
        if (!isMounted) return
        setError('')
        setRecords(data)
      })
      .catch((requestError) => isMounted && setError(requestError.message))
      .finally(() => isMounted && setLoading(false))
    return () => { isMounted = false }
  }, [activeTab])

  const resetForm = () => {
    setForm({})
    setEditingId(null)
    setMessage('')
  }

  const updateField = (key, value) => {
    setForm((current) => {
      const next = { ...current, [key]: value }
      if (activeTab.key === 'auxiliares' && key === 'tipo' && value !== 'academico') {
        ;['materia', 'paralelo', 'diasAuxiliatura', 'horarioAuxiliatura', 'aula'].forEach((field) => delete next[field])
      }
      return next
    })
  }

  const submit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')
    try {
      const saved = editingId
        ? await plantelService.update(activeTab.key, editingId, form)
        : await plantelService.create(activeTab.key, form)
      setRecords((current) => editingId ? current.map((record) => record.id === editingId ? saved : record) : [...current, saved])
      setMessage(editingId ? 'Registro actualizado' : 'Registro creado')
      setForm({})
      setEditingId(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    if (!window.confirm('¿Eliminar este registro?')) return
    try {
      await plantelService.remove(activeTab.key, id)
      setRecords((current) => current.filter((record) => record.id !== id))
      if (editingId === id) resetForm()
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {plantelTabs.map((tab) => (
          <button key={tab.key} type="button" onClick={() => { setActiveTab(tab); resetForm() }} className={`rounded-lg px-3 py-2 text-sm font-semibold ${activeTab.key === tab.key ? 'bg-umsa-blue text-white' : 'bg-slate-100 text-slate-600'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
        {activeTab.fields.filter(([, , inputType]) => inputType !== 'academic' || form.tipo === 'academico').map(([key, label, inputType, options]) => (
          <label key={key} className="text-sm font-semibold text-slate-600">
            {label}{(inputType === 'optional' || inputType === 'selectOptional') && <span className="ml-1 font-normal text-slate-400">(opcional)</span>}
            {inputType === 'select' || inputType === 'selectOptional' ? (
              <select value={form[key] ?? ''} onChange={(event) => updateField(key, event.target.value)} required={inputType === 'select'} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-umsa-blue">
                <option value="">Selecciona una opción</option>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            ) : inputType === 'textarea' ? (
              <><textarea value={form[key] ?? ''} maxLength={options} onChange={(event) => updateField(key, event.target.value)} required className="mt-1 min-h-24 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-umsa-blue" /><span className="block text-right text-xs font-normal text-slate-400">{(form[key] ?? '').length}/{options}</span></>
            ) : (
              <input value={form[key] ?? ''} onChange={(event) => updateField(key, event.target.value)} required={inputType !== 'optional'} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-umsa-blue" />
            )}
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
          <table className="min-w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-3 py-3">Nombre</th><th className="px-3 py-3">Detalle</th><th className="px-3 py-3">Acciones</th></tr></thead><tbody className="divide-y divide-slate-100">
            {records.map((record) => <tr key={record.id}><td className="px-3 py-3 font-semibold text-slate-700">{record.nombre}</td><td className="max-w-sm px-3 py-3 text-slate-500">{activeTab.fields.slice(1, 3).map(([key]) => record[key]).filter(Boolean).join(' · ')}</td><td className="whitespace-nowrap px-3 py-3"><button type="button" onClick={() => { setEditingId(record.id); setForm(record); setMessage('') }} className="mr-3 font-semibold text-umsa-blue">Editar</button><button type="button" onClick={() => remove(record.id)} className="font-semibold text-red-600">Eliminar</button></td></tr>)}
          </tbody></table>
        </div>
      )}
    </div>
  )
}