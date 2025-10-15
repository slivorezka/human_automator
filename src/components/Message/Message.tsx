import type { ReactNode } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { Bot } from 'lucide-react'

function Message({
  children,
  show,
  onClose,
}: {
  children?: ReactNode
  show: boolean
  onClose: () => void
}) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show={show} delay={10000} autohide bg="danger">
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
