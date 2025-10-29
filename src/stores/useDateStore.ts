import { create } from 'zustand'

import useAppStore from '@/stores/useAppStore'
import useStudentsStore from '@/stores/useStudentsStore'
import { fillPercent, getCellsWithDates, getDates } from '@/utils/gradebook'

const useDateStore = create<{
  dates: Date[]
  minDate: Date | undefined
  maxDate: Date | undefined
  fileDate: Date | undefined
  startDate: Date | undefined
  endDate: Date | undefined
  setStartDate: (date: Date | undefined) => void
  setEndDate: (date: Date | undefined) => void
  setFileDate: (date: Date | undefined) => void
  reset: () => void
  loadDates: () => void
}>((set, get) => ({
  dates: [],
  minDate: undefined,
  maxDate: undefined,
  fileDate: undefined,
  startDate: undefined,
  endDate: undefined,
  setFileDate: (date) => set({ fileDate: date }),
  setStartDate: (date) => {
    set({ startDate: date })

    useAppStore
      .getState()
      .setCurrentPercent(
        fillPercent(
          useStudentsStore.getState().studentsList,
          getCellsWithDates(get().dates),
          get().startDate,
          get().endDate
        )
      )
  },
  setEndDate: (date) => {
    set({ endDate: date })

    useAppStore
      .getState()
      .setCurrentPercent(
        fillPercent(
          useStudentsStore.getState().studentsList,
          getCellsWithDates(get().dates),
          get().startDate,
          get().endDate
        )
      )
  },
  loadDates: () => {
    const { dates, startDate, endDate } = getDates()
    set({ dates })
    set({ startDate })
    set({ endDate })
    set({ minDate: startDate })
    set({ maxDate: endDate })
  },
  reset: () => {
    set({ dates: [] })
    set({ minDate: undefined })
    set({ maxDate: undefined })
    set({ fileDate: undefined })
    set({ startDate: undefined })
    set({ endDate: undefined })
  },
}))

export default useDateStore
