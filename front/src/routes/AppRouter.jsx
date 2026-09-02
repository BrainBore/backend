import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './auth.guard'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import DashboardPage from '../pages/DashboardPage'

function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/auth/log-in" element={<LogInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/auth" element={<Navigate to="/auth/log-in" replace />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default AppRouter
