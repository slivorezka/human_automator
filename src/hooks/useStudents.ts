import { useEffect, useMemo, useState } from 'react'

import type { Student, StudentList, StudentListType } from '../types'

export const useStudents = (): {
  studentListType: StudentListType
  setStudentListType: (action: StudentListType) => void
  isStudentTypeList: boolean
  isStudentTypeCustom: boolean
  isStudentTypeAll: boolean
  selectedStudents: Student[] | undefined
  setSelectedStudents: (students: Student[]) => void
  studentLists: StudentList[]
  setStudentLists: (studentLists: StudentList[]) => void
} => {
  const [studentListType, setStudentListType] = useState<StudentListType>('all')
  const [selectedStudents, setSelectedStudents] = useState<Student[] | undefined>(undefined)
  const [studentLists, setStudentLists] = useState<StudentList[]>([])

  const isStudentTypeList = useMemo(() => studentListType === 'list', [studentListType])
  const isStudentTypeCustom = useMemo(() => studentListType === 'custom', [studentListType])
  const isStudentTypeAll = useMemo(() => studentListType === 'all', [studentListType])

  useEffect(() => {
    if (isStudentTypeAll) {
      setSelectedStudents(undefined)
    }
  }, [isStudentTypeAll])

  return {
    studentListType,
    setStudentListType,
    isStudentTypeList,
    isStudentTypeCustom,
    isStudentTypeAll,
    selectedStudents,
    setSelectedStudents,
    studentLists,
    setStudentLists,
  }
}

export default useStudents
