import { useState } from "react"
import { Button } from "react-bootstrap"
import StoryDeleteModal from "./StoryDeleteModal"
import StoryEditModal from "./StoryEditModal"
import StoryViewModal from "./StoryViewModal"

function StoryRow(props) {
  const { story} = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{story._id}</td>
      <td>{story.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{story.description}</td>
      <td>
        <img src={story.poster} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{story.ratingAverage}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <StoryViewModal show={viewShow} setShow={setViewShow} story={story} />
      <StoryDeleteModal show={deleteShow} setShow={setDeleteShow} storyId={story._id} />
      <StoryEditModal show={editShow} setShow={setEditShow} story={story} />
    </tr>
  )
}

export default StoryRow
