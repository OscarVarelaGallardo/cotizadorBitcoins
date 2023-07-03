import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Index from './views/Index'
import Layout from './components/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Index/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/login',
        element: <Login/>,
      }
      
    ],
  },

])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
