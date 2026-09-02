# Front (Login) — migrado de Angular a Vite + React

Este proyecto es la migración del login/sign-up/dashboard que estaba en
Angular (carpeta original `login/front`) a **Vite + React**, para que use
el mismo stack que el resto de la página de Estadística.

Es un proyecto standalone (no depende de Estadistica-Umsa-main); cuando
el back esté listo, este es el que se conecta a él.

## Cómo correrlo

Este front necesita el backend (NestJS + Prisma + Postgres) corriendo en
paralelo — no lo trae este paquete, es el mismo backend que ya tenías
funcionando con el login en Angular, no requiere ningún cambio.

```bash
npm install
cp .env.example .env   # ajustar VITE_API_URL si el backend no está en localhost:3000
npm run dev
```

Con el backend levantado (por defecto en `http://localhost:3000`) y
`npm run dev` corriendo el front, andá a la URL que te muestre Vite
(por defecto `http://localhost:5173`) y probá: `sign-up` → `log-in` →
`dashboard` → `Salir`.

## Fix aplicado sobre la migración inicial

`fetch` (usado en `http-client.js`) **no rechaza la promesa** cuando el
backend responde 400/401/500, a diferencia del `HttpClient` de Angular,
que sí convierte cualquier respuesta no-2xx en un error de Observable.
Esto se corrigió agregando una verificación explícita de `response.ok`
en `http-client.js`, que lanza un `Error` con el mensaje que manda el
backend. Así, un login o registro fallido (ej. contraseña incorrecta)
se queda en la página mostrando el error, en vez de intentar navegar al
dashboard igual.

## Equivalencias Angular → React

| Angular | React |
|---|---|
| `environments/environment.ts` | `src/services/environment.js` (usa `import.meta.env.VITE_API_URL`) |
| `shared/data-access/storage.service.ts` | `src/services/storage.service.js` |
| `shared/data-access/auth-state.service.ts` | `src/services/auth-state.service.js` |
| `shared/interceptors/auth.interceptor.ts` | `src/services/http-client.js` (wrapper de `fetch`, ya que `HttpClient` de Angular no existe en React) |
| `auth/data-access/auth.service.ts` | `src/services/auth.service.js` (Observables → `async/await`) |
| `dashboard/data-access/dashboard.service.ts` | `src/services/dashboard.service.js` |
| `shared/guards/auth.guard.ts` | `src/routes/auth.guard.jsx` (`CanActivateFn` → componentes `<PrivateRoute />` / `<PublicRoute />` con `<Outlet />`) |
| `app.routes.ts` + `auth/features/shell/auth.routes.ts` | `src/routes/AppRouter.jsx` |
| `auth/features/log-in/*` | `src/pages/LogInPage.jsx` (`ReactiveFormsModule` → `useState`) |
| `auth/features/sign-up/*` | `src/pages/SignUpPage.jsx` |
| `dashboard/dashboard.component.*` | `src/pages/DashboardPage.jsx` (`toSignal` → `useState` + `useEffect`) |
| `app.component.html` (`<router-outlet />`) | `src/App.jsx` |

Rutas: `/auth/log-in`, `/auth/sign-up` (públicas) y `/dashboard`
(privada), igual que en Angular.
