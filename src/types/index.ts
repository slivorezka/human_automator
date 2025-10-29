export type ModalType =
  | 'basic'
  | 'studentLists'
  | 'studentListAdd'
  | 'studentListEdit'
  | 'studentListDelete'

export type Action = false | 'setRating' | 'copyRating' | 'deleteRating' | 'countRating'

export type StudentSelectType = 'list' | 'custom' | 'file' | 'all'

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
  uuid: string
  classId: number
  classLabel: string
  name: string
  students: string[]
}

export type FileStudent = { name: string; rating: number }
