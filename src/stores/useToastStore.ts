import { create } from 'zustand'

import type { ToastType } from '@/types'

const useToastStore = create<{
  toast: ToastType
  setToast: (toast: ToastType) => void
  reset: () => void
}>((set) => ({
  toast: false,
  setToast: (toast) => set({ toast }),
  reset: () => set({ toast: false }),
}))

export default useToastStore
