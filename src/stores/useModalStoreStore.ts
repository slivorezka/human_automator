import { create } from 'zustand'

import type { ModalType } from '../types'

const useModalStoreStore = create<{
  showModalAction: boolean
  showModalStudentLists: boolean
  showModalStudentListAdd: boolean
  showModalStudentListEdit: boolean
  showModalStudentListDelete: boolean
  setShowActionModal: (value: boolean) => void
  setShowModalStudentLists: (value: boolean) => void
  setShowModalStudentListAdd: (value: boolean) => void
  setShowModalStudentListEdit: (value: boolean) => void
  setShowModalStudentListDelete: (value: boolean) => void
  setModal: (type: ModalType, value: boolean) => void
  reset: () => void
}>((set, get) => ({
  showModalAction: true,
  showModalStudentLists: false,
  showModalStudentListAdd: false,
  showModalStudentListEdit: false,
  showModalStudentListDelete: false,
  setShowActionModal: (value) => get().setModal('basic', value),
  setShowModalStudentLists: (value) => get().setModal('studentLists', value),
  setShowModalStudentListAdd: (value) => get().setModal('studentListAdd', value),
  setShowModalStudentListEdit: (value) => get().setModal('studentListEdit', value),
  setShowModalStudentListDelete: (value) => get().setModal('studentListDelete', value),
  setModal: (type: ModalType, value: boolean) => {
    set({
      showModalAction: type === 'basic' && value,
      showModalStudentLists: type === 'studentLists' && value,
      showModalStudentListAdd: type === 'studentListAdd' && value,
      showModalStudentListEdit: type === 'studentListEdit' && value,
      showModalStudentListDelete: type === 'studentListDelete' && value,
    })
  },
  reset: () =>
    set({
      showModalAction: true,
      showModalStudentLists: false,
      showModalStudentListAdd: false,
      showModalStudentListEdit: false,
      showModalStudentListDelete: false,
    }),
}))

export default useModalStoreStore
