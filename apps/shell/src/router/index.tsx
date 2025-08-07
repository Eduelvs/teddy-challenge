import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

// o microfrontend clientes será montado em tempo de execução
const ClientesPage = React.lazy(() => import('../../../clientes/src/pages/ClientesApp'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/clientes',
    element: (
      <React.Suspense fallback={<div>Carregando clientes...</div>}>
        <ClientesPage />
      </React.Suspense>
    ),
  },
])
