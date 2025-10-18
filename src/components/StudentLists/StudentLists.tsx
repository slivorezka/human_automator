import { Table, Button, Modal, Card } from 'react-bootstrap'
import { Pencil, Trash2, X, Plus } from 'lucide-react'
import useGradeBook from '../../hooks/useGradeBook'
import useStudentLists from '../../hooks/useStudentLists'
import StudentListRemove from './StudentListRemove'
import StudentListEdit from './StudentListEdit'
import type { Student, StudentList, ToastType } from '../../types'
import type { MultiValue } from 'react-select'
import StudentListAdd from './StudentListAdd'
import { useState } from 'react'
import Message from '../Message'

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

  const handleClose = () => setShowModalStudentLists(false)

  const handleAdd = () => {
    setActiveStudentList('')
    setShowModalStudentListAdd(true)
  }

  const handleEdit = (studentList: StudentList) => {
    setActiveStudentList(studentList.id)
    setShowModalStudentListEdit(true)
  }

  const handleRemove = (studentList: StudentList) => {
    setActiveStudentList(studentList.id)
    setShowModalStudentListRemove(true)
  }

  const [isToast, setToast] = useState<ToastType>('')

  if (showModalStudentListAdd) {
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
          setToast,
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
          setToast,
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
          setToast,
        }}
      />
    )
  }

  return (
    <>
      (isToast && (
      <>
        {isToast == 'studentListAdd' && (
          <Message show type="success" onClose={() => setToast('')}>
            Список учнів успішно додано!
          </Message>
        )}
        {isToast == 'studentListSave' && (
          <Message show type="success" onClose={() => setToast('')}>
            Список учнів успішно збережено!
          </Message>
        )}
        {isToast == 'studentListDelete' && (
          <Message show type="success" onClose={() => setToast('')}>
            Список учнів успішно видалено!
          </Message>
        )}
      </>
      )
      <Modal show={showModalStudentLists} onHide={handleClose} centered animation>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Списки учнів {className}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {studentLists.length > 0 ? (
            <Table className="mb-0" responsive bordered hover>
              <thead className="text-center">
                <tr>
                  <th>Назва</th>
                  <th>Кількість учнів</th>
                  <th>Дія</th>
                </tr>
              </thead>
              <tbody>
                {studentLists
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((studentList) => (
                    <tr>
                      <td className="fw-bold">{studentList.name}</td>
                      <td className="text-center fw-bold">{studentList.students.length}</td>
                      <td className="align-middle">
                        <div className="d-flex justify-content-center gap-3">
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
          ) : (
            <Card>
              <Card.Body>
                <p>
                  Жодного <span className="fw-bold">списку учнів</span> ще не створено
                </p>
                <p>
                  Натисніть <span className="fw-bold">Додати</span>, щоб створити новий{' '}
                  <span className="fw-bold">список учнів</span>
                </p>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="danger" onClick={handleClose}>
            <X width={16} height={16} />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            <Plus width={16} height={16} />
            <span className="align-middle ms-1">Додати</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default StudentLists
