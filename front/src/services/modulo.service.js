import { httpClient } from './http-client'

export const moduloService = {
  async findAll(programaId) {
    const query = programaId ? `?programaId=${encodeURIComponent(programaId)}` : ''
    const response = await httpClient(`/modulo${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/modulo/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/modulo', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/modulo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/modulo/${id}`, { method: 'DELETE' })
  },
}
