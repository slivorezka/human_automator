import { Button, Card, Form, InputGroup, Modal } from 'react-bootstrap'
import type { Student, StudentList, ToastType } from '../../types'
import useGradeBook from '../../hooks/useGradeBook'
import Select, { type MultiValue } from 'react-select'
import { type FormEvent, useState } from 'react'
import makeAnimated from 'react-select/animated'
import { Check, X } from 'lucide-react'

function StudentListAdd({
  props: {
    studentsList,
    selectedStudents,
    setSelectedStudents,
    handleSelectedStudent,
    studentLists,
    setStudentLists,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
    setToast,
  },
}: {
  props: {
    studentsList: Student[]
    selectedStudents: Student[] | undefined
    setSelectedStudents: (students: Student[]) => void
    handleSelectedStudent: (selectedOption: MultiValue<unknown>) => void
    studentLists: StudentList[]
    setStudentLists: (studentLists: StudentList[]) => void
    showModalStudentListAdd: boolean
    setShowModalStudentListAdd: (status: boolean) => void
    setToast: (toast: ToastType) => void
  }
}) {
  const animatedComponents = makeAnimated()
  const { className } = useGradeBook()

  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleClose = () => {
    setSelectedStudents([])
    setShowModalStudentListAdd(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (studentLists.find((list) => list.name === name)) {
      setError('Список з такою назвою вже існує')
      return
    }

    const updatedLists = [
      ...studentLists,
      {
        name,
        className,
        id: crypto.randomUUID(),
        students: selectedStudents || [],
      },
    ]

    await chrome.storage.local.set({
      humanAutomator: { studentLists: updatedLists },
    })

    setStudentLists(updatedLists)
    setToast('studentListAdd')

    handleClose()
  }

  return (
    <Modal show={showModalStudentListAdd} onHide={handleClose} animation centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Створювання нового списку учнів {className}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Label className="fw-bold">Назву списку</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  type="input"
                  value={name}
                  isInvalid={!!error}
                  placeholder="Введіть назву списку"
                  onChange={(e) => {
                    setName(e.target.value)
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
                defaultValue={selectedStudents}
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
            <X width={16} height={16} />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
          <Button variant="danger" type="submit">
            <Check width={16} height={16} />
            <span className="align-middle ms-1">Зберегти</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StudentListAdd
