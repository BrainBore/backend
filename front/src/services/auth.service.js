import { httpClient } from './http-client'
import { storageService } from './storage.service'

export const authService = {
  async signUp(email, password) {
    const response = await httpClient('/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    storageService.set('session', JSON.stringify(data))

    return data
  },

  async logIn(email, password) {
    const response = await httpClient('/auth/log-in', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    storageService.set('session', JSON.stringify(data))

    return data
  },
}
