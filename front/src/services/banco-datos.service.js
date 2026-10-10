import { httpClient } from './http-client'

export const bancoDatosService = {
  async findAll(search, tipo) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (tipo) params.append('tipo', tipo)
    const url = `/banco-datos${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/banco-datos/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/banco-datos', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/banco-datos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/banco-datos/${id}`, { method: 'DELETE' })
  },
}
