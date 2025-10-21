export interface SelectOption {
  value: string
  label: string
}

export interface StudentList {
  id: string
  className: string
  name: string
  students: string[]
}

export type Action = false | 'set_rating' | 'delete_rating' | 'count_rating'
export type StudentSelectType = 'list' | 'custom' | 'all'
export type ToastType =
  | false
  | 'GeneralDone'
  | 'GeneralCancel'
  | 'StudentListAdd'
  | 'StudentListSave'
  | 'StudentListDelete'
