import { httpClient } from './http-client'

export const autorService = {
  async findAll(search, tipo) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (tipo) params.append('tipo', tipo)
    const url = `/autor${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/autor/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/autor', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/autor/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/autor/${id}`, { method: 'DELETE' })
  },
}
