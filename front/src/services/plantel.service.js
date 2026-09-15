import { httpClient } from './http-client'

export const plantelService = {
  async findAll(tipo) {
    const response = await httpClient(`/plantel/${tipo}`)
    return response.json()
  },

  async create(tipo, data) {
    const response = await httpClient(`/plantel/${tipo}`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(tipo, id, data) {
    const response = await httpClient(`/plantel/${tipo}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(tipo, id) {
    await httpClient(`/plantel/${tipo}/${id}`, { method: 'DELETE' })
  },
}