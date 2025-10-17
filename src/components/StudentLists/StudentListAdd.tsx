import { Button, Card, Form, Modal } from 'react-bootstrap'
import type { Student, StudentList } from '../../types'
import useGradeBook from '../../hooks/useGradeBook.ts'
import Select, { type MultiValue } from 'react-select'
import { type FormEvent, useState } from 'react'
import makeAnimated from 'react-select/animated'

function StudentListAdd({
  props: {
    studentsList,
    selectedStudents,
    handleSelectedStudent,
    studentLists,
    setStudentLists,
    activeStudentList,
    setActiveStudentList,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
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
    showModalStudentListAdd: boolean
    setShowModalStudentListAdd: (status: boolean) => void
  }
}) {
  const animatedComponents = makeAnimated()
  const { className } = useGradeBook()
  const [error, setError] = useState<string>('')

  const handleClose = () => {
    setActiveStudentList('')
    setShowModalStudentListAdd(false)
  }

  const savedStudents =
    studentLists.find((list) => list.name === activeStudentList && list.className === className)
      ?.students || []

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      studentLists.find((list) => list.name === activeStudentList && list.className === className)
    ) {
      setError('Список з такою назвою вже існує')
      return
    }

    console.info(activeStudentList)
    console.info(studentLists)
    console.info(selectedStudents)

    /*const updatedLists = studentLists.filter(
      (list: StudentList) => !(list.name === activeStudentList && list.className === className)
    )*/

    const updatedLists = [
      ...studentLists,
      {
        className,
        name: activeStudentList,
        students: selectedStudents || [],
      },
    ]

    await chrome.storage.local.set({
      humanAutomator: { updatedLists },
    })

    /*studentLists.push({
      className,
      name: activeStudentList,
      students: selectedStudents || [],
    })

    await chrome.storage.local.set({
      humanAutomator: {
        studentLists,
      },
    })*/

    setStudentLists(updatedLists)
    setShowModalStudentListAdd(false)

    /*await chrome.storage.local.set({
      studentLists: [{ className: '11', name, students: selectedStudents || [] }],
    })*/

    //await chrome.storage.local.get('studentLists').then((res) => console.info(res.studentLists))

    // Handle form submission logic here
    // handleClose()
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
              <Form.Control
                type="input"
                value={activeStudentList}
                isInvalid={!!error}
                placeholder="Введіть назву списку"
                onChange={(e) => {
                  setActiveStudentList(e.target.value)
                  setError('')
                }}
                required
              />
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
                defaultValue={savedStudents}
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

export default StudentListAdd
