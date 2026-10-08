import { httpClient } from './http-client'

export const convocatoriaService = {
  async findAll() {
    const response = await httpClient('/convocatoria')
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/convocatoria/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/convocatoria', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/convocatoria/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/convocatoria/${id}`, { method: 'DELETE' })
  },
}
