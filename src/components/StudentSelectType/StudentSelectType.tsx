import { Form } from 'react-bootstrap'

import useAppStore from '@/stores/useAppStore'
import useStudentListsStore from '@/stores/useStudentListsStore'

export function StudentSelectType() {
  const { isSubmitting } = useAppStore()

  const {
    isStudentSelectTypeAll,
    isStudentSelectTypeList,
    isStudentSelectTypeFile,
    isStudentSelectTypeCustom,
    setStudentSelectType,
  } = useStudentListsStore()

  return (
    <>
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
          e.target.checked ? setStudentSelectType('list') : setStudentSelectType('all')
        }
        checked={isStudentSelectTypeList}
        disabled={isSubmitting}
      />
      <Form.Check
        type="switch"
        label="Використати список учнів з файлу"
        onChange={(e) =>
          e.target.checked ? setStudentSelectType('file') : setStudentSelectType('all')
        }
        checked={isStudentSelectTypeFile}
        disabled={isSubmitting}
      />
      <Form.Check
        type="switch"
        label="Обрати учнів зі списку"
        onChange={(e) =>
          e.target.checked ? setStudentSelectType('custom') : setStudentSelectType('all')
        }
        checked={isStudentSelectTypeCustom}
        disabled={isSubmitting}
      />
    </>
  )
}
