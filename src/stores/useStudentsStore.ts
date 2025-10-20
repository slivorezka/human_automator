import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { Student } from '../types'
import { fillPercent } from '../utils/gradebook'
import { students } from '../utils/gradebook'
import useAppStore from './useAppStore'
import useFormErrorStore from './useFormErrorStore'

const useStudentsStore = create<{
  studentsList: Student[]
  selectedStudents: Student[]
  setSelectedStudents: (students: Student[]) => void
  handleSelectedStudents: (students: MultiValue<Student>) => void
  loadStudentsList: () => void
  reset: () => void
}>((set, get) => ({
  studentsList: [],
  selectedStudents: [],
  setSelectedStudents: (students) => {
    set({ selectedStudents: students })
    useAppStore.getState().setCurrentPercent(fillPercent(students))
  },
  handleSelectedStudents: (students: MultiValue<Student>) => {
    set({ selectedStudents: students as Student[] })
    get().setSelectedStudents(students as Student[])
    useFormErrorStore.getState().setPercentError('')
  },
  loadStudentsList: () => {
    set({ studentsList: students() })
  },
  reset: () => set({ studentsList: [], selectedStudents: [] }),
}))

export default useStudentsStore
