import { httpClient } from './http-client'

export const materiaPregradoService = {
  async findAll(planId, semestre) {
    const params = new URLSearchParams()
    if (planId !== undefined && planId !== 'all') params.append('planId', planId)
    if (semestre !== undefined && semestre !== 'all') params.append('semestre', semestre)

    const query = params.toString() ? `?${params.toString()}` : ''
    const response = await httpClient(`/materia-pregrado${query}`)
    return response.json()
  },

  async findOne(id) {
    const response = await httpClient(`/materia-pregrado/${id}`)
    return response.json()
  },

  async create(data) {
    const response = await httpClient('/materia-pregrado', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async update(id, data) {
    const response = await httpClient(`/materia-pregrado/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
    return response.json()
  },

  async remove(id) {
    await httpClient(`/materia-pregrado/${id}`, { method: 'DELETE' })
  },

  async assignPlan(idMateria, planId) {
    const response = await httpClient(`/materia-pregrado/${idMateria}/plan/${planId}`, {
      method: 'POST',
    })
    return response.json()
  },

  async unassignPlan(idMateria, planId) {
    await httpClient(`/materia-pregrado/${idMateria}/plan/${planId}`, {
      method: 'DELETE',
    })
  },
}
