export interface Student {
  value: string
  label: string
}

export type Action = 'set_rating' | 'delete_rating' | 'count_rating' | ''
export type ToastType = 'success' | 'danger' | ''
