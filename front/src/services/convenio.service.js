import { httpClient } from './http-client'

export const convenioService = {
  async findAll() {
    const response = await httpClient('/convenio')
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/convenio', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/convenio/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/convenio/${id}`, { method: 'DELETE' })
  },
}
