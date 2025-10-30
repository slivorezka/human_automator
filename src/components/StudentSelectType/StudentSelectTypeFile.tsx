import type { ReactNode } from 'react'
import { Card, Form } from 'react-bootstrap'

import { MAX_RATING, MIN_RATING } from '@/constants/config'
import useStudentsStore from '@/stores/useStudentsStore'
import type { FileStudent } from '@/types'
import { parseBrowserFile } from '@/utils/helper'

export function StudentSelectTypeFile({ children }: { children?: ReactNode }) {
  const { setFileStudents } = useStudentsStore()
  return (
    <Card className="mt-3">
      <Card.Body>
        <Form.Label className="fw-bold">Оберіть файл</Form.Label>
        <Form.Control
          required
          className="mb-2"
          type="file"
          accept=".csv, .xlsx, .xls"
          onChange={async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]

            if (file) {
              const rows = await parseBrowserFile(file)

              if (rows && rows.length > 0) {
                const fileStudents: FileStudent[] = rows
                  .map((row) => {
                    const name = row['ПІБ/ПІМ учня']?.toString().trim()
                    const rating = row['Оцінка учня'] ? Number(row['Оцінка учня']) : undefined

                    if (
                      name &&
                      rating &&
                      !isNaN(rating) &&
                      rating >= MIN_RATING &&
                      rating <= MAX_RATING
                    ) {
                      return {
                        name,
                        rating,
                      }
                    }
                    return undefined
                  })
                  .filter((student): student is FileStudent => student !== undefined)

                setFileStudents(fileStudents)
              }
            }
          }}
        />
        <Form.Text>{children}</Form.Text>
      </Card.Body>
    </Card>
  )
}
