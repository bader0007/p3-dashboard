import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function StoryViewModal(props) {
  const { show, setShow, story } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {story.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {story.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={story.poster} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Body:</strong> {story.body}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Rating:</strong> {story.ratingAverage}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Genres:</strong>

            {story.genres?.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Owner:</strong>
            <Image src={story.owner?.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
            <span style={{ marginLeft: 10 }}>
              {story.owner?.firstName} {story.owner?.lastName}
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StoryViewModal
