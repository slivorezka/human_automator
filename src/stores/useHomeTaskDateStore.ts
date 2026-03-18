import type { SingleValue } from 'react-select'
import { create } from 'zustand'

import type { HomeTaskDateOption, SelectOption } from '@/types'

import useFormErrorStore from './useFormErrorStore'

const useHomeTaskDateStore = create<{
  isSkipHomeTaskDate: boolean
  selectedHomeTaskDate: HomeTaskDateOption | null
  setSelectedHomeTaskDate: (date: HomeTaskDateOption) => void
  handleSelectedHomeTaskDateList: (homeTaskDateOption: SingleValue<SelectOption>) => void
  setIsSkipHomeTaskDate: (isSkip: boolean) => void
  reset: () => void
}>((set) => ({
  isSkipHomeTaskDate: true,
  selectedHomeTaskDate: null,
  handleSelectedHomeTaskDateList: (homeTaskDateOption: SingleValue<SelectOption>) => {
    set({ selectedHomeTaskDate: (homeTaskDateOption?.label as HomeTaskDateOption) || null })
    useFormErrorStore.getState().setPercentError('')
  },
  setSelectedHomeTaskDate: (date) => set({ selectedHomeTaskDate: date }),
  setIsSkipHomeTaskDate: (isSkip) => set({ isSkipHomeTaskDate: isSkip }),
  reset: () => set({ selectedHomeTaskDate: null, isSkipHomeTaskDate: true }),
}))

export default useHomeTaskDateStore
