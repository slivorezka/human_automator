import { Form } from 'react-bootstrap'
import Select, { type SingleValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import useAppStore from '@/stores/useAppStore'
import useModalStoreStore from '@/stores/useHomeTaskDateStore'
import type { HomeTaskDateOption, SelectOption } from '@/types'

const homeTaskDateOptions: HomeTaskDateOption[] = [
  'Наступний урок',
  'Через урок',
  'До кінця теми',
  'До кінця семестру',
]

function HomeTaskDateList() {
  const animatedComponents = makeAnimated()
  const { isSubmitting } = useAppStore()
  const { handleSelectedHomeTaskDateList } = useModalStoreStore()

  return (
    <>
      <Form.Label className="fw-bold">Дата здачі</Form.Label>
      <Select
        className="mb-2"
        placeholder="Оберіть дату здачі завдання"
        options={homeTaskDateOptions.map((option) => ({ label: option, value: option }))}
        onChange={(options) => handleSelectedHomeTaskDateList(options as SingleValue<SelectOption>)}
        required
        closeMenuOnSelect
        components={animatedComponents}
        isDisabled={isSubmitting}
      />
    </>
  )
}

export default HomeTaskDateList
