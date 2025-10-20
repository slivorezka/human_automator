import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { Student, StudentList, StudentListType } from '../types'
import { className } from '../utils/gradebook'
import useFormErrorStore from './useFormErrorStore'
import useStudentsStore from './useStudentsStore'

const useStudentListsStore = create<{
  studentListId: string
  studentListType: StudentListType
  studentLists: StudentList[]
  isStudentTypeListAll: boolean
  isStudentTypeList: boolean
  isStudentTypeCustom: boolean
  selectedStudentLists: StudentList[]
  showModalStudentLists: boolean
  showModalStudentListAdd: boolean
  showModalStudentListEdit: boolean
  showModalStudentListRemove: boolean
  setStudentListType: (type: StudentListType) => void
  handleSelectedStudentLists: (studentLists: MultiValue<StudentList>) => void
  setStudentLists: (studentLists: StudentList[]) => void
  setStudentListId: (id: string) => void
  loadStudentLists: () => Promise<void>
  setShowModalStudentLists: (value: boolean) => void
  setShowModalStudentListAdd: (value: boolean) => void
  setShowModalStudentListEdit: (value: boolean) => void
  setShowModalStudentListRemove: (value: boolean) => void
  getStudentListById: (id: string) => StudentList | undefined
  addStudentList: (name: string, students: Student[]) => Promise<boolean>
  updateStudentList: (id: string, name: string, students: Student[]) => Promise<void>
  removeStudentList: (id: string) => Promise<void>
  isListNameExists: (name: string) => boolean
  setStudentTypeList: (studentListType: StudentListType) => void
  reset: () => void
}>((set, get) => ({
  studentListId: '',
  studentListType: 'all',
  selectedStudentLists: [],
  studentLists: [],
  isStudentTypeListAll: false,
  isStudentTypeList: false,
  isStudentTypeCustom: false,
  showModalStudentLists: false,
  showModalStudentListAdd: false,
  showModalStudentListEdit: false,
  showModalStudentListRemove: false,
  setStudentListType: (type) => {
    set({ studentListType: type })

    const studentsStore = useStudentsStore.getState()

    if (type === 'all' && studentsStore.selectedStudents.length > 0) {
      studentsStore.setSelectedStudents([])
    }
  },
  loadStudentLists: async () => {
    const result = await chrome.storage.local.get('humanAutomator')
    set({ studentLists: result.humanAutomator?.studentLists || [] })
  },
  handleSelectedStudentLists: (studentLists: MultiValue<StudentList>) => {
    set({ selectedStudentLists: studentLists as StudentList[] })
    get().setStudentLists(studentLists as StudentList[])
    useFormErrorStore.getState().setPercentError('')
  },
  setStudentLists: (lists) => set({ studentLists: lists }),
  setStudentListId: (id) => set({ studentListId: id }),
  setShowModalStudentLists: (value) => set({ showModalStudentLists: value }),
  setShowModalStudentListAdd: (value) => set({ showModalStudentListAdd: value }),
  setShowModalStudentListEdit: (value) => set({ showModalStudentListEdit: value }),
  setShowModalStudentListRemove: (value) => set({ showModalStudentListRemove: value }),
  getStudentListById: (id) => {
    return get().studentLists.find((list) => list.id === id)
  },
  addStudentList: async (name, students) => {
    if (get().isListNameExists(name)) {
      return false
    }

    const updatedLists = [
      ...get().studentLists,
      {
        name,
        className: className(),
        id: crypto.randomUUID(),
        students,
      },
    ]

    await chrome.storage.local.set({
      humanAutomator: { studentLists: updatedLists },
    })

    set({ studentLists: updatedLists })
    return true
  },
  updateStudentList: async (id, name, students) => {
    const studentList = get().getStudentListById(id)

    if (studentList) {
      const updatedStudentLists = [
        ...get().studentLists.filter((list) => list.id !== id),
        {
          ...studentList,
          name,
          students,
        },
      ]

      await chrome.storage.local.set({
        humanAutomator: { studentLists: updatedStudentLists },
      })

      set({ studentLists: updatedStudentLists })
    }
  },
  removeStudentList: async (id) => {
    const updatedLists = get().studentLists.filter((studentList) => studentList.id !== id)

    await chrome.storage.local.set({
      humanAutomator: { studentLists: updatedLists },
    })

    set({ studentLists: updatedLists })
  },
  isListNameExists: (name) => {
    return get().studentLists.some((list) => list.name === name)
  },
  setStudentTypeList: (studentListType) =>
    set({
      studentListType,
      isStudentTypeListAll: studentListType === 'all',
      isStudentTypeList: studentListType === 'list',
      isStudentTypeCustom: studentListType === 'custom',
    }),
  reset: () =>
    set({
      studentListId: '',
      studentListType: 'all',
      selectedStudentLists: [],
      studentLists: [],
      isStudentTypeListAll: false,
      isStudentTypeList: false,
      isStudentTypeCustom: false,
      showModalStudentLists: false,
      showModalStudentListAdd: false,
      showModalStudentListEdit: false,
      showModalStudentListRemove: false,
    }),
}))

export default useStudentListsStore
