import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)