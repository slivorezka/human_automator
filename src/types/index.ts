export type ModalType =
  | 'basic'
  | 'studentLists'
  | 'studentListAdd'
  | 'studentListEdit'
  | 'studentListDelete'
export type Action = false | 'setRating' | 'deleteRating' | 'countRating'
export type StudentSelectType = 'list' | 'custom' | 'all'
export type ToastType =
  | false
  | 'basicDone'
  | 'basicCancel'
  | 'studentListAdd'
  | 'studentListSave'
  | 'studentListDelete'

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
