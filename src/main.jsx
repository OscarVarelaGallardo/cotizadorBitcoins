import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Index from './views/Index'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import Settings from './views/Settings'
import PlanesPremium from './views/Premium/PlanesPremium'
import FormaPago from './views/Premium/FormaPago'
import Error from './views/Error'
import { Blogs } from './views/Blogs'
import { AuthProvider } from './context/AuthProvider'
import { ConfigUserProvider } from './context/ConfigUserProvider'
import { PremiumProvider } from './context/PremiumProvider'
import { AvisoPrivacidad } from './views/AvisoPrivacidad'
import Deslinde from './views/Deslinde'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/planes-premium',
        element: <PlanesPremium />
      },
      {
        path: '/forma-pago',
        element: <FormaPago />
      },
      {
        path: '/blog',
        element: <Blogs />
      },
      {
        path: '/aviso-privacidad',
        element: <AvisoPrivacidad />
      }, {
        path: 'deslinde-responsavilidad',
        element: <Deslinde />
      },
      {
        path: '*',
        element: <Error />
      }

    ]
  }

])

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <PremiumProvider>
    <AuthProvider>
      <ConfigUserProvider>
      <RouterProvider router={router} />
      </ConfigUserProvider>
    </AuthProvider>
    </PremiumProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
