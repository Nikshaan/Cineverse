import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
    <Provider store = {store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
)
