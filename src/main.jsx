import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>,
)
