import { httpClient } from './http-client'

export const convocatoriaAuxiliaturaService = {
  async findAll(estado, tipo) {
    const params = new URLSearchParams()
    if (estado) params.append('estado', estado)
    if (tipo) params.append('tipo', tipo)
    const query = params.toString() ? `?${params.toString()}` : ''
    const response = await httpClient(`/convocatoria-auxiliatura${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/convocatoria-auxiliatura/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/convocatoria-auxiliatura', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/convocatoria-auxiliatura/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/convocatoria-auxiliatura/${id}`, { method: 'DELETE' })
  },
}
