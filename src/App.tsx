import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Atom } from 'lucide-react'

function App() {
  const handleClose = () => window.location.reload()

  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="">
              <Atom size={24} />
              <span>Human Automator</span>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This modal is redered entirely with React components.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрити
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Почати
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
