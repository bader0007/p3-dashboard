import { useState } from "react"
import { Button } from "react-bootstrap"
import GenreDeleteModal from "./GenreDeleteModal"
import GenreEditModal from "./GenreEditModal"

function GenreRow(props) {
  const { genre } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{genre._id}</td>
      <td>{genre.name}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <GenreDeleteModal show={deleteShow} setShow={setDeleteShow} genreId={genre._id} />
      <GenreEditModal show={editShow} setShow={setEditShow} genre={genre} />
    </tr>
  )
}

export default GenreRow
