import { httpClient } from './http-client'

export const eventoService = {
  async findAll() {
    const response = await httpClient('/evento')
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/evento', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/evento/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/evento/${id}`, { method: 'DELETE' })
  },
}