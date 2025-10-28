import { Form, InputGroup } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

import { DATE_FORMAT } from '@/constants/config'
import useDateStore from '@/stores/useDateStore'

function StartEndDate() {
  const { dates, minDate, maxDate, startDate, endDate, setStartDate, setEndDate } = useDateStore()
  const filterDate = (date: Date) => {
    return dates.some((d) => d.toDateString() === date.toDateString())
  }

  return (
    <>
      <Form.Group>
        <Form.Label className="fw-bold">Дата початку</Form.Label>
        <InputGroup className="mb-2">
          <DatePicker
            filterDate={filterDate}
            minDate={minDate}
            maxDate={endDate}
            selected={startDate}
            onChange={(date) => setStartDate(date ?? undefined)}
            className="form-control"
            dateFormat={DATE_FORMAT}
            placeholderText="Оберіть дату початку"
            required
          />
        </InputGroup>
        <Form.Text>
          Оберіть <span className="fw-bold">дату початку</span>, з якої бажаєте діяти, включно
        </Form.Text>
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label className="fw-bold">Дата закінчення</Form.Label>
        <InputGroup className="mb-2">
          <DatePicker
            filterDate={filterDate}
            minDate={startDate}
            maxDate={maxDate}
            selected={endDate}
            onChange={(date) => setEndDate(date ?? undefined)}
            className="form-control"
            dateFormat={DATE_FORMAT}
            placeholderText="Оберіть дату закінчення"
            required
          />
        </InputGroup>
        <Form.Text>
          Оберіть <span className="fw-bold">дату закінчення</span>, до якої бажаєте діяти, включно
        </Form.Text>
      </Form.Group>
    </>
  )
}

export default StartEndDate
