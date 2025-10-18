import { Table, Button, Card, Modal } from 'react-bootstrap'
import { Pencil, Trash } from 'lucide-react'
import useGradeBook from '../../hooks/useGradeBook'
import useStudentLists from '../../hooks/useStudentLists'
import StudentListRemove from './StudentListRemove'
import StudentListEdit from './StudentListEdit'
import type { Student } from '../../types'
import type { MultiValue } from 'react-select'
import StudentListAdd from './StudentListAdd'
import { useEffect } from 'react'

function StudentLists({
  studentsList,
  selectedStudents,
  setSelectedStudents,
  handleSelectedStudent,
}: {
  selectedStudents: Student[] | undefined
  setSelectedStudents: (students: Student[]) => void
  studentsList: Student[]
  handleSelectedStudent: (selectedOption: MultiValue<unknown>) => void
}) {
  const { className } = useGradeBook()
  const {
    studentLists,
    setStudentLists,
    activeStudentList,
    showModalStudentList,
    setActiveStudentList,
    setShowModalStudentList,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
    showModalStudentListEdit,
    setShowModalStudentListEdit,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
  } = useStudentLists()

  const handleModalStudentListClose = () => setShowModalStudentList(false)

  const handleRemove = (id: string) => {
    setActiveStudentList(id)
    setShowModalStudentListRemove(true)
  }

  const handleEdit = (id: string) => {
    setActiveStudentList(id)
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

  return (
    <>
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
      <Modal show={showModalStudentList} onHide={handleModalStudentListClose} centered>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Списки учнів {className}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {studentLists ? (
            <Table responsive striped bordered hover>
              <thead className="text-center">
                <tr>
                  <th>Назва</th>
                  <th>Кількість учнів</th>
                  <th>Дія</th>
                </tr>
              </thead>
              {studentLists.map((studentList) => (
                <tr>
                  <td className="fw-bold">{studentList.name}</td>
                  <td className="text-center fw-bold">{studentList.students.length}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        className="pt-0"
                        size="sm"
                        variant="outline-primary"
                        onClick={() => handleEdit(studentList.id)}
                      >
                        <Pencil size={12} />
                      </Button>
                      <Button
                        className="pt-0"
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleRemove(studentList.id)}
                      >
                        <Trash size={12} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </Table>
          ) : (
            <Card>
              <Card.Body>
                <p>Списки учнів відсутні</p>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          <Button variant="primary" onClick={handleModalStudentListClose}>
            Закрити
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default StudentLists
