import { useEffect, useState, useMemo, useCallback, type FormEvent } from 'react'
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
import useGradeBook from './hooks/useGradeBook'
import useAction from './hooks/useAction'
import useProcessing from './hooks/useProcessing'
import { shuffleArray, beep } from './utils/gradebook'
import type { Student } from './types'

function App() {
  const animatedComponents = makeAnimated()

  const { action, setAction, isSetRating, isDeleteRating, isCountRating } = useAction()
  const { isProcessing, setIsProcessing, processItem, isProcessingRef } = useProcessing()
  const { rows, cells, studentName, students, fillPercent } = useGradeBook()

  const studentsList = useMemo(() => students(), [students])

  const [isRunRatingCount, setRunRatingCount] = useState<boolean>(false)
  const [selectedStudents, setSelectedStudents] = useState<Student[] | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [minRating, setMinRating] = useState<number>(0)
  const [maxRating, setMaxRating] = useState<number>(0)
  const [removeRating, setRemoveRating] = useState<number>(0)
  const [removeAllRating, setRemoveAllRating] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [percentError, setPercentError] = useState<string>('')
  const [maxPercent, setMaxPercent] = useState<number>(0)
  const [currentPercent, setCurrentPercent] = useState<number>(0)
  const [isToast, setToast] = useState<'' | 'stop' | 'done'>('')

  useEffect(() => {
    setCurrentPercent(fillPercent(selectedStudents))
  }, [fillPercent, selectedStudents])

  useEffect(() => {
    switch (action) {
      case 'set_rating':
        setAction('set_rating')
        break

      case 'delete_rating':
        setAction('delete_rating')
        break

      case 'count_rating':
        setAction('count_rating')
        break

      default:
        setAction('')
    }
  }, [action, setAction])

  useEffect(() => {
    isProcessingRef.current = isProcessing
  }, [isProcessing, isProcessingRef])

  const handleReset = () => {
    setAction('')
    setSelectedStudents(undefined)
    setIsSubmitting(false)
    setIsProcessing(false)
    setMinRating(0)
    setMaxRating(0)
    setError('')
    setPercentError('')
    setMaxPercent(0)
    setCurrentPercent(fillPercent())
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
        for (const row of rows) {
          if (selectedStudents.find((student) => student.value === studentName(row))) {
            for (const cell of [...row.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
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
        for (const cell of cells) {
          if (
            cell.querySelector('.gradebook__ng-universal-rating-comments') &&
            !cell.querySelector('.pseudo-button--color-red') &&
            !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
          ) {
            emptyCells.push(cell as HTMLElement)
          }
        }
      }

      for (const cell of shuffleArray(emptyCells)) {
        await processItem({
          item: cell,
          minRating,
          maxRating,
        })

        const percent = fillPercent(selectedStudents)

        setCurrentPercent(percent)

        if (!isProcessingRef.current) {
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
        for (const row of rows) {
          if (selectedStudents.find((student) => student.value === studentName(row))) {
            for (const cell of [...row.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
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
        for (const itemCell of cells) {
          for (const cell of [...itemCell.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
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

      setCurrentPercent(100 - fillPercent(selectedStudents))

      for (const cell of cells) {
        await processItem({
          item: cell,
          remove: true,
        })

        setCurrentPercent(100 - fillPercent(selectedStudents))

        if (!isProcessingRef.current) {
          handleReset()
          setToast('stop')
          return
        }
      }

      setToast('done')
      beep()
    }

    if (isCountRating) {
      setIsSubmitting(true)
      setIsProcessing(true)
      setRunRatingCount(true)
      setToast('done')
      beep()
    }

    handleReset()
  }

  const handleSelectedStudent = useCallback((selectedOption: MultiValue<unknown>) => {
    setSelectedStudents(selectedOption as unknown as Student[])
    setPercentError('')
  }, [])

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
                  onChange={(e) => (e.target.checked ? setAction('count_rating') : setAction(''))}
                  checked={isCountRating}
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
                      options={studentsList}
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
                      options={studentsList}
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

            {isCountRating && (
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
            <Button disabled={action === ''} variant="primary" type="submit">
              Почати
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default App
