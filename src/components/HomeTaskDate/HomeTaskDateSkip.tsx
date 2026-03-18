import { Form } from 'react-bootstrap'

import useAppStore from '@/stores/useAppStore'
import useHomeTaskDateStore from '@/stores/useHomeTaskDateStore.ts'

function HomeTaskDateSkip() {
  const { isSubmitting } = useAppStore()
  const { isSkipHomeTaskDate, setIsSkipHomeTaskDate } = useHomeTaskDateStore()

  return (
    <Form.Check
      type="switch"
      label="Пропустити завдання з визначеною датою"
      checked={isSkipHomeTaskDate}
      onChange={(e) => setIsSkipHomeTaskDate(e.target.checked)}
      disabled={isSubmitting}
    />
  )
}

export default HomeTaskDateSkip
