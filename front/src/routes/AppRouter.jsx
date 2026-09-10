import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './auth.guard'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import TextEditorPage from '../pages/TextEditorPage'

function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/auth/log-in" element={<LogInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/auth" element={<Navigate to="/auth/log-in" replace />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/editor-texto" element={<TextEditorPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/editor-texto" replace />} />
    </Routes>
  )
}

export default AppRouter
