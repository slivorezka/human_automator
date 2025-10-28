import { create } from 'zustand'

import type { Action } from '@/types'

const useActionStore = create<{
  action: Action
  setAction: (action: Action) => void
  isCopyRating: boolean
  isSetRating: boolean
  isDeleteRating: boolean
  isCountRating: boolean
  reset: () => void
}>((set) => ({
  action: false,
  isCopyRating: false,
  isSetRating: false,
  isDeleteRating: false,
  isCountRating: false,
  setAction: (action) =>
    set({
      action,
      isCopyRating: action === 'copyRating',
      isSetRating: action === 'setRating',
      isDeleteRating: action === 'deleteRating',
      isCountRating: action === 'countRating',
    }),
  reset: () =>
    set({
      action: false,
      isCopyRating: false,
      isSetRating: false,
      isDeleteRating: false,
      isCountRating: false,
    }),
}))

export default useActionStore
