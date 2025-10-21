import { Check, X } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { Button, Card, Form, InputGroup, Modal } from 'react-bootstrap'
import Select, { type MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import useFormErrorStore from '@/stores/useFormErrorStore'
import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import useStudentsStore from '@/stores/useStudentsStore'
import useToastStore from '@/stores/useToastStore'
import type { SelectOption } from '@/types'
import { className } from '@/utils/gradebook'
import { getSelectOption } from '@/utils/helper'

function StudentListAdd() {
  const animatedComponents = makeAnimated()
  const { setShowModalStudentLists, showModalStudentListAdd, setShowModalStudentListAdd } =
    useModalStoreStore()
  const { setStudentListId, addStudentList, setSelectedStudentLists } = useStudentListsStore()
  const { studentsList, selectedStudents, handleSelectedStudents } = useStudentsStore()
  const { nameError, setNameError } = useFormErrorStore()
  const { setToast } = useToastStore()
  const [name, setName] = useState<string>('')
  const nameClass = className()

  const handleClose = () => {
    setStudentListId('')
    setShowModalStudentListAdd(false)
    setShowModalStudentLists(true)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const success = await addStudentList(name, selectedStudents)

    if (!success) {
      setNameError('Список з такою назвою вже існує')
      return
    }

    setSelectedStudentLists([])
    setToast('studentListAdd')
    handleClose()
  }

  return (
    <Modal show={showModalStudentListAdd} onHide={handleClose} centered animation>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title as="h5">Створювання нового списку учнів {nameClass}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Label className="fw-bold">Назву списку</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  type="input"
                  value={name}
                  isInvalid={!!nameError}
                  placeholder="Введіть назву списку"
                  onChange={(e) => {
                    setName(e.target.value.trim())
                    setNameError('')
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
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
                options={getSelectOption(studentsList)}
                onChange={(options) => handleSelectedStudents(options as MultiValue<SelectOption>)}
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
            <X width="16" height="16" />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
          <Button variant="primary" type="submit">
            <Check width="16" height="16" />
            <span className="align-middle ms-1">Зберегти</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StudentListAdd
