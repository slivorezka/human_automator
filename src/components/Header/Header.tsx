import { Bot } from 'lucide-react'
import { Modal } from 'react-bootstrap'

function Header() {
  return (
    <Modal.Header className="justify-content-center" closeButton>
      <Modal.Title as="h5">
        <div className="d-flex gap-1">
          <Bot /> Human Automator
        </div>
      </Modal.Title>
    </Modal.Header>
  )
}

export default Header
