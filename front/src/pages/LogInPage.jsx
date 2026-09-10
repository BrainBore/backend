import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../services/auth.service'

export default function LogInPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const [errorMsg, setErrorMsg] = useState(null)

  const isValid = /^\S+@\S+\.\S+$/.test(form.email) && form.password.length > 0

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const submit = async (event) => {
    event.preventDefault()

    if (!isValid) return

    setErrorMsg(null)

    try {
      await authService.logIn(form.email, form.password)
      navigate('/editor-texto')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/iconos/icono_estaditica.png"
            alt="Logo Carrera de Estadística"
            className="h-16 w-16 object-contain mb-3"
          />
          <p className="text-[13px] font-bold text-umsa-blue tracking-wide uppercase text-center">
            Carrera de Estadística
          </p>
          <p className="text-[11px] text-umsa-text-suave text-center">
            Facultad de Ciencias Puras y Naturales
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-xl border border-umsa-border-light overflow-hidden">
          <div className="bg-gradient-header px-6 sm:px-8 py-5">
            <h1 className="text-xl font-bold text-white leading-tight">
              Inicia sesión
            </h1>
            <p className="text-[12px] text-white/80 mt-1">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={submit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-sm font-semibold text-umsa-text-medio"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-umsa-crema border border-umsa-border-light text-umsa-text-medio rounded-xl focus:ring-2 focus:ring-umsa-blue/40 focus:border-umsa-blue block w-full p-2.5 text-[15px] outline-none transition-all"
                  placeholder="nombre@umsa.bo"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1.5 text-sm font-semibold text-umsa-text-medio"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-umsa-crema border border-umsa-border-light text-umsa-text-medio rounded-xl focus:ring-2 focus:ring-umsa-blue/40 focus:border-umsa-blue block w-full p-2.5 text-[15px] outline-none transition-all"
                />
              </div>

              {errorMsg && (
                <p className="text-sm font-medium text-red-600">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={!isValid}
                style={{ background: 'linear-gradient(135deg, #00447e 0%, #00447ecc 100%)' }}
                className="w-full text-white font-semibold rounded-xl text-[15px] px-5 py-3 text-center shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Ingresar
              </button>

              <p className="text-sm font-light text-umsa-text-suave text-center">
                <Link
                  to="/auth/sign-up"
                  className="cursor-pointer font-semibold text-umsa-orange hover:underline"
                >
                  Registrar Cuenta
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
