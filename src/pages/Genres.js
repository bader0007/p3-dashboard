import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"
import StoryCell from "../components/StoryRow"
import AddIcon from "@mui/icons-material/Add"
import StoryAddModal from "../components/StoryAddModal"
import GenreRow from "../components/GenreRow"
import GenreAddModal from "../components/GenreAddModal"

function Genres() {
  const { genres } = useContext(StoriesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Genres</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>Name</th>
            <th style={{ width: "36%" }}>Genres</th>
          </tr>
        </thead>
        <tbody>
          {genres.map(genre => (
            <GenreRow key={genre._id} genre={genre} />
          ))}
        </tbody>
      </Table>
      <GenreAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Genres
