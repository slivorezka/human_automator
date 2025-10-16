import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.tsx'
import './scss/style.scss'

const app = document.createElement('div')
app.id = 'human-automator'
document.body.append(app)
createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>
)
