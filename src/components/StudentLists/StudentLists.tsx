import { Table, Button, Modal } from 'react-bootstrap'
import { Pencil, Trash2, X } from 'lucide-react'
import useGradeBook from '../../hooks/useGradeBook'
import useStudentLists from '../../hooks/useStudentLists'
import StudentListRemove from './StudentListRemove'
import StudentListEdit from './StudentListEdit'
import type { Student, StudentList } from '../../types'
import type { MultiValue } from 'react-select'
import StudentListAdd from './StudentListAdd'
import { useEffect } from 'react'

function StudentLists({
  props: {
    activeStudentList,
    setActiveStudentList,
    showModalStudentLists,
    setShowModalStudentLists,
    studentsList,
    selectedStudents,
    setSelectedStudents,
    handleSelectedStudent,
  },
}: {
  props: {
    activeStudentList: string
    setActiveStudentList: (value: string) => void
    showModalStudentLists: boolean
    setShowModalStudentLists: (status: boolean) => void
    selectedStudents: Student[] | undefined
    setSelectedStudents: (students: Student[]) => void
    studentsList: Student[]
    handleSelectedStudent: (selectedOption: MultiValue<unknown>) => void
  }
}) {
  const { className } = useGradeBook()
  const {
    studentLists,
    setStudentLists,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
    showModalStudentListEdit,
    setShowModalStudentListEdit,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
  } = useStudentLists()

  const handleModalStudentListClose = () => setShowModalStudentLists(false)

  const handleRemove = (studentList: StudentList) => {
    setActiveStudentList(studentList.id)
    setShowModalStudentListRemove(true)
  }

  const handleEdit = (studentList: StudentList) => {
    setActiveStudentList(studentList.id)
    setShowModalStudentListEdit(true)
  }

  useEffect(() => {
    if (studentLists.length === 0) {
      setActiveStudentList('')
      setShowModalStudentListAdd(true)
    }
  }, [setActiveStudentList, setShowModalStudentListAdd, studentLists])

  if (studentLists.length === 0) {
    return (
      <StudentListAdd
        props={{
          studentsList,
          selectedStudents,
          setSelectedStudents,
          handleSelectedStudent,
          studentLists,
          setStudentLists,
          showModalStudentListAdd,
          setShowModalStudentListAdd,
        }}
      />
    )
  }

  console.info(activeStudentList)

  if (showModalStudentListEdit) {
    return (
      <StudentListEdit
        props={{
          studentsList,
          selectedStudents,
          handleSelectedStudent,
          studentLists,
          setStudentLists,
          activeStudentList,
          setActiveStudentList,
          showModalStudentListEdit,
          setShowModalStudentListEdit,
        }}
      />
    )
  }

  if (showModalStudentListRemove) {
    return (
      <StudentListRemove
        props={{
          studentLists,
          setStudentLists,
          activeStudentList,
          setActiveStudentList,
          showModalStudentListRemove,
          setShowModalStudentListRemove,
        }}
      />
    )
  }

  return (
    <Modal show={showModalStudentLists} onHide={handleModalStudentListClose} centered animation>
      <Modal.Header className="justify-content-center" closeButton>
        <Modal.Title as="h5">Списки учнів {className}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {studentLists && (
          <Table className="mb-0" responsive bordered hover>
            <thead className="text-center">
              <tr>
                <th>Назва</th>
                <th>Кількість учнів</th>
                <th>Дія</th>
              </tr>
            </thead>
            <tbody>
              {studentLists.map((studentList) => (
                <tr>
                  <td className="fw-bold">{studentList.name}</td>
                  <td className="text-center fw-bold">{studentList.students.length}</td>
                  <td className="align-middle">
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        className="pt-0"
                        size="sm"
                        variant="outline-primary"
                        onClick={() => handleEdit(studentList)}
                      >
                        <Pencil size={12} />
                      </Button>
                      <Button
                        className="pt-0"
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleRemove(studentList)}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-end">
        <Button variant="danger" onClick={handleModalStudentListClose}>
          <X width={16} height={16} />
          <span className="align-middle ms-1">Закрити</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentLists
