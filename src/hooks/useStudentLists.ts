import { useEffect, useState } from 'react'
import type { StudentList, StudentListOption } from '../types'

function useStudentLists() {
  const [studentLists, setStudentLists] = useState<StudentList[]>([])
  const [selectedStudentList, setSelectedStudentList] = useState<StudentListOption[] | undefined>(
    undefined
  )
  const [showModalStudentLists, setShowModalStudentLists] = useState<boolean>(true)
  const [showModalStudentListAdd, setShowModalStudentListAdd] = useState<boolean>(false)
  const [showModalStudentListEdit, setShowModalStudentListEdit] = useState<boolean>(false)
  const [showModalStudentListRemove, setShowModalStudentListRemove] = useState<boolean>(false)
  const [activeStudentList, setActiveStudentList] = useState<string>('')

  useEffect(() => {
    const getStorage = async () => {
      const result = await chrome.storage.local.get('humanAutomator')
      setStudentLists(result.humanAutomator?.studentLists || [])
    }
    getStorage()
  }, [])

  return {
    studentLists,
    setStudentLists,
    selectedStudentList,
    setSelectedStudentList,
    showModalStudentLists,
    setShowModalStudentLists,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
    showModalStudentListEdit,
    setShowModalStudentListEdit,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
    activeStudentList,
    setActiveStudentList,
  }
}

export default useStudentLists
