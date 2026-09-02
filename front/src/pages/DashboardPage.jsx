import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dashboardService } from '../services/dashboard.service'
import { authStateService } from '../services/auth-state.service'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {
    dashboardService.getUsers().then(setUsers).catch(console.log)
  }, [])

  const signOut = () => {
    authStateService.signOut()
    navigate('/auth/log-in')
  }

  return (
    <section className="min-h-screen">
      <div className="bg-gradient-header px-6 sm:px-8 py-5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/iconos/icono_estaditica.png"
            alt="Logo Carrera de Estadística"
            className="h-9 w-9 object-contain shrink-0"
          />
          <div className="hidden sm:block">
            <p className="font-bold text-[14px] leading-tight text-white tracking-wide">
              CARRERA DE ESTADÍSTICA
            </p>
            <p className="text-[11px] text-white/80 leading-tight font-medium">
              Panel de usuarios
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={signOut}
          className="text-[13px] sm:text-[15px] font-semibold text-white border-2 border-white/40 backdrop-blur-sm hover:bg-white/15 rounded-xl px-5 py-2.5 transition-all"
        >
          Salir
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 p-6 sm:p-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-x-4 bg-white rounded-2xl border border-umsa-border-light shadow-sm px-5 py-4 transition-all hover:shadow-md"
          >
            <div className="relative w-10 h-10 overflow-hidden bg-umsa-crema rounded-full shrink-0 flex items-center justify-center">
              <svg
                className="absolute w-12 h-12 text-umsa-blue/60 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-umsa-text-medio">
                Correo: {user.email}
              </h3>
              <p className="text-[13px] text-umsa-text-suave">Id: {user.id}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
