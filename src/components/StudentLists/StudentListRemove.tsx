import { Button, Modal } from 'react-bootstrap'
import type { StudentList } from '../../types'
import useGradeBook from '../../hooks/useGradeBook.ts'

function StudentListRemove({
  props: {
    studentLists,
    setStudentLists,
    activeStudentList,
    setActiveStudentList,
    showModalStudentListRemove,
    setShowModalStudentListRemove,
  },
}: {
  props: {
    studentLists: StudentList[]
    setStudentLists: (studentList: StudentList[]) => void
    activeStudentList: string
    setActiveStudentList: (name: string) => void
    showModalStudentListRemove: boolean
    setShowModalStudentListRemove: (status: boolean) => void
  }
}) {
  const { className } = useGradeBook()

  const handleClose = () => {
    setActiveStudentList('')
    setShowModalStudentListRemove(false)
  }

  const handleConfirm = async () => {
    const updatedLists = studentLists.filter(
      (list: StudentList) => !(list.name === activeStudentList && list.className === className)
    )

    await chrome.storage.local.set({
      humanAutomator: {
        studentLists: updatedLists,
      },
    })

    setStudentLists(updatedLists)
    setShowModalStudentListRemove(false)
  }

  return (
    <Modal show={showModalStudentListRemove} onHide={handleClose} animation top>
      <Modal.Header className="justify-content-center" closeButton>
        <Modal.Title as="h5">Видалити {activeStudentList}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ви впевнені, що хочете видалити список <span className="fw-bold">{activeStudentList}</span>?
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="primary" onClick={handleClose}>
          Закрити
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Видалити
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentListRemove
