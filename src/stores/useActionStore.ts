import { create } from 'zustand'

import type { Action } from '@/types'

const useActionStore = create<{
  action: Action
  setAction: (action: Action) => void
  isSetRating: boolean
  isDeleteRating: boolean
  isCountRating: boolean
  reset: () => void
}>((set) => ({
  action: false,
  isSetRating: false,
  isDeleteRating: false,
  isCountRating: false,
  setAction: (action) =>
    set({
      action,
      isSetRating: action === 'setRating',
      isDeleteRating: action === 'deleteRating',
      isCountRating: action === 'countRating',
    }),
  reset: () =>
    set({
      action: false,
      isSetRating: false,
      isDeleteRating: false,
      isCountRating: false,
    }),
}))

export default useActionStore
