import { Navigate, Outlet } from 'react-router-dom'
import { authStateService } from '../services/auth-state.service'

export function PrivateRoute() {
  const session = authStateService.getSession()

  if (!session) {
    return <Navigate to="/auth/log-in" replace />
  }

  return <Outlet />
}

/** Equivalente a `publicGuard`. */
export function PublicRoute() {
  const session = authStateService.getSession()

  if (session) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
