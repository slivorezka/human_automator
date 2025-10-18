import { Button, Card, Form, Modal, InputGroup } from 'react-bootstrap'
import type { Student, StudentList } from '../../types'
import Select, { type MultiValue } from 'react-select'
import { type FormEvent, useState } from 'react'
import makeAnimated from 'react-select/animated'
import { X, Check } from 'lucide-react'

function StudentListEdit({
  props: {
    studentsList,
    selectedStudents,
    handleSelectedStudent,
    studentLists,
    //setStudentLists,
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
  const studentList = studentLists.find((list) => list.id === activeStudentList)

  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>(studentList?.name || '')

  const handleClose = () => {
    setActiveStudentList('')
    setShowModalStudentListEdit(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      studentLists.find((list) => list.name === activeStudentList && list.id !== activeStudentList)
    ) {
      setError('Список з такою назвою вже існує')
      return
    }

    const updatedLists = [
      ...(studentLists.filter((list: StudentList) => !(list.id === activeStudentList)) || {}),
      {
        name,
        students: selectedStudents || [],
      },
    ]

    /*await chrome.storage.local.set({
      humanAutomator: { updatedLists },
    })*/

    /*console.info(activeStudentList)
    console.info(selectedStudents)
    console.info(studentLists)*/
    console.info(updatedLists)

    /*setActiveStudentList('')
    setStudentLists(updatedLists)
    setShowModalStudentListEdit(false)*/
  }

  return (
    <Modal show={showModalStudentListEdit} onHide={handleClose} animation centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Редагування списку {name}</Modal.Title>
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
                defaultValue={selectedStudents || []}
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
          <Button variant="danger" onClick={handleClose}>
            <X width={16} height={16} />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
          <Button variant="primary" type="submit">
            <Check width={16} height={16} />
            <span className="align-middle ms-1">Зберегти</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StudentListEdit
