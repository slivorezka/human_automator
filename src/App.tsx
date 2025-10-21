import { Pencil, Play, Plus, X } from 'lucide-react'
import { type FormEvent } from 'react'
import { Button, Card, Form, InputGroup, Modal, ProgressBar } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import type { MultiValue } from 'react-select'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import Description from './components/Description'
import Header from './components/Header'
import Message from './components/Message'
import RatingCount from './components/RatingCount'
import StudentListAdd from './components/StudentLists/StudentListAdd'
import StudentListDelete from './components/StudentLists/StudentListDelete.tsx'
import StudentListEdit from './components/StudentLists/StudentListEdit'
import StudentLists from './components/StudentLists/StudentLists'
import { EXAMPLE_RATING, MAX_RATING, MIN_RATING, TIMING } from './constants/config'
import useProcessing from './hooks/useProcessing'
import useActionStore from './stores/useActionStore'
import useAppStore from './stores/useAppStore'
import useFormErrorStore from './stores/useFormErrorStore'
import useModalStoreStore from './stores/useModalStoreStore'
import useStudentListsStore from './stores/useStudentListsStore'
import useStudentsStore from './stores/useStudentsStore'
import useToastStore from './stores/useToastStore'
import type { SelectOption, ToastType } from './types'
import {
  cellAbsent,
  cellRemoveSelected,
  cellsNarrow,
  fillPercent,
  getCells,
  getRows,
  rating,
  ratingComment,
  studentName,
  toolPanel,
} from './utils/gradebook'
import { beep, getSelectListOption, getSelectOption, shuffleArray } from './utils/helper'

function App() {
  const animatedComponents = makeAnimated()

  const {
    showModalAction,
    showModalStudentLists,
    showModalStudentListAdd,
    showModalStudentListEdit,
    showModalStudentListDelete,
    setShowActionModal,
    setShowModalStudentLists,
    setShowModalStudentListAdd,
  } = useModalStoreStore()

  const {
    setProcessing,
    minRating,
    setMinRating,
    maxRating,
    setMaxRating,
    isSubmitting,
    setSubmitting,
    isRunCountRating,
    setCountRating,
    removeRating,
    setRemoveRating,
    removeAllRating,
    setRemoveAllRating,
    maxPercent,
    setMaxPercent,
    currentPercent,
    setCurrentPercent,
  } = useAppStore()

  const { ratingError, setRatingError, percentError, setPercentError } = useFormErrorStore()
  const { studentsList, selectedStudents, handleSelectedStudents } = useStudentsStore()

  const {
    isStudentSelectTypeAll,
    isStudentSelectTypeList,
    isStudentSelectTypeCustom,
    selectedStudentLists,
    handleSelectedStudentLists,
    studentLists,
    setStudentSelectType,
  } = useStudentListsStore()

  const { toast, setToast } = useToastStore()

  const { action, setAction, isSetRating, isDeleteRating, isCountRating } = useActionStore()
  const { processItem } = useProcessing()

  const handleStop = (status: ToastType) => {
    setProcessing(false)
    toolPanel(false)
    cellRemoveSelected(false)
    setShowActionModal(false)
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
    setShowActionModal(false)
    let destroy = TIMING.DESTROY_APP_DELAY

    if (useAppStore.getState().isProcessing) {
      setProcessing(false)
      setToast('basicCancel')
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
        setRatingError('Мінімальна оцінка не може бути більшою за максимальну')
        return
      }

      if (maxPercent <= currentPercent) {
        setPercentError('Максимальний відсоток заповнення не може бути меншим або рівним поточному')
        return
      }

      setSubmitting(true)
      setProcessing(true)

      const emptyCells: HTMLElement[] = []

      if (selectedStudentLists) {
        console.info(selectedStudentLists)
        /*for (const row of rows) {
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
        }*/
      } else if (selectedStudents) {
        for (const row of getRows()) {
          if (selectedStudents.find((student) => student === studentName(row))) {
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
        for (const cell of getCells()) {
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

        if (!useAppStore.getState().isProcessing) {
          handleStop('basicCancel')
          return
        }

        if (percent >= maxPercent) {
          break
        }
      }

      handleStop('basicDone')
    }

    if (isDeleteRating) {
      setSubmitting(true)
      setProcessing(true)

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
        for (const row of getRows()) {
          if (selectedStudents.find((student) => student === studentName(row))) {
            processRow(row)
          }
        }
      } else {
        for (const row of getRows()) {
          processRow(row)
        }
      }

      for (const cell of cells) {
        await processItem({
          cell,
          remove: true,
        })

        setCurrentPercent(fillPercent(selectedStudents))

        if (!useAppStore.getState().isProcessing) {
          handleStop('basicCancel')
          return
        }
      }

      handleStop('basicDone')
    }

    if (isCountRating) {
      setCountRating(true)
    }
  }

  return (
    <>
      {toast == 'basicDone' && (
        <Message type="success" onClose={() => setToast(false)}>
          Операцію було успішно завершено!
        </Message>
      )}
      {toast == 'basicCancel' && (
        <Message type="danger" onClose={() => setToast(false)}>
          Операцію було скасовано!
        </Message>
      )}
      {toast === 'studentListAdd' && (
        <Message type="success" onClose={() => setToast(false)}>
          Список учнів успішно додано!
        </Message>
      )}
      {toast === 'studentListSave' && (
        <Message type="success" onClose={() => setToast(false)}>
          Список учнів успішно збережено!
        </Message>
      )}
      {toast === 'studentListDelete' && (
        <Message type="success" onClose={() => setToast(false)}>
          Список учнів успішно видалено!
        </Message>
      )}

      {showModalStudentListAdd && <StudentListAdd />}
      {showModalStudentListEdit && <StudentListEdit />}
      {showModalStudentListDelete && <StudentListDelete />}
      {showModalStudentLists && <StudentLists />}

      {isRunCountRating && (
        <Modal show={showModalAction} onHide={handleClose} centered>
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
      )}

      {useAppStore.getState().isProcessing ? (
        <Modal show={showModalAction} onHide={handleClose} centered>
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
            <Button variant="danger" onClick={() => handleStop('basicCancel')}>
              <X width={16} height={16} />
              <span className="align-middle ms-1">Зупинити</span>
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={showModalAction} onHide={handleClose} centered animation>
          <Form onSubmit={handleSubmit}>
            <Header />
            <Modal.Body>
              <Card>
                <Card.Body>
                  <Form.Label className="fw-bold">Дія</Form.Label>
                  <Form.Check
                    type="switch"
                    label="Проставити учням оцінки"
                    onChange={(e) => (e.target.checked ? setAction('setRating') : setAction(false))}
                    checked={isSetRating}
                    disabled={isSubmitting}
                  />
                  <Form.Check
                    type="switch"
                    label="Видалити учням оцінки"
                    onChange={(e) =>
                      e.target.checked ? setAction('deleteRating') : setAction(false)
                    }
                    checked={isDeleteRating}
                    disabled={isSubmitting}
                  />
                  <Form.Check
                    type="switch"
                    label="Показати яких і скільки оцінок"
                    onChange={(e) =>
                      e.target.checked ? setAction('countRating') : setAction(false)
                    }
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
                      Можна обрати, які оцінки ставити (від мінімальної до максимальної), також
                      можна обрати бажаний відсоток заповнення від загальної кількості оцінок.
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
                        onChange={() => setStudentSelectType('all')}
                        checked={isStudentSelectTypeAll}
                        disabled={isSubmitting}
                      />
                      <Form.Check
                        type="switch"
                        label="Використати список учнів"
                        onChange={(e) =>
                          e.target.checked
                            ? setStudentSelectType('list')
                            : setStudentSelectType('all')
                        }
                        checked={isStudentSelectTypeList}
                        disabled={isSubmitting}
                      />
                      <Form.Check
                        type="switch"
                        label="Обрати учнів зі списку"
                        onChange={(e) =>
                          e.target.checked
                            ? setStudentSelectType('custom')
                            : setStudentSelectType('all')
                        }
                        checked={isStudentSelectTypeCustom}
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
                            <span className="fw-bold">Обрати учнів зі списку</span> — дозволяє
                            виставити оцінки <span className="fw-bold">окремим обраним учням</span>
                          </li>
                        </ul>
                      </Form.Text>
                    </Card.Body>
                  </Card>
                  {isStudentSelectTypeList && (
                    <>
                      {studentLists?.length > 0 ? (
                        <>
                          <Card className="mt-3">
                            <Card.Body>
                              <Form.Label className="fw-bold">Списки учнів</Form.Label>
                              <Select
                                className="mb-2"
                                placeholder="Оберіть список учнів"
                                defaultValue={getSelectListOption(selectedStudentLists)}
                                options={getSelectListOption(studentLists)}
                                onChange={(options) =>
                                  handleSelectedStudentLists(options as MultiValue<SelectOption>)
                                }
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
                  {isStudentSelectTypeCustom && (
                    <Card className="mt-3">
                      <Card.Body>
                        <Form.Label className="fw-bold">Оберіть учнів</Form.Label>
                        <Select
                          className="mb-2"
                          placeholder="Оберіть учнів"
                          options={getSelectOption(studentsList)}
                          onChange={(options) =>
                            handleSelectedStudents(options as MultiValue<SelectOption>)
                          }
                          isMulti
                          required
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isDisabled={isSubmitting}
                        />
                        <Form.Text>
                          <span className="fw-bold">Оберіть учнів</span> яким бажаєте виставити
                          оцінки
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
                            disabled={
                              isSubmitting || (isStudentSelectTypeList && studentLists.length === 0)
                            }
                            isInvalid={!!ratingError}
                            onChange={(e) => {
                              setMinRating(Number(e.target.value))
                              setRatingError('')
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {ratingError}
                          </Form.Control.Feedback>
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
                            disabled={
                              isSubmitting || (isStudentSelectTypeList && studentLists.length === 0)
                            }
                            isInvalid={!!ratingError}
                            onChange={(e) => {
                              setMaxRating(Number(e.target.value))
                              setRatingError('')
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {ratingError}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text>
                          <span className="fw-bold">Максимальна оцінка</span>, яку бажаєте
                          поставити, наприклад, <span className="fw-bold">{MAX_RATING}</span>
                        </Form.Text>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Body>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Максимальний відсоток заповнення
                        </Form.Label>
                        <InputGroup className="mb-2">
                          <Form.Control
                            type="number"
                            min={currentPercent}
                            max="100"
                            placeholder="Введіть максимальний відсоток заповнення"
                            required
                            key={currentPercent}
                            disabled={
                              isSubmitting || (isStudentSelectTypeList && studentLists.length === 0)
                            }
                            isInvalid={!!percentError}
                            defaultValue={currentPercent}
                            onChange={(e) => {
                              setMaxPercent(Number(e.target.value))
                              setPercentError('')
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {percentError}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text>
                          <span className="fw-bold">Максимальний відсоток заповнення</span> оцінок,
                          наприклад, зараз є заповнення на{' '}
                          <span className="fw-bold">{currentPercent}%</span>
                          {selectedStudents && selectedStudents.length > 0 && (
                            <> для обраних учнів</>
                          )}
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
                        options={getSelectListOption(studentLists)}
                        onChange={(options) =>
                          handleSelectedStudents(options as MultiValue<SelectOption>)
                        }
                        isMulti
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isDisabled={isSubmitting}
                      />
                      <Form.Text>
                        <p>
                          <span className="fw-bold">Оберіть учнів</span>, яким бажаєте видалити
                          оцінки
                        </p>
                        <p>
                          Якщо <span className="fw-bold">НЕ</span> буде обрано жодного учня то,
                          оцінки буде видалено <span className="fw-bold">усім учням</span>
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
                            <span className="fw-bold">Оцінка</span>, яку бажаєте видалити,
                            наприклад, <span className="fw-bold">{EXAMPLE_RATING}</span>
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
                      <b>Показати яких і скільки оцінок</b> — Дозволяє показати яких і скільки
                      оцінок у класі.
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
                  !action || isSubmitting || (isStudentSelectTypeList && studentLists.length === 0)
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
      )}
    </>
  )
}

export default App
