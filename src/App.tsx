import { useEffect, useState, useRef, type FormEvent } from 'react'
import {
  Toast,
  ToastContainer,
  Button,
  Card,
  Modal,
  InputGroup,
  ProgressBar,
  Form,
} from 'react-bootstrap'
import { Bot } from 'lucide-react'
import Select from 'react-select'
import type { MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import { RotatingLines } from 'react-loader-spinner'
import RatingCount from './components/RatingCount'
import Description from './components/Description'
import Header from './components/Header'

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
  const [isDeleteRating, deleteRating] = useState<boolean>(false)
  const [isRatingCount, setRatingCount] = useState<boolean>(false)
  const [isRunRatingCount, setRunRatingCount] = useState<boolean>(false)
  const [selectedStudents, setSelectedStudents] = useState<Student[] | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [minRating, setMinRating] = useState<number>(0)
  const [maxRating, setMaxRating] = useState<number>(0)
  const [removeRating, setRemoveRating] = useState<number>(0)
  const [removeAllRating, setRemoveAllRating] = useState<boolean>(false)
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
        deleteRating(false)
        setRatingCount(false)

        break

      case 'delete_rating':
        setRating(false)
        deleteRating(true)
        setRatingCount(false)
        break

      case 'show_rating_count':
        setRating(false)
        deleteRating(false)
        setRatingCount(true)
        break

      default:
        setRating(false)
        deleteRating(false)
        setRatingCount(false)
    }
  }, [action])

  useEffect(() => {
    isProcessingHasStopped.current = isProcessing
  }, [isProcessing])

  const handleReset = () => {
    setAction('')
    setRating(false)
    deleteRating(false)
    setRatingCount(false)
    setSelectedStudents(undefined)
    setIsSubmitting(false)
    setIsProcessing(false)
    setMinRating(0)
    setMaxRating(0)
    setError('')
    setPercentError('')
    setMaxPercent(0)
    setCurrentPercent(getFillInPercent())
  }

  const processItem = ({
    item,
    minRating,
    maxRating,
    remove,
  }: {
    item: HTMLElement
    minRating?: number
    maxRating?: number
    remove?: boolean
  }): Promise<void> => {
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

          if (minRating && maxRating) {
            inputMarkGroup.value = String(getRandomInt(minRating, maxRating))
          }

          if (remove) {
            inputMarkGroup.value = ''
          }

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

            resolve()
          }, 300)
        }, 300)
      }, 1000)
    })
  }

  const handleClose = () => window.location.reload()

  const handleStopProcessing = () => {
    setIsSubmitting(false)
    setIsProcessing(false)
    setToast('stop')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSetRating) {
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

      const emptyCells: HTMLElement[] = []

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
                emptyCells.push(cell as HTMLElement)
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
            emptyCells.push(cell as HTMLElement)
          }
        }
      }

      setCurrentPercent(getFillInPercent(selectedStudents))

      for (const cell of shuffleArray(emptyCells)) {
        await processItem({
          item: cell,
          minRating,
          maxRating,
        })

        const percent = getFillInPercent(selectedStudents)

        setCurrentPercent(percent)

        if (!isProcessingHasStopped.current) {
          setToast('stop')
          handleReset()
          return
        }

        if (percent >= maxPercent) {
          break
        }
      }

      setToast('done')
      beep()
    }

    if (isDeleteRating) {
      setIsSubmitting(true)
      setIsProcessing(true)

      const cells: HTMLElement[] = []

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
              if (removeAllRating) {
                if (
                  cell.querySelector('.gradebook__ng-universal-rating-comments') &&
                  !cell.querySelector('.pseudo-button--color-red') &&
                  (cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
                ) {
                  cells.push(cell as HTMLElement)
                }
              } else {
                if (
                  cell.querySelector('.gradebook__ng-universal-rating-comments') &&
                  !cell.querySelector('.pseudo-button--color-red') &&
                  removeRating ===
                    Number(
                      (
                        cell.querySelector('.badge__item--no-border') as HTMLElement
                      )?.innerText.trim()
                    )
                ) {
                  cells.push(cell as HTMLElement)
                }
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
          for (const cell of [...item.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
            if (removeAllRating) {
              if (
                cell.querySelector('.gradebook__ng-universal-rating-comments') &&
                !cell.querySelector('.pseudo-button--color-red') &&
                (cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
              ) {
                cells.push(cell as HTMLElement)
              }
            } else {
              if (
                cell.querySelector('.gradebook__ng-universal-rating-comments') &&
                !cell.querySelector('.pseudo-button--color-red') &&
                removeRating ===
                  Number(
                    (cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
                  )
              ) {
                cells.push(cell as HTMLElement)
              }
            }
          }
        }
      }

      setCurrentPercent(100 - getFillInPercent(selectedStudents))

      for (const cell of cells) {
        await processItem({
          item: cell,
          remove: true,
        })

        setCurrentPercent(100 - getFillInPercent(selectedStudents))

        if (!isProcessingHasStopped.current) {
          handleReset()
          setToast('stop')
          return
        }
      }

      setToast('done')
      beep()
    }

    if (isRatingCount) {
      setIsSubmitting(true)
      setIsProcessing(true)
      setRunRatingCount(true)
      setToast('done')
      beep()
    }

    handleReset()
  }

  const handleSelectedStudent = (selectedOption: MultiValue<unknown>) => {
    const students = selectedOption as unknown as Student[]

    setSelectedStudents(students)

    if (students) {
      setCurrentPercent(getFillInPercent(students))
      setPercentError('')
    } else {
      setCurrentPercent(getFillInPercent())
      setPercentError('')
    }
  }

  if (isRunRatingCount) {
    return (
      <>
        <Modal show onHide={handleClose} centered>
          <Header />
          <Modal.Body>
            <Card>
              <Card.Body>
                <RatingCount />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Закрити
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  return isProcessing ? (
    <>
      <Modal show onHide={handleClose} centered>
        <Header />
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
              {maxPercent < 100 && maxPercent > 0 && (
                <>
                  {' '}
                  із <span className="fw-bold">{maxPercent}%</span>
                </>
              )}
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
                <Bot /> Human Automator
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white fw-bold text-center">
              Операцію було скасовано!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      {isToast == 'done' && (
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setToast('')} show={!!isToast} delay={10000} autohide bg="success">
            <Toast.Header className="text-white justify-content-center" closeButton>
              <strong className="d-flex align-items-center gap-1">
                <Bot /> Human Automator
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white fw-bold text-center">
              Операцію було успішно завершено!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      <Modal show={true} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Header />
          <Modal.Body>
            <Card>
              <Card.Body>
                <Form.Label className="fw-bold">Дія</Form.Label>
                <Form.Check
                  type="switch"
                  label="Проставити учням оцінки"
                  onChange={(e) => (e.target.checked ? setAction('set_rating') : setAction(''))}
                  checked={isSetRating}
                  disabled={isSubmitting}
                />
                <Form.Check
                  type="switch"
                  label="Видалити учням оцінки"
                  onChange={(e) => (e.target.checked ? setAction('delete_rating') : setAction(''))}
                  checked={isDeleteRating}
                  disabled={isSubmitting}
                />
                <Form.Check
                  type="switch"
                  label="Показати яких і скільки оцінок"
                  onChange={(e) =>
                    e.target.checked ? setAction('show_rating_count') : setAction('')
                  }
                  checked={isRatingCount}
                  disabled={isSubmitting}
                />
              </Card.Body>
            </Card>

            {isSetRating && (
              <>
                <Description>
                  <p>
                    <span className="fw-bold">Проставити учням оцінки</span> — Дозволяє заповнити{' '}
                    <span className="fw-bold">НЕ</span> виставлені оцінки на цій сторінці для
                    обраних учнів.
                  </p>
                  <p>
                    Можна обрати, які оцінки ставити (від мінімальної до максимальної), також можна
                    обрати бажаний відсоток заповнення від загальної кількості оцінок.
                  </p>
                  <p>
                    Оцінки будь виставлені у <span className="fw-bold">випадковому</span> порядку.
                  </p>
                </Description>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
                    <Select
                      className="mb-2"
                      placeholder="Оберіть учнів"
                      options={getStudentsList()}
                      onChange={(options) => handleSelectedStudent(options)}
                      isMulti
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isDisabled={isSubmitting}
                    />
                    <Form.Text>
                      <span className="fw-bold">Оберіть учнів</span> яким бажаєте виставити оцінки,
                      або яким <span className="fw-bold">НЕ</span> ставити оцінки.
                    </Form.Text>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group>
                      <Form.Label className="fw-bold">Мінімальна оцінка</Form.Label>
                      <InputGroup className="mb-2">
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
                      <Form.Text>
                        <span className="fw-bold">Мінімальна оцінка</span>, яку бажаєте поставити,
                        наприклад, <span className="fw-bold">6</span>
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group>
                      <Form.Label className="fw-bold">Максимальна оцінка</Form.Label>
                      <InputGroup className="mb-2">
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
                      <Form.Text>
                        <span className="fw-bold">Максимальна оцінка</span>, яку бажаєте поставити,
                        наприклад, <span className="fw-bold">12</span>
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Group>
                      <Form.Label className="fw-bold">Максимальний відсоток заповнення</Form.Label>
                      <InputGroup className="mb-2">
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
                      <Form.Text>
                        <span className="fw-bold">Максимальний відсоток заповнення</span> оцінок,
                        наприклад, зараз є заповнення на{' '}
                        <span className="fw-bold">{currentPercent}%</span>
                        {selectedStudents && selectedStudents.length > 0 && <> для обраних учнів</>}
                      </Form.Text>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </>
            )}

            {isDeleteRating && (
              <>
                <Description>
                  <p>
                    <span className="fw-bold">Видалити учням оцінки </span> — Дозволяє видалити
                    виставлені оцінки на цій сторінці для обраних учнів.
                  </p>
                  <p>
                    Можна обрати, які саме оцінки треба видалити, наприклад, тільки{' '}
                    <span className="fw-bold">6</span>
                  </p>
                </Description>
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
                    <Select
                      className="mb-2"
                      placeholder="Оберіть учнів"
                      options={getStudentsList()}
                      onChange={(options) => handleSelectedStudent(options)}
                      isMulti
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isDisabled={isSubmitting}
                    />
                    <Form.Text>
                      <p>
                        <span className="fw-bold">Оберіть учнів</span>, яким бажаєте видалити оцінки
                      </p>
                      <p>
                        Якщо <span className="fw-bold">НЕ</span> буде обрано жодного учня то, оцінки
                        буде видалено <span className="fw-bold">усім учням</span>
                      </p>
                    </Form.Text>
                  </Card.Body>
                </Card>
                {!removeAllRating && (
                  <Card className="mt-3">
                    <Card.Body>
                      <Form.Group>
                        <Form.Label className="fw-bold">Оцінка</Form.Label>
                        <InputGroup className="mb-2">
                          <Form.Control
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Введіть оцінку яку бажаєте видалити"
                            required
                            disabled={isSubmitting}
                            onChange={(e) => {
                              setRemoveRating(Number(e.target.value))
                            }}
                          />
                        </InputGroup>
                        <Form.Text>
                          <span className="fw-bold">Оцінка</span>, яку бажаєте видалити, наприклад,{' '}
                          <span className="fw-bold">6</span>
                        </Form.Text>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                )}
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Check
                      className="mb-2"
                      type="switch"
                      label="Видалити всі оцінки"
                      onChange={(e) => setRemoveAllRating(e.target.checked)}
                      defaultValue={removeAllRating ? 'true' : 'false'}
                      disabled={isSubmitting}
                    />
                    <Form.Text>
                      Буде видалено <span className="fw-bold">усі оцінки</span>
                    </Form.Text>
                  </Card.Body>
                </Card>
              </>
            )}

            {isRatingCount && (
              <>
                <Description>
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
                </Description>
                <Card className="mt-3">
                  <Card.Body>
                    <div className="fst-italic">
                      Щоб подивитися результат, виконайте умови, які зазначені в{' '}
                      <span className="fw-bold">Описі</span>, і потім натисніть кнопку{' '}
                      <span className="fw-bold">Почати</span>
                    </div>
                  </Card.Body>
                </Card>
              </>
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
