export type ModalType =
  | 'basic'
  | 'studentLists'
  | 'studentListAdd'
  | 'studentListEdit'
  | 'studentListDelete'
  | 'HomeTaskDate'

export type Action = false | 'setRating' | 'copyRating' | 'deleteRating' | 'countRating' | 'HomeTaskDate'

export type HomeTaskDateOption =
  | 'Наступний урок'
  | 'Через урок'
  | 'До кінця теми'
  | 'До кінця семестру'

export type StudentSelectType = 'list' | 'custom' | 'file' | 'all'

export type ToastType =
  | false
  | 'basicDone'
  | 'basicCancel'
  | 'studentListAdd'
  | 'studentListSave'
  | 'studentListDelete'
  | 'HomeTaskDate'

export type ParsedRow = Record<string, unknown>[]

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
