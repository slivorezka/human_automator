import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.info(document.getElementById('human-automator-modal'));

createRoot(document.getElementById('human-automator-modal')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
