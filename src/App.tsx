import { Play, X } from 'lucide-react'
import { type FormEvent } from 'react'
import { Button, Card, Form, InputGroup, Modal, ProgressBar } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { RotatingLines } from 'react-loader-spinner'

import Description from '@/components/Description'
import Header from '@/components/Header'
import Message from '@/components/Message'
import RatingCount from '@/components/RatingCount'
import StartEndDate from '@/components/StartEndDate'
import StudentListAdd from '@/components/StudentLists/StudentListAdd'
import StudentListDelete from '@/components/StudentLists/StudentListDelete'
import StudentListEdit from '@/components/StudentLists/StudentListEdit'
import StudentLists from '@/components/StudentLists/StudentLists'
import {
  StudentSelectType,
  StudentSelectTypeCustom,
  StudentSelectTypeFile,
  StudentSelectTypeList,
} from '@/components/StudentSelectType'
import { DATE_FORMAT, EXAMPLE_RATING, MAX_RATING, MIN_RATING } from '@/constants/config'
import useProcessing from '@/hooks/useProcessing'
import useActionStore from '@/stores/useActionStore'
import useAppStore from '@/stores/useAppStore'
import useDateStore from '@/stores/useDateStore'
import useFormErrorStore from '@/stores/useFormErrorStore'
import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import useStudentsStore from '@/stores/useStudentsStore'
import useToastStore from '@/stores/useToastStore'
import type { ToastType } from '@/types'
import {
  cellAbsent,
  cellRemoveSelected,
  cellsNarrow,
  fillPercent,
  getCells,
  getCellsWithDates,
  getRows,
  isCellInDates,
  rating,
  ratingComment,
  studentName,
  taskRating,
  toolPanel,
} from '@/utils/gradebook'
import { beep, shuffleArray } from '@/utils/helper'

function App() {
  const {
    showModalBasic,
    showModalStudentLists,
    showModalStudentListAdd,
    showModalStudentListEdit,
    showModalStudentListDelete,
    setShowModalBasic,
  } = useModalStoreStore()

  const {
    isProcessing,
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

  const { dates, minDate, maxDate, fileDate, startDate, endDate, setFileDate } = useDateStore()
  const { ratingError, setRatingError, percentError, setPercentError } = useFormErrorStore()
  const { selectedStudents, fileStudents, setSelectedStudents } = useStudentsStore()

  const {
    isStudentSelectTypeAll,
    isStudentSelectTypeList,
    isStudentSelectTypeFile,
    isStudentSelectTypeCustom,
    selectedStudentLists,
    studentLists,
  } = useStudentListsStore()

  const { toast, setToast } = useToastStore()

  const { action, setAction, isSetRating, isCopyRating, isDeleteRating, isCountRating } =
    useActionStore()
  const { processItem } = useProcessing()

  const filterDate = (date: Date) => {
    return dates.some((d) => d.toDateString() === date.toDateString())
  }

  const handleStop = (status: ToastType) => {
    setProcessing(false)
    setSubmitting(false)
    toolPanel(false)
    cellRemoveSelected(false)
    setToast(status)
    setSelectedStudents([])
    setSelectedStudents([])
    beep()
  }

  const handleClose = () => {
    setSubmitting(false)
    toolPanel(false)
    cellRemoveSelected(false)

    if (isProcessing) {
      setShowModalBasic(true)
      handleStop('basicCancel')
    } else {
      setShowModalBasic(false)
      setSelectedStudents([])
      setSelectedStudents([])
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!minDate || !maxDate || !startDate || !endDate) {
      throw new Error('Dates are not defined')
    }

    toolPanel(true)
    cellRemoveSelected(true)

    let students: string[] = []
    let cellsWithDates = getCellsWithDates(dates)

    if (isStudentSelectTypeList && selectedStudentLists.length > 0) {
      students = selectedStudentLists.flatMap((studentList) => studentList.students)
    }

    if (isStudentSelectTypeCustom && selectedStudents.length > 0) {
      students = selectedStudents
    }

    if (isCopyRating) {
      setSubmitting(true)
      setProcessing(true)
      setCurrentPercent(0)
      setMaxPercent(100)

      const taskCells: HTMLElement[] = []
      const cellsRating: {
        cell: HTMLElement
        rating: number
      }[] = []

      if (isStudentSelectTypeList && selectedStudentLists.length > 0) {
        selectedStudentLists.forEach((studentList) => {
          for (const row of getRows()) {
            if (studentList.students.some((student) => student === studentName(row))) {
              for (const cell of [...cellsNarrow(row)]) {
                if (
                  isCellInDates(cellsWithDates, cell, startDate, endDate) &&
                  ratingComment(cell as HTMLElement) &&
                  taskRating(cell as HTMLElement) &&
                  !cellAbsent(cell as HTMLElement)
                ) {
                  taskCells.push(cell as HTMLElement)
                }
              }
            }
          }
        })
      }

      if (isStudentSelectTypeCustom && selectedStudents.length > 0) {
        for (const row of getRows()) {
          if (selectedStudents.find((student) => student === studentName(row))) {
            for (const cell of [...cellsNarrow(row)]) {
              if (
                isCellInDates(cellsWithDates, cell, startDate, endDate) &&
                ratingComment(cell as HTMLElement) &&
                taskRating(cell as HTMLElement) &&
                !cellAbsent(cell as HTMLElement)
              ) {
                taskCells.push(cell as HTMLElement)
              }
            }
          }
        }
      }

      if (isStudentSelectTypeAll) {
        for (const cell of getCells()) {
          if (
            isCellInDates(cellsWithDates, cell, startDate, endDate) &&
            ratingComment(cell as HTMLElement) &&
            taskRating(cell as HTMLElement) &&
            !cellAbsent(cell as HTMLElement)
          ) {
            taskCells.push(cell as HTMLElement)
          }
        }
      }

      for (const taskCell of taskCells) {
        const tasksRating = rating(taskCell)
        const prevCell = taskCell.previousElementSibling as HTMLElement | null

        if (prevCell && tasksRating && !rating(prevCell)) {
          cellsRating.push({
            cell: prevCell,
            rating: tasksRating,
          })
        }
      }

      const percentPerItem = Math.round(useAppStore.getState().maxPercent / cellsRating.length)

      for (const cellRating of cellsRating) {
        await processItem({
          cell: cellRating.cell,
          minRating: cellRating.rating,
          maxRating: cellRating.rating,
        })

        let percent = useAppStore.getState().currentPercent + percentPerItem

        if (percent > useAppStore.getState().maxPercent) {
          percent = useAppStore.getState().maxPercent
        }

        setCurrentPercent(percent)

        if (!useAppStore.getState().isProcessing) {
          return
        }
      }

      handleStop('basicDone')
    }

    if (isSetRating && isStudentSelectTypeFile) {
      if (!fileDate) {
        throw new Error('Dates are not defined')
      }
      cellsWithDates = getCellsWithDates(dates, true)
      setSubmitting(true)
      setProcessing(true)
      setCurrentPercent(0)
      setMaxPercent(100)

      const cellsRating: {
        cell: HTMLElement
        rating: number
      }[] = []

      if (fileStudents && fileStudents.length > 0) {
        for (const row of getRows()) {
          const studentRating = fileStudents.find(
            (fileStudent) => fileStudent.name === studentName(row)
          )

          if (studentRating) {
            for (const cell of [...cellsNarrow(row)]) {
              if (
                isCellInDates(cellsWithDates, cell, fileDate, fileDate) &&
                ratingComment(cell as HTMLElement) &&
                !rating(cell as HTMLElement) &&
                !cellAbsent(cell as HTMLElement)
              ) {
                cellsRating.push({
                  cell,
                  rating: studentRating.rating,
                })
              }
            }
          }
        }
      }

      const percentPerItem = Math.round(useAppStore.getState().maxPercent / cellsRating.length)

      for (const cellRating of cellsRating) {
        await processItem({
          cell: cellRating.cell,
          minRating: cellRating.rating,
          maxRating: cellRating.rating,
        })

        let percent = useAppStore.getState().currentPercent + percentPerItem

        if (percent > useAppStore.getState().maxPercent) {
          percent = useAppStore.getState().maxPercent
        }

        setCurrentPercent(percent)

        if (!useAppStore.getState().isProcessing) {
          return
        }
      }

      handleStop('basicDone')
    }

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

      if (isStudentSelectTypeList && selectedStudentLists.length > 0) {
        selectedStudentLists.forEach((studentList) => {
          for (const row of getRows()) {
            if (studentList.students.some((student) => student === studentName(row))) {
              for (const cell of [...cellsNarrow(row)]) {
                if (
                  isCellInDates(cellsWithDates, cell, startDate, endDate) &&
                  ratingComment(cell as HTMLElement) &&
                  !cellAbsent(cell as HTMLElement) &&
                  !rating(cell as HTMLElement)
                ) {
                  emptyCells.push(cell as HTMLElement)
                }
              }
            }
          }
        })
      }

      if (isStudentSelectTypeCustom && selectedStudents.length > 0) {
        for (const row of getRows()) {
          if (selectedStudents.find((student) => student === studentName(row))) {
            for (const cell of [...cellsNarrow(row)]) {
              if (
                isCellInDates(cellsWithDates, cell, startDate, endDate) &&
                ratingComment(cell as HTMLElement) &&
                !cellAbsent(cell as HTMLElement) &&
                !rating(cell as HTMLElement)
              ) {
                emptyCells.push(cell as HTMLElement)
              }
            }
          }
        }
      }

      if (isStudentSelectTypeAll) {
        for (const cell of getCells()) {
          if (
            isCellInDates(cellsWithDates, cell, startDate, endDate) &&
            ratingComment(cell as HTMLElement) &&
            !cellAbsent(cell as HTMLElement) &&
            !rating(cell as HTMLElement)
          ) {
            emptyCells.push(cell as HTMLElement)
          }
        }
      }

      setCurrentPercent(fillPercent(students, cellsWithDates, startDate, endDate))

      for (const cell of shuffleArray(emptyCells)) {
        await processItem({
          cell,
          minRating,
          maxRating,
        })

        const percent = fillPercent(students, cellsWithDates, startDate, endDate)

        setCurrentPercent(percent)

        if (!useAppStore.getState().isProcessing) {
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
              isCellInDates(cellsWithDates, cell, startDate, endDate) &&
              ratingComment(cell as HTMLElement) &&
              !cellAbsent(cell as HTMLElement) &&
              rating(cell as HTMLElement)
            ) {
              cells.push(cell as HTMLElement)
            }
          } else {
            if (
              isCellInDates(cellsWithDates, cell, startDate, endDate) &&
              ratingComment(cell as HTMLElement) &&
              !cellAbsent(cell as HTMLElement) &&
              removeRating === rating(cell as HTMLElement)
            ) {
              cells.push(cell as HTMLElement)
            }
          }
        }
      }

      if (isStudentSelectTypeList && selectedStudentLists.length > 0) {
        selectedStudentLists.forEach((studentList) => {
          for (const row of getRows()) {
            if (studentList.students.some((student) => student === studentName(row))) {
              processRow(row)
            }
          }
        })
      }

      if (isStudentSelectTypeCustom && selectedStudents.length > 0) {
        for (const row of getRows()) {
          if (selectedStudents.some((student) => student === studentName(row))) {
            processRow(row)
          }
        }
      }

      if (isStudentSelectTypeAll) {
        for (const row of getRows()) {
          processRow(row)
        }
      }

      setCurrentPercent(fillPercent(students, cellsWithDates, startDate, endDate))

      for (const cell of cells) {
        await processItem({
          cell,
          remove: true,
        })

        setCurrentPercent(fillPercent(students, cellsWithDates, startDate, endDate))

        if (!useAppStore.getState().isProcessing) {
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
        <Modal show={showModalBasic} onHide={handleClose} centered animation>
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
              <X width="16" height="16" />
              <span className="align-middle ms-1">Закрити</span>
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {isProcessing ? (
        <Modal show={showModalBasic} onHide={handleClose} centered animation>
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
              <X width="16" height="16" />
              <span className="align-middle ms-1">Зупинити</span>
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={showModalBasic} onHide={handleClose} centered animation>
          <Form onSubmit={handleSubmit}>
            <Header />
            <Modal.Body>
              <Card>
                <Card.Body>
                  <Form.Label className="fw-bold">Дія</Form.Label>
                  <Form.Check
                    type="switch"
                    label="Скопіювати учням оцінки"
                    onChange={(e) =>
                      e.target.checked ? setAction('copyRating') : setAction(false)
                    }
                    checked={isCopyRating}
                    disabled={isSubmitting}
                  />
                  <Form.Check
                    type="switch"
                    label="Поставити учням оцінки"
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
              {isCopyRating && (
                <>
                  <Description>
                    <p>
                      <span className="fw-bold">Скопіювати учням оцінки</span> — Дозволяє скопіювати{' '}
                      виставлені оцінки за <span className="fw-bold">завдання</span>, як за{' '}
                      <span className="fw-bold">заняття</span>, на цій сторінці для обраних учнів.
                    </p>
                    <p>Також, можна обрати, з якої по яку дату скопіювати оцінки.</p>
                  </Description>
                  <Card className="mt-3">
                    <Card.Body>
                      <StudentSelectType />
                      <Form.Text>
                        <ul className="mt-3 mb-0">
                          <li>
                            <span className="fw-bold">Обрати всіх учнів</span> — дозволяє скопіювати
                            оцінки
                            <span className="fw-bold"> усім учням</span>
                          </li>
                          <li>
                            <span className="fw-bold">Використати список учнів</span> — дозволяє
                            скопіювати оцінки учням з обраного списку
                          </li>
                          <li>
                            <span className="fw-bold">Використати список учнів з файлу</span> —
                            дозволяє скопіювати оцінки учням з обраного файлу
                          </li>
                          <li>
                            <span className="fw-bold">Обрати учнів зі списку</span> — дозволяє
                            скопіювати оцінки <span className="fw-bold">окремим обраним учням</span>
                          </li>
                        </ul>
                      </Form.Text>
                    </Card.Body>
                  </Card>
                  {isStudentSelectTypeList && (
                    <StudentSelectTypeList>
                      <span className="fw-bold">Оберіть список учнів</span>, яким бажаєте скопіювати
                      оцінки
                    </StudentSelectTypeList>
                  )}
                  {isStudentSelectTypeCustom && (
                    <StudentSelectTypeCustom>
                      <span className="fw-bold">Оберіть учнів</span> яким бажаєте скопіювати оцінки
                    </StudentSelectTypeCustom>
                  )}
                  <Card className="mt-3">
                    <Card.Body>
                      <StartEndDate />
                    </Card.Body>
                  </Card>
                </>
              )}
              {isSetRating && (
                <>
                  <Description>
                    <p>
                      <span className="fw-bold">Поставити учням оцінки</span> — Дозволяє заповнити{' '}
                      <span className="fw-bold">НЕ</span> виставлені оцінки на цій сторінці для
                      обраних учнів.
                    </p>
                    <p>
                      Можна обрати, які оцінки ставити (від мінімальної до максимальної; обрати з
                      якої по яку дату ставити оцінки), також можна обрати бажаний відсоток
                      заповнення від загальної кількості оцінок.
                    </p>
                    <p>
                      Оцінки будь виставлені у <span className="fw-bold">випадковому</span> порядку.
                    </p>
                  </Description>
                  <Card className="mt-3">
                    <Card.Body>
                      <StudentSelectType />
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
                    <StudentSelectTypeList>
                      <span className="fw-bold">Оберіть список учнів</span>, яким бажаєте виставити
                      оцінки
                    </StudentSelectTypeList>
                  )}
                  {isStudentSelectTypeFile && (
                    <>
                      <StudentSelectTypeFile>
                        <p>
                          <span className="fw-bold">Оберіть файл зі списком учнів</span>, яким
                          бажаєте виставити оцінки
                        </p>
                        <p>
                          Дозволено типи файлів: <span className="fw-bold">.csv, .xlsx, .xls</span>
                        </p>
                        <p>
                          Підтримуються файли з ресурсу <a href="https://vseosvita.ua" target="_blank">Всеосвіта</a>, а саме <span className="fw-bold">результати тестування</span>
                        </p>
                      </StudentSelectTypeFile>
                      <Card className="mt-3">
                        <Card.Body>
                          <Form.Group>
                            <Form.Label className="fw-bold">Дата</Form.Label>
                            <InputGroup className="mb-2">
                              <DatePicker
                                filterDate={filterDate}
                                minDate={minDate}
                                maxDate={endDate}
                                selected={fileDate}
                                onChange={(date) => setFileDate(date ?? undefined)}
                                className="form-control"
                                dateFormat={DATE_FORMAT}
                                placeholderText="Оберіть дату"
                                required
                              />
                            </InputGroup>
                            <Form.Text>
                              Оберіть <span className="fw-bold">дату </span>, для якої бажаєте
                              поставити оцінки
                            </Form.Text>
                          </Form.Group>
                        </Card.Body>
                      </Card>
                    </>
                  )}
                  {isStudentSelectTypeCustom && (
                    <StudentSelectTypeCustom>
                      <span className="fw-bold">Оберіть учнів</span> яким бажаєте виставити оцінки
                    </StudentSelectTypeCustom>
                  )}
                </>
              )}

              {isSetRating &&
                (isStudentSelectTypeList ||
                  isStudentSelectTypeCustom ||
                  isStudentSelectTypeAll) && (
                  <>
                    <Card className="mt-3">
                      <Card.Body>
                        <StartEndDate />
                      </Card.Body>
                    </Card>
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
                                isSubmitting ||
                                (isStudentSelectTypeList && studentLists.length === 0)
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
                            <span className="fw-bold">Мінімальна оцінка</span>, яку бажаєте
                            поставити, наприклад, <span className="fw-bold">{EXAMPLE_RATING}</span>
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
                                isSubmitting ||
                                (isStudentSelectTypeList && studentLists.length === 0)
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
                                isSubmitting ||
                                (isStudentSelectTypeList && studentLists.length === 0)
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
                            <span className="fw-bold">Максимальний відсоток заповнення</span>{' '}
                            оцінок, наприклад, зараз є заповнення на{' '}
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
                      Можна обрати, яку саме оцінку видалити, наприклад, тільки{' '}
                      <span className="fw-bold">{EXAMPLE_RATING}</span>, також можна обрати з якої
                      по яку дату видалити оцінку.
                    </p>
                  </Description>
                  <Card className="mt-3">
                    <Card.Body>
                      <StudentSelectType />
                      <Form.Text>
                        <ul className="mt-3 mb-0">
                          <li>
                            <span className="fw-bold">Обрати всіх учнів</span> — дозволяє видалити
                            оцінки
                            <span className="fw-bold"> усім учням</span>
                          </li>
                          <li>
                            <span className="fw-bold">Використати список учнів</span> — дозволяє
                            видалити оцінки учням з обраного списку
                          </li>
                          <li>
                            <span className="fw-bold">Обрати учнів зі списку</span> — дозволяє
                            видалити оцінки <span className="fw-bold">окремим обраним учням</span>
                          </li>
                        </ul>
                      </Form.Text>
                    </Card.Body>
                  </Card>

                  {isStudentSelectTypeList && (
                    <StudentSelectTypeList>
                      <span className="fw-bold">Оберіть список учнів</span>, яким бажаєте видалити
                      оцінки
                    </StudentSelectTypeList>
                  )}
                  {isStudentSelectTypeCustom && (
                    <StudentSelectTypeCustom>
                      <span className="fw-bold">Оберіть учнів</span>, яким бажаєте видалити оцінки
                    </StudentSelectTypeCustom>
                  )}
                  <Card className="mt-3">
                    <Card.Body>
                      <StartEndDate />
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
                <X width="16" height="16" />
                <span className="align-middle ms-1">Закрити</span>
              </Button>
              <Button
                disabled={
                  !action || isSubmitting || (isStudentSelectTypeList && studentLists.length === 0)
                }
                variant="primary"
                type="submit"
              >
                <Play width="16" height="16" />
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
