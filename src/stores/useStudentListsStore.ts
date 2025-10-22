import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { SelectOption, StudentList, StudentSelectType } from '@/types'
import { fillPercent, getClassId, getClassLabel } from '@/utils/gradebook'

import useAppStore from './useAppStore'
import useFormErrorStore from './useFormErrorStore'
import useStudentsStore from './useStudentsStore'

const useStudentListsStore = create<{
  classId: number
  classLabel: string
  studentListId: number
  studentListUuid: string
  studentLists: StudentList[]
  studentSelectType: StudentSelectType
  isStudentSelectTypeAll: boolean
  isStudentSelectTypeList: boolean
  isStudentSelectTypeCustom: boolean
  selectedStudentLists: StudentList[]
  setStudentSelectType: (studentSelectType: StudentSelectType) => void
  handleSelectedStudentLists: (studentLists: MultiValue<SelectOption>) => void
  setStudentLists: (studentLists: StudentList[]) => void
  setStudentListUuid: (uuid: string) => void
  loadStudentLists: () => Promise<void>
  setSelectedStudentLists: (studentLists: StudentList[]) => void
  getStudentListByUuid: (uuid: string) => StudentList | undefined
  addStudentList: (name: string, students: string[]) => Promise<boolean>
  updateStudentList: (uuid: string, name: string, students: string[]) => Promise<void>
  removeStudentList: (uuid: string) => Promise<void>
  isListNameExists: (name: string) => boolean
  reset: () => void
}>((set, get) => {
  return {
    classId: getClassId(),
    classLabel: getClassLabel(),
    studentListId: 0,
    studentListUuid: '',
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
          .map((option) => get().getStudentListByUuid(option.value))
          .filter((s): s is StudentList => Boolean(s))
      )

      useFormErrorStore.getState().setPercentError('')
    },
    setStudentLists: (studentLists) => {
      if (studentLists.length > 0) {
        set({ studentLists: [...studentLists].sort((a, b) => a.name.localeCompare(b.name)) })
      }
    },
    setStudentListUuid: (uuid) => set({ studentListUuid: uuid }),
    setSelectedStudentLists: (studentLists) => {
      set({ selectedStudentLists: studentLists })
      useAppStore
        .getState()
        .setCurrentPercent(fillPercent(studentLists.flatMap((studentList) => studentList.students)))
    },
    getStudentListByUuid: (uuid) => {
      return get().studentLists.find((studentList) => studentList.uuid === uuid)
    },
    addStudentList: async (name, students) => {
      if (get().isListNameExists(name)) {
        return false
      }

      const updatedLists = [
        ...get().studentLists,
        {
          uuid: crypto.randomUUID(),
          classId: get().classId,
          name: name.trim(),
          classLabel: get().classLabel,
          students,
        },
      ]

      await chrome.storage.local.set({
        humanAutomator: { studentLists: updatedLists },
      })

      get().setStudentLists(updatedLists)

      return true
    },
    updateStudentList: async (uuid, name, students) => {
      const studentList = get().getStudentListByUuid(uuid)

      if (studentList) {
        const updatedStudentLists = [
          ...get().studentLists.filter((studentList) => studentList.uuid !== uuid),
          {
            ...studentList,
            name: name.trim(),
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
    removeStudentList: async (uuid) => {
      const updatedLists = get().studentLists.filter((studentList) => !(studentList.uuid === uuid))

      await chrome.storage.local.set({
        humanAutomator: { studentLists: updatedLists },
      })

      set({
        studentLists: [...updatedLists].sort((a, b) => a.name.localeCompare(b.name)),
      })

      const selectedStudentLists = get().selectedStudentLists.filter(
        (studentList) => !(studentList.uuid === uuid)
      )

      if (selectedStudentLists.length !== get().selectedStudentLists.length) {
        get().setSelectedStudentLists(selectedStudentLists)
      }
    },
    isListNameExists: (name) => {
      return get().studentLists.some(
        (studentList) =>
          studentList.classId === get().classId &&
          studentList.name.toLowerCase() === name.toLowerCase()
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
        classLabel: getClassLabel(),
        studentListUuid: '',
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
