import type { ReactNode } from 'react'
import { Card, Form } from 'react-bootstrap'
import Select, { type MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import useAppStore from '../../stores/useAppStore'
import useStudentsStore from '../../stores/useStudentsStore'
import type { SelectOption } from '../../types'
import { getSelectOption } from '../../utils/helper'

export function StudentSelectTypeCustom({ children }: { children?: ReactNode }) {
  const animatedComponents = makeAnimated()
  const { isSubmitting } = useAppStore()
  const { studentsList, handleSelectedStudents } = useStudentsStore()

  return (
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
          isDisabled={isSubmitting}
        />
        <Form.Text>{children}</Form.Text>
      </Card.Body>
    </Card>
  )
}
