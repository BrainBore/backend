import { httpClient } from './http-client'

export const pasantiaService = {
  async findAll(area, tipo) {
    const params = new URLSearchParams()
    if (area) params.append('area', area)
    if (tipo) params.append('tipo', tipo)
    const query = params.toString() ? `?${params.toString()}` : ''
    const response = await httpClient(`/pasantia${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/pasantia/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/pasantia', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/pasantia/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/pasantia/${id}`, { method: 'DELETE' })
  },
}
