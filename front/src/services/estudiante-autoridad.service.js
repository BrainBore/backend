import { httpClient } from './http-client'

export const estudianteAutoridadService = {
  async findAll() {
    const response = await httpClient('/estudiante-autoridad')
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/estudiante-autoridad', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/estudiante-autoridad/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/estudiante-autoridad/${id}`, { method: 'DELETE' })
  },
}