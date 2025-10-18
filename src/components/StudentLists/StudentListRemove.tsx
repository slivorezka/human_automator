import { Button, Modal } from 'react-bootstrap'
import type { StudentList, ToastType } from '../../types'
import { X, Trash2 } from 'lucide-react'

function StudentListRemove({
  props: {
    studentLists,
    setStudentLists,
    activeStudentList,
    setActiveStudentList,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
    setToast,
  },
}: {
  props: {
    studentLists: StudentList[]
    setStudentLists: (studentLists: StudentList[]) => void
    activeStudentList: string
    setActiveStudentList: (value: string) => void
    showModalStudentListRemove: boolean
    setShowModalStudentListRemove: (status: boolean) => void
    setToast: (toast: ToastType) => void
  }
}) {
  const handleClose = () => {
    setActiveStudentList('')
    setShowModalStudentListRemove(false)
  }

  const studentList = studentLists.find((list: StudentList) => !(list.id === activeStudentList))

  const handleConfirm = async () => {
    const updatedLists = studentLists.filter(
      (list: StudentList) => !(list.id === activeStudentList)
    )

    await chrome.storage.local.set({
      humanAutomator: {
        studentLists: updatedLists,
      },
    })

    setStudentLists(updatedLists)
    setShowModalStudentListRemove(false)
    setToast('studentListDelete')
  }

  return (
    <Modal show={showModalStudentListRemove} onHide={handleClose} animation centered>
      <Modal.Header className="justify-content-center" closeButton>
        <Modal.Title as="h5">Видалити {studentList?.name}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ви впевнені, що хочете видалити список <span className="fw-bold">{studentList?.name}</span>?
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
