import { type Student } from './index.ts'

export type Action = 'set_rating' | 'delete_rating' | 'show_rating_count' | ''

export interface State {
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

export type ActionType =
  | { type: 'SET_ACTION'; payload: Action }
  | { type: 'SET_SELECTED_STUDENTS'; payload: Student[] | undefined }
  | { type: 'START_PROCESSING' }
  | { type: 'STOP_PROCESSING' }
  | { type: 'SET_MIN_RATING'; payload: number }
  | { type: 'SET_MAX_RATING'; payload: number }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_PERCENT_ERROR'; payload: string }
  | { type: 'SET_MAX_PERCENT'; payload: number }
  | { type: 'SET_CURRENT_PERCENT'; payload: number }
  | { type: 'RESET' }
