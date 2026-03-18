import { create } from 'zustand'

import type { Action } from '@/types'

const useActionStore = create<{
  action: Action
  setAction: (action: Action) => void
  isCopyRating: boolean
  isSetRating: boolean
  isDeleteRating: boolean
  isCountRating: boolean
  isHomeTaskDate: boolean
  reset: () => void
}>((set) => ({
  action: false,
  isCopyRating: false,
  isSetRating: false,
  isDeleteRating: false,
  isCountRating: false,
  isHomeTaskDate: false,
  setAction: (action) =>
    set({
      action,
      isCopyRating: action === 'copyRating',
      isSetRating: action === 'setRating',
      isDeleteRating: action === 'deleteRating',
      isCountRating: action === 'countRating',
      isHomeTaskDate: action === 'HomeTaskDate',
    }),
  reset: () =>
    set({
      action: false,
      isCopyRating: false,
      isSetRating: false,
      isDeleteRating: false,
      isCountRating: false,
      isHomeTaskDate: false,
    }),
}))

export default useActionStore
