import { StrictMode } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.tsx'
import './scss/style.scss'

let rootHumanAutomator: Root | null

window.addEventListener('runHumanAutomator', () => {
  const app = document.createElement('div')
  app.id = 'human-automator'
  document.body.append(app)

  rootHumanAutomator = createRoot(app)
  rootHumanAutomator.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})

window.addEventListener('destroyHumanAutomator', () => {
  rootHumanAutomator?.unmount()
  rootHumanAutomator = null

  document.getElementById('human-automator')?.remove()
})
