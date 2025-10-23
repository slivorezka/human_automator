import { create } from 'zustand'

import { getDates } from '@/utils/gradebook'

const useDateStore = create<{
  minDate: Date | undefined
  maxDate: Date | undefined
  startDate: Date | undefined
  endDate: Date | undefined
  setStartDate: (date: Date | undefined) => void
  setEndDate: (date: Date | undefined) => void
  reset: () => void
  loadDates: () => void
}>((set) => ({
  minDate: undefined,
  maxDate: undefined,
  startDate: undefined,
  endDate: undefined,
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  loadDates: () => {
    const { startDate, endDate } = getDates()
    set({ startDate })
    set({ endDate })
    set({ minDate: startDate })
    set({ maxDate: endDate })
  },
  reset: () => {
    set({ minDate: undefined })
    set({ maxDate: undefined })
    set({ startDate: undefined })
    set({ endDate: undefined })
  },
}))

export default useDateStore
