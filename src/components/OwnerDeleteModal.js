import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function OwnerDeleteModal(props) {
  const { deleteOwner } = useContext(StoriesContext)
  const { show, setShow, ownerId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Owner</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this owner ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteOwner(ownerId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OwnerDeleteModal 