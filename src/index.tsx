import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/scss/style.scss'

import { StrictMode } from 'react'
import { createRoot, type Root } from 'react-dom/client'

import App from '@/App'
import useActionStore from '@/stores/useActionStore'
import useAppStore from '@/stores/useAppStore'
import useFormErrorStore from '@/stores/useFormErrorStore'
import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import useStudentsStore from '@/stores/useStudentsStore'
import useToastStore from '@/stores/useToastStore'

let rootHumanAutomator: Root | null

window.addEventListener('runHumanAutomator', async () => {
  useStudentsStore.getState().loadStudentsList()

  await useStudentListsStore.getState().loadStudentLists()

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

  useActionStore.getState().reset()
  useAppStore.getState().reset()
  useFormErrorStore.getState().reset()
  useModalStoreStore.getState().reset()
  useStudentListsStore.getState().reset()
  useStudentsStore.getState().reset()
  useToastStore.getState().reset()

  document.getElementById('human-automator')?.remove()
})

function onUrlChange(callback: () => void) {
  const pushState = history.pushState
  const replaceState = history.replaceState

  // Patch both pushState and replaceState
  history.pushState = function (...args) {
    pushState.apply(this, args as any)
    callback()
  }
  history.replaceState = function (...args) {
    replaceState.apply(this, args as any)
    callback()
  }

  // Also handle back/forward
  window.addEventListener('popstate', callback)
}

// ✅ Example
onUrlChange(() => {
  console.log('URL changed:', location.href)
})
