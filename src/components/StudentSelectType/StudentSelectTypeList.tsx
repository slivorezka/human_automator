import { Pencil, Plus } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Select, { type MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import useAppStore from '@/stores/useAppStore'
import useModalStoreStore from '@/stores/useModalStoreStore'
import useStudentListsStore from '@/stores/useStudentListsStore'
import type { SelectOption } from '@/types'
import { getClassId } from '@/utils/gradebook'
import { getSelectListOption } from '@/utils/helper'

export function StudentSelectTypeList({ children }: { children?: ReactNode }) {
  const animatedComponents = makeAnimated()
  const classId = getClassId()
  const { isSubmitting } = useAppStore()
  const { setShowModalStudentLists, setShowModalStudentListAdd } = useModalStoreStore()
  const { selectedStudentLists, handleSelectedStudentLists, studentLists } = useStudentListsStore()
  const classStudentLists = studentLists.filter((studentList) => studentList.classId === classId)

  return (
    <>
      {classStudentLists?.length > 0 ? (
        <>
          <Card className="mt-3">
            <Card.Body>
              <Form.Label className="fw-bold">Списки учнів</Form.Label>
              <Select
                className="mb-2"
                placeholder="Оберіть список учнів"
                defaultValue={getSelectListOption(selectedStudentLists)}
                options={getSelectListOption(classStudentLists)}
                onChange={(options) =>
                  handleSelectedStudentLists(options as MultiValue<SelectOption>)
                }
                isMulti
                required
                closeMenuOnSelect
                components={animatedComponents}
                isDisabled={isSubmitting}
              />
              <Form.Text>{children}</Form.Text>
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
                  <Plus width="14" height="14" />
                  <span className="align-middle ms-1">Створити список учнів</span>
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setShowModalStudentLists(true)
                  }}
                >
                  <Pencil width="14" height="14" />
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
                  <Plus width="14" height="14" />
                  <span className="align-middle ms-1">Створити список учнів</span>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
