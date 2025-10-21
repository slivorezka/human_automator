import { Trash2, X } from 'lucide-react'
import { Button, Modal } from 'react-bootstrap'

import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import useToastStore from '@/stores/useToastStore'

function StudentListDelete() {
  const { setShowModalStudentLists, showModalStudentListDelete, setShowModalStudentListDelete } =
    useModalStoreStore()
  const {
    studentListId,
    getStudentListById,
    setStudentListId,
    removeStudentList,
    setSelectedStudentLists,
  } = useStudentListsStore()
  const { setToast } = useToastStore()
  const studentList = getStudentListById(studentListId)

  if (!studentList) {
    throw new Error('Student list not found')
  }

  const handleClose = () => {
    setStudentListId('')
    setShowModalStudentListDelete(false)
    setShowModalStudentLists(true)
  }

  const handleConfirm = async () => {
    await removeStudentList(studentListId)
    setSelectedStudentLists([])
    setToast('studentListDelete')
    handleClose()
  }

  return (
    <Modal show={showModalStudentListDelete} onHide={handleClose} centered animation>
      <Modal.Header className="justify-content-center" closeButton>
        <Modal.Title as="h5">Видалити {studentList.name}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ви впевнені, що хочете видалити список <span className="fw-bold">{studentList.name}</span>?
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="danger" onClick={handleClose}>
          <X width="16" height="16" />
          <span className="align-middle ms-1">Закрити</span>
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          <Trash2 width="16" height="16" />
          <span className="align-middle ms-1">Видалити</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentListDelete
