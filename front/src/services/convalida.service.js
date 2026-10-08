import { httpClient } from './http-client'

export const convalidaService = {
  async findAll() {
    const response = await httpClient('/convalida')
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/convalida/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/convalida', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/convalida/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/convalida/${id}`, { method: 'DELETE' })
  },
}
