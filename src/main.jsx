import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-[90%] mx-auto'>
    <App />
    </div>
  </StrictMode>,
)
