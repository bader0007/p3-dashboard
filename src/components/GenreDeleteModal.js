import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function GenreDeleteModal(props) {
  const { deleteGenre } = useContext(StoriesContext)
  const { show, setShow, genreId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this genre ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteGenre(genreId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreDeleteModal
