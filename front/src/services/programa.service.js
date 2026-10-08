import { httpClient } from './http-client'

export const programaService = {
  async findAll(tipo) {
    const query = tipo ? `?tipo=${encodeURIComponent(tipo)}` : ''
    const response = await httpClient(`/programa${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/programa/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/programa', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/programa/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/programa/${id}`, { method: 'DELETE' })
  },
}
