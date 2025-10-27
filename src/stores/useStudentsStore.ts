import type { MultiValue } from 'react-select'
import { create } from 'zustand'

import type { SelectOption } from '@/types'
import { fillPercent, getCellsWithDates } from '@/utils/gradebook'
import { students } from '@/utils/gradebook'

import useAppStore from './useAppStore'
import useDateStore from './useDateStore'
import useFormErrorStore from './useFormErrorStore'

const useStudentsStore = create<{
  studentsList: string[]
  selectedStudents: string[]
  setSelectedStudents: (students: string[]) => void
  handleSelectedStudents: (studentOption: MultiValue<SelectOption>) => void
  loadStudentsList: () => void
  reset: () => void
}>((set, get) => ({
  studentsList: [],
  selectedStudents: [],
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
  handleSelectedStudents: (studentOption: MultiValue<SelectOption>) => {
    const students = studentOption.map((option) => option.label)

    get().setSelectedStudents(students)
    useFormErrorStore.getState().setPercentError('')
  },
  loadStudentsList: () => {
    set({ studentsList: students() })
  },
  reset: () => set({ studentsList: [], selectedStudents: [] }),
}))

export default useStudentsStore
