// import { useReducer } from 'react'

export interface Student {
  value: string
  label: string
}

export type Action = 'set_rating' | 'delete_rating' | 'count_rating' | ''

/*
export interface ProcessingState {
  isSubmitting: boolean
  isProcessing: boolean
  currentPercent: number
}

type State = {
  action: Action
  selectedStudents?: Student[]
  isSubmitting: boolean
  isProcessing: boolean
  minRating: number
  maxRating: number
  error: string
  percentError: string
  maxPercent: number
  currentPercent: number
}

const [state, dispatch] = useReducer(reducer, initialState)*/
