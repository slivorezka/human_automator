import { Pencil, Plus, Trash2, X } from 'lucide-react'
import { Button, Card, Modal, Table } from 'react-bootstrap'

import useStudentListsStore from '../../stores/useStudentListsStore'
import useToastStore from '../../stores/useToastStore'
import type { StudentList } from '../../types'
import { className } from '../../utils/gradebook'
import Message from '../Message'
import StudentListAdd from './StudentListAdd'
import StudentListEdit from './StudentListEdit'
import StudentListRemove from './StudentListRemove'

function StudentLists() {
  const {
    studentLists,
    showModalStudentLists,
    showModalStudentListAdd,
    showModalStudentListEdit,
    showModalStudentListRemove,
    setShowModalStudentLists,
    setShowModalStudentListAdd,
    setShowModalStudentListEdit,
    setShowModalStudentListRemove,
    setStudentListId,
  } = useStudentListsStore()

  const handleClose = () => setShowModalStudentLists(false)

  const handleAdd = () => {
    setStudentListId('')
    setShowModalStudentListAdd(true)
  }

  const handleEdit = (studentList: StudentList) => {
    setStudentListId(studentList.id)
    setShowModalStudentListEdit(true)
  }

  const handleRemove = (studentList: StudentList) => {
    setStudentListId(studentList.id)
    setShowModalStudentListRemove(true)
  }

  const { toast, setToast } = useToastStore()

  if (showModalStudentListAdd) {
    return <StudentListAdd />
  }

  if (showModalStudentListEdit) {
    return <StudentListEdit />
  }

  if (showModalStudentListRemove) {
    return <StudentListRemove />
  }

  return (
    <>
      (toast && (
      <>
        {toast === 'StudentListAdd' && (
          <Message type="success" onClose={() => setToast(false)}>
            Список учнів успішно додано!
          </Message>
        )}
        {toast === 'StudentListSave' && (
          <Message type="success" onClose={() => setToast(false)}>
            Список учнів успішно збережено!
          </Message>
        )}
        {toast === 'StudentListDelete' && (
          <Message type="success" onClose={() => setToast(false)}>
            Список учнів успішно видалено!
          </Message>
        )}
      </>
      )
      <Modal show={showModalStudentLists} onHide={handleClose} centered animation>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Списки учнів {className()}</Modal.Title>
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
                {studentLists.map((studentList) => (
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
