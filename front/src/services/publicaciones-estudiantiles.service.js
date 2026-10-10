import { httpClient } from './http-client'

export const publicacionesEstudiantilesService = {
  async findAll(area, anio) {
    const params = new URLSearchParams()
    if (area) params.append('area', area)
    if (anio) params.append('anio', String(anio))
    const query = params.toString() ? `?${params.toString()}` : ''
    const response = await httpClient(`/publicaciones-estudiantiles${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/publicaciones-estudiantiles/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/publicaciones-estudiantiles', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/publicaciones-estudiantiles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/publicaciones-estudiantiles/${id}`, { method: 'DELETE' })
  },
}
