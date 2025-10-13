import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { Atom } from 'lucide-react'
import Form from 'react-bootstrap/Form'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

interface Student {
  value: string
  label: string
}

const animatedComponents = makeAnimated()

const getStudentsList = (): Student[] => {
  const students: Student[] = []

  const items = [
    ...document.querySelectorAll(
      '.gradebook-container__table2-outlet .gradebook-container__table2-row'
    ),
  ]

  for (const row of items) {
    const name = (row.querySelector('.bem-user__name') as HTMLElement).innerText.trim()

    students.push({
      value: name,
      label: name,
    })
  }

  return students
}

function App() {
  const handleClose = () => window.location.reload()

  const [action, setAction] = useState<string>('')
  const [showSetRating, setSetRating] = useState<boolean>(false)
  const [showDeleteRating, setDeleteRating] = useState<boolean>(false)
  const [showShowRatingCount, setShowRatingCount] = useState<boolean>(false)

  useEffect(() => {
    switch (action) {
      case 'set_rating':
        setSetRating(true)
        setDeleteRating(false)
        setShowRatingCount(false)

        break

      case 'delete_rating':
        setSetRating(false)
        setDeleteRating(true)
        setShowRatingCount(false)
        break

      case 'show_rating_count':
        setSetRating(false)
        setDeleteRating(false)
        setShowRatingCount(true)
        break
    }
  }, [action])

  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title as="h5">
            <div className="">
              <Atom size={24} />
              <span>Human Automator</span>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="human_automator_actions">
              <Card>
                <Card.Body>
                  <Form.Label className="fw-bold">Дія</Form.Label>
                  <Form.Check
                    type="radio"
                    value="set_rating"
                    label="Проставити учням оцінки"
                    onClick={() => setAction('set_rating')}
                  />
                  <Form.Check
                    type="radio"
                    value="delete_rating"
                    label="Видалити учням оцінки"
                    onClick={() => setAction('delete_rating')}
                  />
                  <Form.Check
                    type="radio"
                    value="show_rating_count"
                    label="Показати яких і скільки оцінок"
                    onClick={() => setAction('show_rating_count')}
                  />
                </Card.Body>
              </Card>

              {showSetRating && (
                <>
                  <Card className="mt-3">
                    <Card.Body>
                      <div className="fw-lighter">
                        <p>
                          <b>Проставити обраним учням оцінки</b> — Дозволяє заповнити <b>НЕ</b>{' '}
                          виставлені оцінки на цій сторінці для обраних учнів.
                        </p>
                        <p>
                          Можна обрати, які оцінки ставити (від мінімальної до максимальної), також
                          можна обрати бажаний відсоток заповнення від загальної кількості оцінок.
                        </p>
                        <p>
                          Оцінки будь виставлені у <b>випадковому</b> порядку.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Body>
                      <Form.Group controlId="human_automator_students">
                        <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
                        <Select
                          placeholder="Оберіть учнів"
                          options={getStudentsList()}
                          isMulti
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </>
              )}

              {showDeleteRating && (
                <div className="fw-lighter">
                  <p>
                    <b>Видалити учням оцінки</b> — Дозволяє видалити виставлені оцінки на цій
                    сторінці для обраних учнів.
                  </p>
                  <p>
                    Можна обрати, які саме оцінки треба видалити, наприклад тільки <b>6</b>
                  </p>
                </div>
              )}

              {showShowRatingCount && (
                <div className="fw-lighter">
                  <p>
                    <b>Показати яких і скільки оцінок</b> — Дозволяє показати яких і скільки оцінок
                    у класі.
                  </p>
                  <p>
                    Треба перейти на сторінку <b>І</b> або <b>ІІ</b> семестру:
                  </p>
                  <hr />
                  <ul>
                    <li>
                      <b>Простори</b>
                    </li>
                    <li>
                      <b>Підсумкове [обрати потрібний клас]</b>
                    </li>
                    <li>
                      <b>І / ІІ семестр</b>
                    </li>
                  </ul>
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="justify-content-between">
          <Button variant="danger" onClick={handleClose}>
            Закрити
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Почати
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
