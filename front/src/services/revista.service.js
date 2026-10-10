import { httpClient } from './http-client'

export const revistaService = {
  async findAll(search, tipo) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (tipo) params.append('tipo', tipo)
    const url = `/revista${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/revista/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/revista', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/revista/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/revista/${id}`, { method: 'DELETE' })
  },
}
