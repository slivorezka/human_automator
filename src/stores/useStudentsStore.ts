import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { FileStudent, SelectOption } from '@/types'
import { fillPercent, getCellsWithDates } from '@/utils/gradebook'
import { students } from '@/utils/gradebook'

import useAppStore from './useAppStore'
import useDateStore from './useDateStore'
import useFormErrorStore from './useFormErrorStore'

const useStudentsStore = create<{
  studentsList: string[]
  selectedStudents: string[]
  fileStudents: FileStudent[]
  setSelectedStudents: (students: string[]) => void
  setFileStudents: (fileStudents: FileStudent[]) => void
  handleSelectedStudents: (studentOption: MultiValue<SelectOption>) => void
  loadStudentsList: () => void
  reset: () => void
}>((set, get) => ({
  studentsList: [],
  selectedStudents: [],
  fileStudents: [],
  setSelectedStudents: (students) => {
    set({ selectedStudents: students })
    useAppStore
      .getState()
      .setCurrentPercent(
        fillPercent(
          students,
          getCellsWithDates(useDateStore.getState().dates),
          useDateStore.getState().startDate,
          useDateStore.getState().endDate
        )
      )
  },
  setFileStudents: (fileStudents: FileStudent[]) => set({ fileStudents }),
  handleSelectedStudents: (studentOption: MultiValue<SelectOption>) => {
    const students = studentOption.map((option) => option.label)

    get().setSelectedStudents(students)
    useFormErrorStore.getState().setPercentError('')
  },
  loadStudentsList: () => {
    set({ studentsList: students() })
  },
  reset: () => set({ studentsList: [], selectedStudents: [], fileStudents: [] }),
}))

export default useStudentsStore
