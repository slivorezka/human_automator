import { Trash2, X } from 'lucide-react'
import { Button, Modal } from 'react-bootstrap'

import { useStudentListsStore } from '../../stores/useStudentListsStore'
import useToastStore from '../../stores/useToastStore'

function StudentListRemove() {
  const {
    studentListId,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
    getStudentListById,
    setStudentListId,
    removeStudentList,
  } = useStudentListsStore()

  const { setToast } = useToastStore()

  const studentList = getStudentListById(studentListId)

  if (!studentList) {
    throw new Error('Student list not found')
  }

  const handleClose = () => {
    setStudentListId('')
    setShowModalStudentListRemove(false)
  }

  const handleConfirm = async () => {
    await removeStudentList(studentListId)
    setToast('StudentListDelete')
    handleClose()
  }

  return (
    <Modal show={showModalStudentListRemove} onHide={handleClose} animation centered>
      <Modal.Header className="justify-content-center" closeButton>
        <Modal.Title as="h5">Видалити {studentList.name}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ви впевнені, що хочете видалити список <span className="fw-bold">{studentList.name}</span>?
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="danger" onClick={handleClose}>
          <X width={16} height={16} />
          <span className="align-middle ms-1">Закрити</span>
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          <Trash2 width={16} height={16} />
          <span className="align-middle ms-1">Видалити</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentListRemove
