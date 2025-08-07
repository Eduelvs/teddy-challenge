import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LoadingScreen from '../components/LoadingScreen';

const ClientesPage = React.lazy(() => import('../../../clientes/src/pages/list/ClientesApp'));
const ClientesSelectPage = React.lazy(
  () => import('../../../clientes/src/pages/select/ClientesApp')
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/clientes',
    element: (
      <React.Suspense fallback={<LoadingScreen message="Carregando clientes..." />}>
        <ClientesPage />
      </React.Suspense>
    ),
  },
  {
    path: '/selecionados',
    element: (
      <React.Suspense fallback={<LoadingScreen message="Carregando clientes selecionados..." />}>
        <ClientesSelectPage />
      </React.Suspense>
    ),
  },
]);
