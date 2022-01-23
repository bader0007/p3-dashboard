import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"
import AddIcon from "@mui/icons-material/Add"
import StoryAddModal from "../components/StoryAddModal"
import StoryRow from "../components/StoryRow"

function Stories() {
  const { stories } = useContext(StoriesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Stories</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>Poster</th>
            <th style={{ width: "9%" }}>Rating</th>
            <th style={{ width: "36%" }}>Stories</th>
          </tr>
        </thead>
        <tbody>
          {stories.map(story => (
            <StoryRow key={story._id} story={story} />
          ))}
        </tbody>
      </Table>
      <StoryAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Stories
