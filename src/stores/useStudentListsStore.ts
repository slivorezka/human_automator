import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { SelectOption, StudentList, StudentSelectType } from '../types'
import { className, fillPercent } from '../utils/gradebook'
import useAppStore from './useAppStore'
import useFormErrorStore from './useFormErrorStore'
import useStudentsStore from './useStudentsStore'

const useStudentListsStore = create<{
  studentListId: string
  studentLists: StudentList[]
  studentSelectType: StudentSelectType
  isStudentSelectTypeAll: boolean
  isStudentSelectTypeList: boolean
  isStudentSelectTypeCustom: boolean
  selectedStudentLists: StudentList[]
  showModalStudentLists: boolean
  showModalStudentListAdd: boolean
  showModalStudentListEdit: boolean
  showModalStudentListRemove: boolean
  setStudentSelectType: (studentSelectType: StudentSelectType) => void
  handleSelectedStudentLists: (studentLists: MultiValue<SelectOption>) => void
  setStudentLists: (studentLists: StudentList[]) => void
  setStudentListId: (id: string) => void
  loadStudentLists: () => Promise<void>
  setShowModalStudentLists: (value: boolean) => void
  setShowModalStudentListAdd: (value: boolean) => void
  setShowModalStudentListEdit: (value: boolean) => void
  setShowModalStudentListRemove: (value: boolean) => void
  setSelectedStudentLists: (studentLists: StudentList[]) => void
  getStudentListById: (id: string) => StudentList | undefined
  addStudentList: (name: string, students: string[]) => Promise<boolean>
  updateStudentList: (id: string, name: string, students: string[]) => Promise<void>
  removeStudentList: (id: string) => Promise<void>
  isListNameExists: (name: string) => boolean
  reset: () => void
}>((set, get) => {
  return {
    studentListId: '',
    studentSelectType: 'all',
    selectedStudentLists: [],
    studentLists: [],
    isStudentSelectTypeAll: true,
    isStudentSelectTypeList: false,
    isStudentSelectTypeCustom: false,
    showModalStudentLists: false,
    showModalStudentListAdd: false,
    showModalStudentListEdit: false,
    showModalStudentListRemove: false,
    loadStudentLists: async () => {
      const result = await chrome.storage.local.get('humanAutomator')
      get().setStudentLists(result.humanAutomator?.studentLists || [])
    },
    handleSelectedStudentLists: (studentListsOption: MultiValue<SelectOption>) => {
      get().setSelectedStudentLists(
        studentListsOption
          .map((option) => get().getStudentListById(option.value))
          .filter((s): s is StudentList => Boolean(s))
      )

      useFormErrorStore.getState().setPercentError('')
    },
    setStudentLists: (studentLists) => {
      set({ studentLists: [...studentLists].sort((a, b) => a.name.localeCompare(b.name)) })
    },
    setStudentListId: (id) => set({ studentListId: id }),
    setShowModalStudentLists: (value) => set({ showModalStudentLists: value }),
    setShowModalStudentListAdd: (value) => set({ showModalStudentListAdd: value }),
    setShowModalStudentListEdit: (value) => set({ showModalStudentListEdit: value }),
    setShowModalStudentListRemove: (value) => set({ showModalStudentListRemove: value }),
    setSelectedStudentLists: (studentLists) => {
      set({ selectedStudentLists: studentLists })
      useAppStore
        .getState()
        .setCurrentPercent(fillPercent(studentLists.flatMap((studentList) => studentList.students)))
    },
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

      get().setStudentLists(updatedLists)

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

        get().setStudentLists(updatedStudentLists)
      }
    },
    removeStudentList: async (id) => {
      const updatedLists = get().studentLists.filter((studentList) => studentList.id !== id)

      await chrome.storage.local.set({
        humanAutomator: { studentLists: updatedLists },
      })

      get().setStudentLists(updatedLists)
    },
    isListNameExists: (name) => {
      return get().studentLists.some((list) => list.name === name)
    },
    setStudentSelectType: (studentSelectType) => {
      set({
        studentSelectType,
        isStudentSelectTypeAll: studentSelectType === 'all',
        isStudentSelectTypeList: studentSelectType === 'list',
        isStudentSelectTypeCustom: studentSelectType === 'custom',
      })

      const studentsStore = useStudentsStore.getState()

      if (studentSelectType === 'all') {
        if (studentsStore.selectedStudents.length > 0) {
          studentsStore.setSelectedStudents([])
        }

        if (get().selectedStudentLists.length > 0) {
          get().setSelectedStudentLists([])
        }
      }
    },
    reset: () =>
      set({
        studentListId: '',
        studentSelectType: 'all',
        selectedStudentLists: [],
        studentLists: [],
        isStudentSelectTypeAll: true,
        isStudentSelectTypeList: false,
        isStudentSelectTypeCustom: false,
        showModalStudentLists: false,
        showModalStudentListAdd: false,
        showModalStudentListEdit: false,
        showModalStudentListRemove: false,
      }),
  }
})

export default useStudentListsStore
