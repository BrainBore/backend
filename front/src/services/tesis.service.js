import { httpClient } from './http-client'

export const tesisService = {
  async findAll(search, tipo, area) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (tipo) params.append('tipo', tipo)
    if (area) params.append('area', area)
    const url = `/tesis${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/tesis/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/tesis', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/tesis/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/tesis/${id}`, { method: 'DELETE' })
  },
}
