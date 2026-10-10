import { httpClient } from './http-client'

export const directivoEstudianteService = {
  async findAll(area) {
    const query = area ? `?area=${encodeURIComponent(area)}` : ''
    const response = await httpClient(`/directivo-estudiante${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/directivo-estudiante/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/directivo-estudiante', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/directivo-estudiante/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/directivo-estudiante/${id}`, { method: 'DELETE' })
  },
}
