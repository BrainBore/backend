import { httpClient } from './http-client'

export const matrizCientificaService = {
  async findAll() {
    const response = await httpClient('/matriz-cientifica')
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/matriz-cientifica/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/matriz-cientifica', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/matriz-cientifica/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/matriz-cientifica/${id}`, { method: 'DELETE' })
  },
}
