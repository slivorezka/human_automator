import { create } from 'zustand'

import type { ToastType } from '../types'

const useToastStore = create<{
  toast: ToastType
  setToast: (toast: ToastType) => void
}>((set) => ({
  toast: false,
  setToast: (toast) => set({ toast }),
}))

export default useToastStore
