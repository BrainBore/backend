import { storageService } from './storage.service'

export const authStateService = {
  signOut() {
    storageService.remove('session')
  },

  getSession() {
    let currentSession = null

    const maybeSession = storageService.get('session')

    if (maybeSession !== null) {
      if (_isValidSession(maybeSession)) {
        currentSession = maybeSession
      } else {
        authStateService.signOut()
      }
    }

    return currentSession
  },
}

function _isValidSession(maybeSession) {
  return (
    typeof maybeSession === 'object' &&
    maybeSession !== null &&
    'access_token' in maybeSession
  )
}
