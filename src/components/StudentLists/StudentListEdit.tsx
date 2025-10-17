import { Button, Card, Form, Modal, InputGroup } from 'react-bootstrap'
import type { Student, StudentList } from '../../types'
import useGradeBook from '../../hooks/useGradeBook.ts'
import Select, { type MultiValue } from 'react-select'
import { type FormEvent, useState } from 'react'
import makeAnimated from 'react-select/animated'

function StudentListEdit({
  props: {
    studentsList,
    selectedStudents,
    handleSelectedStudent,
    studentLists,
    setStudentLists,
    activeStudentList,
    setActiveStudentList,
    showModalStudentListEdit,
    setShowModalStudentListEdit,
  },
}: {
  props: {
    studentsList: Student[]
    selectedStudents: Student[] | undefined
    handleSelectedStudent: (selectedOption: MultiValue<unknown>) => void
    studentLists: StudentList[]
    setStudentLists: (studentList: StudentList[]) => void
    activeStudentList: string
    setActiveStudentList: (name: string) => void
    showModalStudentListEdit: boolean
    setShowModalStudentListEdit: (status: boolean) => void
  }
}) {
  const animatedComponents = makeAnimated()
  const { className } = useGradeBook()
  const [error, setError] = useState<string>('')
  const [newStudentListName, setNewStudentListName] = useState<string>(activeStudentList)

  const handleClose = () => {
    setActiveStudentList('')
    setShowModalStudentListEdit(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const studentList = studentLists.find((list) => list.name === activeStudentList)

    if (!studentList) return

    if (studentList.name === newStudentListName) {
      setError('Список з такою назвою вже існує')
      return
    }

    const studentListsAll = studentLists.filter(
      (list: StudentList) => !(list.name === activeStudentList)
    )

    let updatedStudentLists: StudentList[]

    if (studentListsAll) {
      updatedStudentLists = [
        ...studentListsAll,
        {
          ...studentList,
          students: selectedStudents ?? [],
          name: newStudentListName,
        },
      ]
    } else {
      updatedStudentLists = [
        {
          ...studentList,
          students: selectedStudents ?? [],
          name: newStudentListName,
        },
      ]
    }

    await chrome.storage.local.set({
      humanAutomator: {
        studentLists: updatedStudentLists,
      },
    })

    setActiveStudentList('')
    setStudentLists(updatedStudentLists)
    setShowModalStudentListEdit(false)
  }

  const selectedStudentsOfClass =
    studentLists.find((list) => list.name === activeStudentList)?.students || []

  return (
    <Modal show={showModalStudentListEdit} onHide={handleClose} animation centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Редагування списку {className}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Label className="fw-bold">Назву списку</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  type="input"
                  value={newStudentListName}
                  isInvalid={!!error}
                  placeholder="Введіть назву списку"
                  onChange={(e) => {
                    setNewStudentListName(e.target.value)
                    setError('')
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
              </InputGroup>
              <Form.Text>
                <span className="fw-bold">Оберіть назву</span> для цього списку, наприклад,
                <span className="fw-bold"> Відмінники</span>
              </Form.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
              <Select
                className="mb-2"
                placeholder="Оберіть учнів"
                defaultValue={selectedStudentsOfClass}
                options={studentsList}
                onChange={(options) => handleSelectedStudent(options)}
                isMulti
                required
                closeMenuOnSelect={false}
                components={animatedComponents}
              />
              <Form.Text>
                <span className="fw-bold">Оберіть учнів</span> для цього списку
              </Form.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="primary" onClick={handleClose}>
            Закрити
          </Button>
          <Button variant="danger" type="submit">
            Зберегти
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StudentListEdit
