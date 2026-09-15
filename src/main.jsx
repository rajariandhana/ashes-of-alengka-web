import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AshesOfAlengka from './AshesOfAlengka'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AshesOfAlengka />
  </StrictMode>,
)
