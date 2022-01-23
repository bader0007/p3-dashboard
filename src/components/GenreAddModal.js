import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function GenreAddModal(props) {
  const { show, setShow, genre } = props
  const { addGenre } = useContext(StoriesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addGenre}>
        <Modal.Header closeButton>
          <Modal.Title>Add genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add genre
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default GenreAddModal
