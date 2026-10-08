import { httpClient } from './http-client'

export const planEstudiosService = {
  async findAll() {
    const response = await httpClient('/plan-estudios')
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/plan-estudios/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/plan-estudios', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/plan-estudios/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/plan-estudios/${id}`, { method: 'DELETE' })
  },
}
