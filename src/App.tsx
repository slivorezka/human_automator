import { useEffect, useState, useRef, type FormEvent } from 'react'
import {
  Toast,
  ToastContainer,
  Button,
  Card,
  Modal,
  Accordion,
  InputGroup,
  ProgressBar,
  Form,
} from 'react-bootstrap'
import { Atom } from 'lucide-react'
import Select from 'react-select'
import type { MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import { RotatingLines } from 'react-loader-spinner'

interface Student {
  value: string
  label: string
}

const animatedComponents = makeAnimated()

const beep = () => {
  const audioCtx = new window.AudioContext()
  const oscillator = audioCtx.createOscillator()

  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(600, audioCtx.currentTime)
  oscillator.connect(audioCtx.destination)
  oscillator.start()
  oscillator.stop(audioCtx.currentTime + 0.2)
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

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

const getFillInPercent = (students?: Student[]): number => {
  const filedCells = []
  const emptyCells = []

  if (students && students.length > 0) {
    const items = [
      ...document.querySelectorAll(
        '.gradebook-container__table2-outlet .gradebook-container__table2-row'
      ),
    ]

    for (const item of items) {
      if (
        students.find(
          (student) =>
            student.value ===
            (item.querySelector('.bem-user__name') as HTMLElement).innerText.trim()
        )
      ) {
        for (const cell of [...item.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
          if (
            cell.querySelector('.gradebook__ng-universal-rating-comments') &&
            !cell.querySelector('.pseudo-button--color-red') &&
            (cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
          ) {
            filedCells.push(cell)
          }

          if (
            cell.querySelector('.gradebook__ng-universal-rating-comments') &&
            !cell.querySelector('.pseudo-button--color-red') &&
            !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
          ) {
            emptyCells.push(cell)
          }
        }
      }
    }
  } else {
    const items = [
      ...document.querySelectorAll(
        '.gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell'
      ),
    ]

    for (const item of items) {
      if (
        item.querySelector('.gradebook__ng-universal-rating-comments') &&
        !item.querySelector('.pseudo-button--color-red') &&
        item.querySelector('.badge__item--no-border')
      ) {
        filedCells.push(item)
      }

      if (
        item.querySelector('.gradebook__ng-universal-rating-comments') &&
        !item.querySelector('.pseudo-button--color-red') &&
        !(item.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
      ) {
        emptyCells.push(item)
      }
    }
  }

  return Math.round((filedCells.length / (filedCells.length + emptyCells.length)) * 100)
}

function App() {
  const [action, setAction] = useState<string>('')
  const [isSetRating, setRating] = useState<boolean>(false)
  const [showDeleteRating, setDeleteRating] = useState<boolean>(false)
  const [showShowRatingCount, setShowRatingCount] = useState<boolean>(false)
  const [selectedStudents, setSelectedStudents] = useState<Student[] | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [minRating, setMinRating] = useState<number>(0)
  const [maxRating, setMaxRating] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const [percentError, setPercentError] = useState<string>('')
  const [maxPercent, setMaxPercent] = useState<number>(0)
  const [currentPercent, setCurrentPercent] = useState<number>(0)
  const isProcessingHasStopped = useRef<boolean>(false)
  const [isToast, setToast] = useState<'' | 'stop' | 'done'>('')

  useEffect(() => {
    setCurrentPercent(getFillInPercent())
  }, [])

  useEffect(() => {
    switch (action) {
      case 'set_rating':
        setRating(true)
        setDeleteRating(false)
        setShowRatingCount(false)

        break

      case 'delete_rating':
        setRating(false)
        setDeleteRating(true)
        setShowRatingCount(false)
        break

      case 'show_rating_count':
        setRating(false)
        setDeleteRating(false)
        setShowRatingCount(true)
        break
    }
  }, [action])

  useEffect(() => {
    isProcessingHasStopped.current = isProcessing
  }, [isProcessing])

  const processItem = (
    item: HTMLElement,
    ratingMin: number,
    ratingMax: number,
    remove?: boolean
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (!isProcessingHasStopped.current) {
          resolve()
          return
        }

        item.click()
        item.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })

        setTimeout(() => {
          if (!isProcessingHasStopped.current) {
            resolve()
            return
          }

          const inputMarkGroup = document.querySelector(
            '.mark-group__input-container input.mark-group__input'
          ) as HTMLInputElement

          inputMarkGroup.value = remove ? '' : String(getRandomInt(ratingMin, ratingMax))
          inputMarkGroup.dispatchEvent(new Event('input', { bubbles: true }))

          setTimeout(() => {
            if (!isProcessingHasStopped.current) {
              resolve()
              return
            }

            const approve = document.querySelector(
              '.mark-group .mark-buttons button .clickable'
            ) as HTMLElement

            if (approve) {
              approve.click()
            }
          }, 300)
        }, 300)

        resolve()
      }, 1500)
    })
  }

  const handleClose = () => window.location.reload()

  const handleStopProcessing = () => {
    setIsSubmitting(false)
    setIsProcessing(false)
    setToast('stop')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (minRating > maxRating) {
      setError('Мінімальна оцінка не може бути більшою за максимальну')
      return
    }

    if (maxPercent <= currentPercent) {
      setPercentError('Максимальний відсоток заповнення не може бути меншим або рівним поточному')
      return
    }

    setIsSubmitting(true)
    setIsProcessing(true)

    if (isSetRating) {
      const emptyCells: Element[] = []

      if (selectedStudents) {
        const items = [
          ...document.querySelectorAll(
            '.gradebook-container__table2-outlet .gradebook-container__table2-row'
          ),
        ]

        for (const item of items) {
          if (
            selectedStudents.find(
              (student) =>
                student.value ===
                (item.querySelector('.bem-user__name') as HTMLElement).innerText.trim()
            )
          ) {
            for (const cell of [...item.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
              if (
                cell.querySelector('.gradebook__ng-universal-rating-comments') &&
                !cell.querySelector('.pseudo-button--color-red') &&
                !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
              ) {
                emptyCells.push(cell)
              }
            }
          }
        }
      } else {
        const items = [
          ...document.querySelectorAll(
            '.gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell'
          ),
        ]

        for (const cell of items) {
          if (
            cell.querySelector('.gradebook__ng-universal-rating-comments') &&
            !cell.querySelector('.pseudo-button--color-red') &&
            !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
          ) {
            emptyCells.push(cell)
          }
        }
      }

      const shuffleCells = shuffleArray(emptyCells)

      ;(async () => {
        for (let i = 0; i < shuffleCells.length; i++) {
          await processItem(shuffleCells[i], minRating, maxRating)

          if (!isProcessingHasStopped.current) {
            setIsProcessing(false)
            setIsSubmitting(false)
            setToast('stop')
            return
          }

          if (maxPercent === getFillInPercent(selectedStudents)) {
            setIsProcessing(false)
            setIsSubmitting(false)
            beep()
            setToast('done')
            return
          }
        }
      })()
    }
  }

  const handleSelectedStudent = (selectedOption: MultiValue<unknown>) => {
    setSelectedStudents(selectedOption as unknown as Student[])

    if (selectedOption && selectedOption.length > 1) {
      setCurrentPercent(getFillInPercent(selectedStudents))
      setPercentError('')
    } else {
      setCurrentPercent(getFillInPercent())
      setPercentError('')
    }
  }

  return isProcessing ? (
    <>
      <Modal show onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title as="h5">
            <Atom />
            <span>Human Automator</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar key={currentPercent} now={currentPercent} variant="success" />
          <div className="d-flex gap-1 mt-3 mb-0 justify-content-center align-items-center">
            <RotatingLines
              color="black"
              strokeWidth="5"
              animationDuration="0.75"
              height="24"
              width="24"
            />
            <div>
              Обробка ... <span className="fw-bold">{currentPercent}%</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleStopProcessing}>
            Зупинити
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      {isToast == 'stop' && (
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setToast('')} show={!!isToast} delay={10000} autohide bg="danger">
            <Toast.Header className="text-white justify-content-center" closeButton>
              <strong className="d-flex align-items-center gap-1">
                <Atom /> Human Automator
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              Проставляння учням оцінки було скасовано!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      {isToast == 'done' && (
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setToast('')} show={!!isToast} delay={10000} autohide bg="success">
            <Toast.Header className="text-white justify-content-center" closeButton>
              <strong className="d-flex align-items-center gap-1">
                <Atom /> Human Automator
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              Проставляння учням оцінки було успішно завершено!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      <Modal show={true} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">
              <div className="">
                <Atom size={24} />
                <span>Human Automator</span>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body>
                <Form.Label className="fw-bold">Дія</Form.Label>
                <Form.Check
                  type="switch"
                  id="human_automator_action_set_rating"
                  value="set_rating"
                  label="Проставити учням оцінки"
                  onClick={() => setAction('set_rating')}
                  checked={isSetRating}
                  disabled={isSubmitting}
                />
                <Form.Check
                  type="switch"
                  id="human_automator_action_delete_rating"
                  value="delete_rating"
                  label="Видалити учням оцінки"
                  onClick={() => setAction('delete_rating')}
                  checked={showDeleteRating}
                  disabled={isSubmitting}
                />
                <Form.Check
                  type="switch"
                  id="human_automator_action_rating_count"
                  value="show_rating_count"
                  label="Показати яких і скільки оцінок"
                  onClick={() => setAction('show_rating_count')}
                  checked={showShowRatingCount}
                  disabled={isSubmitting}
                />
              </Card.Body>
            </Card>

            {isSetRating && (
              <>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="fw-bold">Опис</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="fst-italic">
                        <p>
                          <span className="fw-bold">Проставити обраним учням оцінки</span> —
                          Дозволяє заповнити <span className="fw-bold">НЕ</span> виставлені оцінки
                          на цій сторінці для обраних учнів.
                        </p>
                        <p>
                          Можна обрати, які оцінки ставити (від мінімальної до максимальної), також
                          можна обрати бажаний відсоток заповнення від загальної кількості оцінок.
                        </p>
                        <p>
                          Оцінки будь виставлені у <span className="fw-bold">випадковому</span>{' '}
                          порядку.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Label className="fw-bold" htmlFor="human_automator_students">
                      Оберіть учнів
                    </Form.Label>
                    <Select
                      id="human_automator_students"
                      placeholder="Оберіть учнів"
                      options={getStudentsList()}
                      onChange={(options) => handleSelectedStudent(options)}
                      isMulti
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isDisabled={isSubmitting}
                    />
                    <Form.Text className="mt-3">
                      <span className="fw-bold">Оберіть учнів</span> яким бажаєте ставити оцінки,
                      або яким <span className="fw-bold">НЕ</span> ставити оцінки.
                    </Form.Text>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group className="mb-3" controlId="human_automator_min_rating">
                      <Form.Label className="fw-bold">Мінімальна оцінка</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="number"
                          min="1"
                          max="12"
                          placeholder="Введіть мінімальну оцінку"
                          required
                          disabled={isSubmitting}
                          isInvalid={!!error}
                          onChange={(e) => {
                            setMinRating(Number(e.target.value))
                            setError('')
                          }}
                        />
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                      </InputGroup>
                      <Form.Text className="mt-3">
                        <span className="fw-bold">Введіть мінімальну оцінку</span>, яку бажаєте
                        ставити, наприклад, <span className="fw-bold">6</span>
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group className="mb-3" controlId="human_automator_max_rating">
                      <Form.Label className="fw-bold">Максимальна оцінка</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="number"
                          min="1"
                          max="12"
                          placeholder="Введіть максимальну оцінку"
                          required
                          disabled={isSubmitting}
                          isInvalid={!!error}
                          onChange={(e) => {
                            setMaxRating(Number(e.target.value))
                            setError('')
                          }}
                        />
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                      </InputGroup>
                      <Form.Text className="mt-3">
                        <span className="fw-bold">Введіть максимальну оцінку</span>, яку бажаєте
                        ставити, наприклад, <span className="fw-bold">12</span>
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group className="mb-3" controlId="human_automator_max_percent">
                      <Form.Label className="fw-bold">Максимальний відсоток заповнення</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="number"
                          min={currentPercent}
                          max="100"
                          placeholder="Введіть максимальний відсоток заповнення"
                          required
                          key={currentPercent}
                          disabled={isSubmitting}
                          isInvalid={!!percentError}
                          defaultValue={currentPercent}
                          onChange={(e) => {
                            setMaxPercent(Number(e.target.value))
                            setPercentError('')
                          }}
                        />
                        <Form.Control.Feedback type="invalid">{percentError}</Form.Control.Feedback>
                      </InputGroup>
                      <Form.Text className="mt-3">
                        <span className="fw-bold">Введіть максимальний відсоток заповнення</span>{' '}
                        оцінок, наприклад, зараз є заповнення на{' '}
                        <span className="fw-bold">{currentPercent}%</span>
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </>
            )}

            {showDeleteRating && (
              <div className="fw-lighter">
                <p>
                  <b>Видалити учням оцінки</b> — Дозволяє видалити виставлені оцінки на цій сторінці
                  для обраних учнів.
                </p>
                <p>
                  Можна обрати, які саме оцінки треба видалити, наприклад тільки <b>6</b>
                </p>
              </div>
            )}

            {showShowRatingCount && (
              <div className="fw-lighter">
                <p>
                  <b>Показати яких і скільки оцінок</b> — Дозволяє показати яких і скільки оцінок у
                  класі.
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
          </Modal.Body>
          <Modal.Footer className="justify-content-between">
            <Button variant="danger" onClick={handleClose}>
              Закрити
            </Button>
            <Button variant="primary" type="submit">
              Почати
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default App
