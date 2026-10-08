import { environment } from './environment'
import { authStateService } from './auth-state.service'

export const uploadService = {
  async uploadImage(file) {
    const formData = new FormData()
    formData.append('file', file)

    const session = authStateService.getSession()
    const headers = {}
    if (session?.access_token) {
      headers.Authorization = `Bearer ${session.access_token}`
    }

    const response = await fetch(`${environment.API_URL}/upload/image`, {
      method: 'POST',
      headers,
      body: formData,
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null)
      throw new Error(errorBody?.message || `Error al subir imagen (HTTP ${response.status})`)
    }

    return response.json()
  },

  async uploadDocument(file) {
    const formData = new FormData()
    formData.append('file', file)

    const session = authStateService.getSession()
    const headers = {}
    if (session?.access_token) {
      headers.Authorization = `Bearer ${session.access_token}`
    }

    const response = await fetch(`${environment.API_URL}/upload/document`, {
      method: 'POST',
      headers,
      body: formData,
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null)
      throw new Error(errorBody?.message || `Error al subir documento (HTTP ${response.status})`)
    }

    return response.json()
  },

  resolveMediaUrl(url) {
    if (!url || typeof url !== 'string') return ''
    const trimmed = url.trim()
    if (!trimmed) return ''

    if (
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('data:') ||
      trimmed.startsWith('blob:')
    ) {
      return trimmed
    }

    const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
    return `${environment.API_URL}${cleanPath}`
  },
}
