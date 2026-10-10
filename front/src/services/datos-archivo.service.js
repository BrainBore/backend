import { httpClient } from './http-client'

export const datosArchivoService = {
  async findAll(search, idBancoDatos) {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (idBancoDatos) params.append('idBancoDatos', idBancoDatos)
    const url = `/datos-archivo${params.toString() ? '?' + params.toString() : ''}`
    const response = await httpClient(url)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/datos-archivo/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/datos-archivo', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/datos-archivo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/datos-archivo/${id}`, { method: 'DELETE' })
  },
}
