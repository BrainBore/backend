import { httpClient } from './http-client'

export const libroService = {
  async findAll(search, idAutor) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (idAutor) params.append('idAutor', idAutor)
    const url = `/libro${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/libro/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/libro', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/libro/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/libro/${id}`, { method: 'DELETE' })
  },
}
