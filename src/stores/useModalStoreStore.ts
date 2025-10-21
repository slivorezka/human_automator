import { create } from 'zustand'

import type { ModalType } from '@/types'

const useModalStoreStore = create<{
  showModalBasic: boolean
  showModalStudentLists: boolean
  showModalStudentListAdd: boolean
  showModalStudentListEdit: boolean
  showModalStudentListDelete: boolean
  setShowModalBasic: (value: boolean) => void
  setShowModalStudentLists: (value: boolean) => void
  setShowModalStudentListAdd: (value: boolean) => void
  setShowModalStudentListEdit: (value: boolean) => void
  setShowModalStudentListDelete: (value: boolean) => void
  setModal: (type: ModalType, value: boolean) => void
  reset: () => void
}>((set, get) => ({
  showModalBasic: true,
  showModalStudentLists: false,
  showModalStudentListAdd: false,
  showModalStudentListEdit: false,
  showModalStudentListDelete: false,
  setShowModalBasic: (value) => get().setModal('basic', value),
  setShowModalStudentLists: (value) => get().setModal('studentLists', value),
  setShowModalStudentListAdd: (value) => get().setModal('studentListAdd', value),
  setShowModalStudentListEdit: (value) => get().setModal('studentListEdit', value),
  setShowModalStudentListDelete: (value) => get().setModal('studentListDelete', value),
  setModal: (type: ModalType, value: boolean) => {
    set({
      showModalBasic: type === 'basic' && value,
      showModalStudentLists: type === 'studentLists' && value,
      showModalStudentListAdd: type === 'studentListAdd' && value,
      showModalStudentListEdit: type === 'studentListEdit' && value,
      showModalStudentListDelete: type === 'studentListDelete' && value,
    })
  },
  reset: () =>
    set({
      showModalBasic: true,
      showModalStudentLists: false,
      showModalStudentListAdd: false,
      showModalStudentListEdit: false,
      showModalStudentListDelete: false,
    }),
}))

export default useModalStoreStore
