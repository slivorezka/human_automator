export interface Student {
  value: string
  label: string
}

export interface StudentList {
  id: string
  className: string
  name: string
  students: Student[]
}

export type Action = 'set_rating' | 'delete_rating' | 'count_rating' | ''
export type StudentListType = 'list' | 'custom' | 'all'
export type ToastType = 'success' | 'danger' | ''
