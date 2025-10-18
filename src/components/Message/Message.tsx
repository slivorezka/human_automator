import { Bot } from 'lucide-react'
import type { ReactNode } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import type { Variant } from 'react-bootstrap/types'

function Message({
  children,
  show,
  type,
  onClose,
}: {
  children?: ReactNode
  show: boolean
  type: Variant
  onClose: () => void
}) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show={show} delay={3000} autohide bg={type}>
        <Toast.Header className="text-white justify-content-center" closeButton>
          <strong className="d-flex align-items-center gap-1">
            <Bot /> Human Automator
          </strong>
        </Toast.Header>
        <Toast.Body className="text-white fw-bold text-center">{children}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default Message
