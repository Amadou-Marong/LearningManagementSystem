import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';  // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons
import {  RouterProvider } from 'react-router-dom';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
