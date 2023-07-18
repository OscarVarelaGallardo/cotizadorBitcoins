import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Index from './views/Index'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import Settings from './views/Settings'
import PlanesPremium from './views/Premium/PlanesPremium'
import FormaPago from './views/Premium/FormaPago'
import Error from './views/Error'
import { Blog } from './views/Blog'
import { AuthProvider } from './context/AuthProvider'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/settings',
        element: <Settings />
      }
      ,
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
        element: <Blog />
      },
      {
        path: '*',
        element: <Error />,
      }


    ],
  },

])

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
