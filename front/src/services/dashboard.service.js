import { httpClient } from './http-client'

export const dashboardService = {
  async getUsers() {
    const response = await httpClient('/users')
    const data = await response.json()

    return data.map((user) => ({ id: user.id, email: user.email }))
  },
}
