import { Bot } from 'lucide-react'
import type { ReactNode } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import type { Variant } from 'react-bootstrap/types'

import { TIMING } from '@/constants/config'

function Message({
  children,
  type,
  onClose,
}: {
  children?: ReactNode
  type: Variant
  onClose: () => void
}) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show delay={TIMING.DESTROY_TOAST_APP_DELAY} autohide bg={type}>
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
