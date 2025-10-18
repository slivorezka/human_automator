import { useMemo, useState } from 'react'

import type { Action } from '../types'

export const useAction = (): {
  action: Action
  setAction: (action: Action) => void
  isSetRating: boolean
  isDeleteRating: boolean
  isCountRating: boolean
} => {
  const [action, setAction] = useState<Action>('')

  const isSetRating = useMemo(() => action === 'set_rating', [action])
  const isDeleteRating = useMemo(() => action === 'delete_rating', [action])
  const isCountRating = useMemo(() => action === 'count_rating', [action])

  return {
    action,
    setAction,
    isSetRating,
    isDeleteRating,
    isCountRating,
  }
}

export default useAction
