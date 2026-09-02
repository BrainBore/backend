import { environment } from './environment'
import { authStateService } from './auth-state.service'

export async function httpClient(path, options = {}) {
  const session = authStateService.getSession()

  const response = await fetch(`${environment.API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${session?.access_token}`,
    },
  })

  if (response.status === 401) {
    authStateService.signOut()
    window.location.href = '/auth/log-in'
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(errorBody?.message ?? `Error ${response.status}`)
  }

  return response
}
