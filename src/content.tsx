import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-datepicker/dist/react-datepicker.css'
import '@/scss/style.scss'

import { StrictMode } from 'react'
import { createRoot, type Root } from 'react-dom/client'

import App from '@/App'
import useActionStore from '@/stores/useActionStore'
import useAppStore from '@/stores/useAppStore'
import useDateStore from '@/stores/useDateStore'
import useFormErrorStore from '@/stores/useFormErrorStore'
import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import useStudentsStore from '@/stores/useStudentsStore'
import useToastStore from '@/stores/useToastStore'

let rootHumanAutomator: Root | null = null

async function icon(): Promise<string> {
  const logoUrl = chrome.runtime.getURL('icons/logo.svg')
  const response = await fetch(logoUrl)

  return await response.text()
}

function resetStores(): void {
  useActionStore.getState().reset()
  useAppStore.getState().reset()
  useDateStore.getState().reset()
  useFormErrorStore.getState().reset()
  useModalStoreStore.getState().reset()
  useStudentListsStore.getState().reset()
  useStudentsStore.getState().reset()
  useToastStore.getState().reset()
}

function loadStoreData(): void {
  useStudentsStore.getState().loadStudentsList()
  useDateStore.getState().loadDates()
  useStudentListsStore.getState().loadStudentLists()
}

function mountHumanAutomator(): void {
  rootHumanAutomator?.unmount()
  rootHumanAutomator = null

  document.getElementById('human-automator-app')?.remove()

  resetStores()
  loadStoreData()

  const app = document.createElement('div')
  app.id = 'human-automator-app'
  document.body.append(app)

  rootHumanAutomator = createRoot(app)
  rootHumanAutomator.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

async function app(): Promise<HTMLDivElement> {
  const humanAutomator = document.createElement('div')

  humanAutomator.id = 'human-automator'
  humanAutomator.innerHTML = await icon()
  humanAutomator.addEventListener('click', mountHumanAutomator)

  return humanAutomator
}

;(async function initHumanAutomator() {
  document.body.appendChild(await app())
})()
