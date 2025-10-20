import { create } from 'zustand'

import { fillPercent } from '../utils/gradebook'

const useAppStore = create<{
  minRating: number
  maxRating: number
  maxPercent: number
  currentPercent: number
  removeRating: number
  removeAllRating: boolean
  isSubmitting: boolean
  isProcessing: boolean
  isRunCountRating: boolean
  setMinRating: (value: number) => void
  setMaxRating: (value: number) => void
  setMaxPercent: (value: number) => void
  setCurrentPercent: (value: number) => void
  setRemoveRating: (value: number) => void
  setRemoveAllRating: (value: boolean) => void
  setSubmitting: (value: boolean) => void
  setProcessing: (value: boolean) => void
  setCountRating: (value: boolean) => void
  reset: () => void
}>((set) => ({
  minRating: 0,
  maxRating: 0,
  maxPercent: 0,
  currentPercent: fillPercent(),
  removeRating: 0,
  removeAllRating: false,
  isSubmitting: false,
  isProcessing: false,
  isRunCountRating: false,
  setMinRating: (value) => set({ minRating: value }),
  setMaxRating: (value) => set({ maxRating: value }),
  setMaxPercent: (value) => set({ maxPercent: value }),
  setCurrentPercent: (value) => set({ currentPercent: value }),
  setRemoveRating: (rating) => set({ removeRating: rating }),
  setRemoveAllRating: (value) => set({ removeAllRating: value }),
  setSubmitting: (value) => set({ isSubmitting: value }),
  setProcessing: (value) => set({ isProcessing: value }),
  setCountRating: (value) => set({ isRunCountRating: value }),
  reset: () =>
    set({
      minRating: 0,
      maxRating: 0,
      maxPercent: 0,
      currentPercent: fillPercent(),
      removeRating: 0,
      removeAllRating: false,
      isSubmitting: false,
      isProcessing: false,
      isRunCountRating: false,
    }),
}))

export default useAppStore
