import { useState } from "react"
import { Button } from "react-bootstrap"
import OwnerDeleteModal from "./OwnerDeleteModal"
import OwnerEditModal from "./OwnerEditModal"
import OwnerViewModal from "./OwnerViewModal"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"

function OwnerRow(props) {
  const { owner } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{owner._id}</td>
      <td>
        {owner.firstName} {owner.lastName}
      </td>
      <td>
        {owner.story} 
      </td>
      <td>
        <img src={owner.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{owner.type}</td>
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
      <OwnerViewModal show={viewShow} setShow={setViewShow} owner={owner} />
      <OwnerEditModal show={editShow} setShow={setEditShow} owner={owner} />
      <OwnerDeleteModal show={deleteShow} setShow={setDeleteShow} ownerId={owner._id} />
    </tr>
  )
}

export default OwnerRow