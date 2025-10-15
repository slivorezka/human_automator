import type { ReactNode } from 'react'
import { Accordion } from 'react-bootstrap'

function Description({ children }: { children?: ReactNode }) {
  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="fw-bold">Опис</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="fst-italic">{children}</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Description
