import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function OwnerViewModal(props) {
  const { show, setShow, owner } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View owner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {owner.firstName} {owner.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={owner.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {owner.type}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
          <strong>Stories:</strong>
          <ListGroup>
            {owner.stories.map(story => (
              <ListGroup.Item>
                <Image src={story.poster} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>{story.title}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OwnerViewModal