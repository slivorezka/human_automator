import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { SelectOption, StudentList, StudentSelectType } from '@/types'
import { fillPercent, getClassId, getClassName } from '@/utils/gradebook'

import useAppStore from './useAppStore'
import useFormErrorStore from './useFormErrorStore'
import useStudentsStore from './useStudentsStore'

const useStudentListsStore = create<{
  classId: number
  className: string
  studentListId: number
  studentLists: StudentList[]
  studentSelectType: StudentSelectType
  isStudentSelectTypeAll: boolean
  isStudentSelectTypeList: boolean
  isStudentSelectTypeCustom: boolean
  selectedStudentLists: StudentList[]
  setStudentSelectType: (studentSelectType: StudentSelectType) => void
  handleSelectedStudentLists: (studentLists: MultiValue<SelectOption>) => void
  setStudentLists: (studentLists: StudentList[]) => void
  setStudentListId: (id: number) => void
  loadStudentLists: () => Promise<void>
  setSelectedStudentLists: (studentLists: StudentList[]) => void
  getStudentListById: (id: number) => StudentList | undefined
  addStudentList: (name: string, students: string[]) => Promise<boolean>
  updateStudentList: (id: number, name: string, students: string[]) => Promise<void>
  removeStudentList: (id: number) => Promise<void>
  isListNameExists: (name: string) => boolean
  reset: () => void
}>((set, get) => {
  return {
    classId: getClassId(),
    className: getClassName(),
    studentListId: 0,
    studentSelectType: 'all',
    selectedStudentLists: [],
    studentLists: [],
    isStudentSelectTypeAll: true,
    isStudentSelectTypeList: false,
    isStudentSelectTypeCustom: false,
    loadStudentLists: async () => {
      const result = await chrome.storage.local.get('humanAutomator')

      set({ studentLists: result.humanAutomator?.studentLists || [] })
    },
    handleSelectedStudentLists: (studentListsOption: MultiValue<SelectOption>) => {
      get().setSelectedStudentLists(
        studentListsOption
          .map((option) => get().getStudentListById(Number(option.value)))
          .filter((s): s is StudentList => Boolean(s))
      )

      useFormErrorStore.getState().setPercentError('')
    },
    setStudentLists: (studentLists) => {
      if (studentLists.length > 0) {
        set({ studentLists: [...studentLists].sort((a, b) => a.name.localeCompare(b.name)) })
      }
    },
    setStudentListId: (id) => set({ studentListId: id }),
    setSelectedStudentLists: (studentLists) => {
      set({ selectedStudentLists: studentLists })
      useAppStore
        .getState()
        .setCurrentPercent(fillPercent(studentLists.flatMap((studentList) => studentList.students)))
    },
    getStudentListById: (id) => {
      return get().studentLists.find((studentList) => studentList.id === id)
    },
    addStudentList: async (name, students) => {
      if (get().isListNameExists(name)) {
        return false
      }

      const updatedLists = [
        ...get().studentLists,
        {
          name,
          className: get().className,
          id: get().classId,
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
          ...get().studentLists.filter((studentList) => studentList.id !== id),
          {
            ...studentList,
            name,
            students,
          },
        ]

        await chrome.storage.local.set({
          humanAutomator: { studentLists: updatedStudentLists },
        })

        set({
          studentLists: updatedStudentLists,
        })
      }
    },
    removeStudentList: async (id) => {
      const updatedLists = get().studentLists.filter((studentList) => !(studentList.id === id))

      await chrome.storage.local.set({
        humanAutomator: { studentLists: updatedLists },
      })

      set({
        studentLists: [...updatedLists].sort((a, b) => a.name.localeCompare(b.name)),
      })

      const selectedStudentLists = get().selectedStudentLists.filter(
        (studentList) => !(studentList.id === id)
      )

      if (selectedStudentLists.length !== get().selectedStudentLists.length) {
        get().setSelectedStudentLists(selectedStudentLists)
      }
    },
    isListNameExists: (name) => {
      return get().studentLists.some(
        (studentList) =>
          studentList.id === get().classId && studentList.name.toLowerCase() === name.toLowerCase()
      )
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
        classId: getClassId(),
        className: getClassName(),
        studentListId: 0,
        studentSelectType: 'all',
        selectedStudentLists: [],
        studentLists: [],
        isStudentSelectTypeAll: true,
        isStudentSelectTypeList: false,
        isStudentSelectTypeCustom: false,
      }),
  }
})

export default useStudentListsStore
