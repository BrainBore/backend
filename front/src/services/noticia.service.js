import { httpClient } from './http-client'

export const noticiaService = {
  async findAll() {
    const response = await httpClient('/noticia')
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/noticia', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/noticia/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/noticia/${id}`, { method: 'DELETE' })
  },
}