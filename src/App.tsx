import { Pencil, Play,Plus, X } from 'lucide-react'
import { type FormEvent,useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Card, Form,InputGroup, Modal, ProgressBar } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import type { MultiValue } from 'react-select'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import Description from './components/Description'
import Header from './components/Header'
import Message from './components/Message'
import RatingCount from './components/RatingCount'
import StudentListAdd from './components/StudentLists/StudentListAdd'
import StudentLists from './components/StudentLists/StudentLists'
import { EXAMPLE_RATING, MAX_RATING, MIN_RATING, TIMING } from './constants/config'
import useAction from './hooks/useAction'
import useGradeBook from './hooks/useGradeBook'
import useProcessing from './hooks/useProcessing'
import useStudentLists from './hooks/useStudentLists'
import useStudents from './hooks/useStudents'
import type { Student, StudentListOption, ToastType } from './types'
import { beep,shuffleArray } from './utils/gradebook'

function App() {
  const animatedComponents = makeAnimated()

  const {
    setStudentListType,
    isStudentTypeList,
    isStudentTypeCustom,
    isStudentTypeAll,
    selectedStudents,
    setSelectedStudents,
  } = useStudents()

  const {
    activeStudentList,
    setActiveStudentList,
    studentLists,
    setStudentLists,
    setSelectedStudentList,
    showModalStudentLists,
    setShowModalStudentLists,
    showModalStudentListAdd,
    setShowModalStudentListAdd,
  } = useStudentLists()

  const {
    rows,
    cells,
    cellsNarrow,
    cellAbsent,
    rating,
    ratingComment,
    studentName,
    students,
    fillPercent,
    toolPanel,
    cellRemoveSelected,
  } = useGradeBook()

  const { action, setAction, isSetRating, isDeleteRating, isCountRating } = useAction()
  const { isProcessing, setIsProcessing, processItem, isProcessingRef } = useProcessing()
  const studentsList = useMemo(() => students(), [students])

  const [isRunCountRating, setCountRating] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [minRating, setMinRating] = useState<number>(0)
  const [maxRating, setMaxRating] = useState<number>(0)
  const [removeRating, setRemoveRating] = useState<number>(0)
  const [removeAllRating, setRemoveAllRating] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [percentError, setPercentError] = useState<string>('')
  const [maxPercent, setMaxPercent] = useState<number>(0)
  const [currentPercent, setCurrentPercent] = useState<number>(0)
  const [isToast, setToast] = useState<ToastType>('')
  const [showModal, setShowModal] = useState<boolean>(true)

  useEffect(() => {
    setCurrentPercent(fillPercent(selectedStudents))
  }, [fillPercent, selectedStudents])

  useEffect(() => {
    isProcessingRef.current = isProcessing
  }, [isProcessing, isProcessingRef])

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

  const handleStop = (status: ToastType) => {
    setIsProcessing(false)
    toolPanel(false)
    cellRemoveSelected(false)
    setShowModal(false)
    setToast(status)
    beep()
    setTimeout(
      () => window.dispatchEvent(new CustomEvent('destroyHumanAutomator')),
      TIMING.DESTROY_TOAST_APP_DELAY
    )
  }

  const handleClose = () => {
    toolPanel(false)
    cellRemoveSelected(false)
    setShowModal(false)
    let destroy = TIMING.DESTROY_APP_DELAY

    if (isProcessing) {
      setIsProcessing(false)
      setToast('danger')
      beep()
      destroy = TIMING.DESTROY_TOAST_APP_DELAY
    }

    setTimeout(() => window.dispatchEvent(new CustomEvent('destroyHumanAutomator')), destroy)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    toolPanel(true)
    cellRemoveSelected(true)

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
            for (const cell of [...cellsNarrow(row)]) {
              if (
                ratingComment(cell as HTMLElement) &&
                !cellAbsent(cell as HTMLElement) &&
                !rating(cell as HTMLElement)
              ) {
                emptyCells.push(cell as HTMLElement)
              }
            }
          }
        }
      } else {
        for (const cell of cells) {
          if (
            ratingComment(cell as HTMLElement) &&
            !cellAbsent(cell as HTMLElement) &&
            !rating(cell as HTMLElement)
          ) {
            emptyCells.push(cell as HTMLElement)
          }
        }
      }

      for (const cell of shuffleArray(emptyCells)) {
        await processItem({
          cell,
          minRating,
          maxRating,
        })

        const percent = fillPercent(selectedStudents)

        setCurrentPercent(percent)

        if (!isProcessingRef.current) {
          handleStop('danger')
          return
        }

        if (percent >= maxPercent) {
          break
        }
      }

      handleStop('success')
    }

    if (isDeleteRating) {
      setIsSubmitting(true)
      setIsProcessing(true)

      const cells: HTMLElement[] = []

      const processRow = (row: HTMLElement): void => {
        for (const cell of [...cellsNarrow(row)]) {
          if (removeAllRating) {
            if (
              ratingComment(cell as HTMLElement) &&
              !cellAbsent(cell as HTMLElement) &&
              rating(cell as HTMLElement)
            ) {
              cells.push(cell as HTMLElement)
            }
          } else {
            if (
              ratingComment(cell as HTMLElement) &&
              !cellAbsent(cell as HTMLElement) &&
              removeRating === rating(cell as HTMLElement)
            ) {
              cells.push(cell as HTMLElement)
            }
          }
        }
      }

      if (selectedStudents) {
        for (const row of rows) {
          if (selectedStudents.find((student) => student.value === studentName(row))) {
            processRow(row)
          }
        }
      } else {
        for (const row of rows) {
          processRow(row)
        }
      }

      for (const cell of cells) {
        await processItem({
          cell,
          remove: true,
        })

        setCurrentPercent(fillPercent(selectedStudents))

        if (!isProcessingRef.current) {
          handleStop('danger')
          return
        }
      }

      handleStop('success')
    }

    if (isCountRating) {
      setCountRating(true)
    }
  }

  const handleSelectedStudent = useCallback(
    (selectedOption: MultiValue<unknown>) => {
      setSelectedStudents(selectedOption as unknown as Student[])
      setPercentError('')
    },
    [setSelectedStudents]
  )

  const handleSelectedStudentList = useCallback(
    (selectedOption: MultiValue<unknown>) => {
      setSelectedStudentList(selectedOption as unknown as StudentListOption[])
      setPercentError('')
    },
    [setSelectedStudentList]
  )

  if (showModalStudentLists) {
    return (
      <StudentLists
        props={{
          activeStudentList,
          setActiveStudentList,
          showModalStudentLists,
          setShowModalStudentLists,
          studentsList,
          selectedStudents,
          setSelectedStudents,
          handleSelectedStudent,
        }}
      />
    )
  }

  if (showModalStudentListAdd) {
    return (
      <StudentListAdd
        props={{
          studentsList,
          selectedStudents,
          setSelectedStudents,
          handleSelectedStudent,
          studentLists,
          setStudentLists,
          showModalStudentListAdd,
          setShowModalStudentListAdd,
          setToast,
        }}
      />
    )
  }

  if (isToast) {
    return (
      <>
        {isToast == 'success' && (
          <Message show={!!isToast} type={isToast} onClose={() => setToast('')}>
            Операцію було успішно завершено!
          </Message>
        )}
        {isToast == 'danger' && (
          <Message show={!!isToast} type={isToast} onClose={() => setToast('')}>
            Операцію було скасовано!
          </Message>
        )}
      </>
    )
  }

  if (isRunCountRating) {
    return (
      <Modal show={showModal} onHide={handleClose} centered>
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
            <X width={16} height={16} />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return isProcessing ? (
    <Modal show={showModal} onHide={handleClose} centered>
      <Header />
      <Modal.Body>
        <ProgressBar
          key={currentPercent}
          now={isDeleteRating ? 100 - currentPercent : currentPercent}
          max={isDeleteRating ? 100 - maxPercent : maxPercent}
          variant="success"
          animated
        />

        <div className="d-flex gap-1 mt-3 mb-0 justify-content-center align-items-center">
          <RotatingLines
            color="black"
            strokeWidth="5"
            animationDuration="0.75"
            height="24"
            width="24"
          />
          <div>
            Обробка ...{' '}
            <span className="fw-bold">
              {isDeleteRating ? 100 - currentPercent : currentPercent}%
            </span>
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
        <Button variant="danger" onClick={() => handleStop('danger')}>
          Зупинити
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal show={showModal} onHide={handleClose} centered animation>
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
                  <span className="fw-bold">НЕ</span> виставлені оцінки на цій сторінці для обраних
                  учнів.
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
                  <Form.Check
                    type="switch"
                    label="Обрати всіх учнів"
                    onChange={(e) =>
                      e.target.checked ? setStudentListType('all') : setStudentListType('all')
                    }
                    checked={isStudentTypeAll}
                    disabled={isSubmitting}
                  />
                  <Form.Check
                    type="switch"
                    label="Використати список учнів"
                    onChange={(e) =>
                      e.target.checked ? setStudentListType('list') : setStudentListType('all')
                    }
                    checked={isStudentTypeList}
                    disabled={isSubmitting}
                  />
                  <Form.Check
                    type="switch"
                    label="Обрати учнів зі списку"
                    onChange={(e) =>
                      e.target.checked ? setStudentListType('custom') : setStudentListType('all')
                    }
                    checked={isStudentTypeCustom}
                    disabled={isSubmitting}
                  />
                  <Form.Text>
                    <ul className="mt-3 mb-0">
                      <li>
                        <span className="fw-bold">Обрати всіх учнів</span> — дозволяє виставити
                        оцінки
                        <span className="fw-bold"> усім учням</span>
                      </li>
                      <li>
                        <span className="fw-bold">Використати список учнів</span> — дозволяє
                        виставити оцінки учням з обраного списку
                      </li>
                      <li>
                        <span className="fw-bold">Обрати учнів зі списку</span> — дозволяє виставити
                        оцінки <span className="fw-bold">окремим обраним учням</span>
                      </li>
                    </ul>
                  </Form.Text>
                </Card.Body>
              </Card>

              {isStudentTypeList && (
                <>
                  {studentLists?.length > 0 ? (
                    <>
                      <Card className="mt-3">
                        <Card.Body>
                          <Form.Label className="fw-bold">Списки учнів</Form.Label>
                          <Select
                            className="mb-2"
                            placeholder="Оберіть список учнів"
                            options={studentLists.map((studentList) => ({
                              value: studentList.id,
                              label: `${studentList.name}`,
                            }))}
                            onChange={(options) => handleSelectedStudentList(options)}
                            isMulti
                            required
                            closeMenuOnSelect
                            components={animatedComponents}
                            isDisabled={isSubmitting}
                          />
                          <Form.Text>
                            <span className="fw-bold">Оберіть список учнів</span>, яким бажаєте
                            виставити оцінки
                          </Form.Text>
                        </Card.Body>
                      </Card>
                      <Card className="mt-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => {
                                setShowModalStudentListAdd(true)
                              }}
                            >
                              <Plus width={14} height={14} />
                              <span className="align-middle ms-1">Створити список учнів</span>
                            </Button>

                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => {
                                setShowModalStudentLists(true)
                              }}
                            >
                              <Pencil width={14} height={14} />
                              <span className="align-middle ms-1">Редагувати списки учнів</span>
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </>
                  ) : (
                    <Card className="mt-3">
                      <Card.Body>
                        <div className="text-center">
                          <p>
                            Жодного <span className="fw-bold">списку учнів</span> ще не створено
                          </p>
                          <div>
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => {
                                setShowModalStudentListAdd(true)
                              }}
                            >
                              <Plus width={14} height={14} />
                              <span className="align-middle ms-1">Створити список учнів</span>
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                </>
              )}

              {isStudentTypeCustom && (
                <Card className="mt-3">
                  <Card.Body>
                    <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
                    <Select
                      className="mb-2"
                      placeholder="Оберіть учнів"
                      options={studentsList}
                      onChange={(options) => handleSelectedStudent(options)}
                      isMulti
                      required
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isDisabled={isSubmitting}
                    />
                    <Form.Text>
                      <span className="fw-bold">Оберіть учнів</span> яким бажаєте виставити оцінки
                    </Form.Text>
                  </Card.Body>
                </Card>
              )}

              <Card className="mt-3">
                <Card.Body>
                  <Form.Group>
                    <Form.Label className="fw-bold">Мінімальна оцінка</Form.Label>
                    <InputGroup className="mb-2">
                      <Form.Control
                        type="number"
                        min={MIN_RATING}
                        max={MAX_RATING}
                        placeholder="Введіть мінімальну оцінку"
                        required
                        disabled={isSubmitting || (isStudentTypeList && studentLists.length === 0)}
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
                      наприклад, <span className="fw-bold">{EXAMPLE_RATING}</span>
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
                        min={MIN_RATING}
                        max={MAX_RATING}
                        placeholder="Введіть максимальну оцінку"
                        required
                        disabled={isSubmitting || (isStudentTypeList && studentLists.length === 0)}
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
                      наприклад, <span className="fw-bold">{MAX_RATING}</span>
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
                        disabled={isSubmitting || (isStudentTypeList && studentLists.length === 0)}
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
                  <span className="fw-bold">{EXAMPLE_RATING}</span>
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
                          min={MIN_RATING}
                          max={MAX_RATING}
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
                        <span className="fw-bold">{EXAMPLE_RATING}</span>
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
            <X width={16} height={16} />
            <span className="align-middle ms-1">Закрити</span>
          </Button>
          <Button
            disabled={
              action === '' || isSubmitting || (isStudentTypeList && studentLists.length === 0)
            }
            variant="primary"
            type="submit"
          >
            <Play width={16} height={16} />
            <span className="align-middle ms-1">Почати</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default App
