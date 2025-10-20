import { create } from 'zustand'

import type { Action } from '../types'

const useActionStore = create<{
  action: Action
  setAction: (action: Action) => void
  isSetRating: boolean
  isDeleteRating: boolean
  isCountRating: boolean
  showActionModal: boolean
  setShowActionModal: (value: boolean) => void
  reset: () => void
}>((set) => ({
  action: '',
  isSetRating: false,
  isDeleteRating: false,
  isCountRating: false,
  showActionModal: true,
  setAction: (action) =>
    set({
      action,
      isSetRating: action === 'set_rating',
      isDeleteRating: action === 'delete_rating',
      isCountRating: action === 'count_rating',
    }),
  setShowActionModal: (value) => set({ showActionModal: value }),
  reset: () =>
    set({
      action: '',
      isSetRating: false,
      isDeleteRating: false,
      isCountRating: false,
      showActionModal: true,
    }),
}))

export default useActionStore
