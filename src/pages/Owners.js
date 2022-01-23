import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"
import AddIcon from "@mui/icons-material/Add"
import OwnerRow from "../components/OwnerRow"
import OwnerAddModal from "../components/OwnerAddModal"



function Owners() {
  const { owners} = useContext(StoriesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Owners</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Owner
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "18%" }}>Story</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "18%" }}>Type</th>
            <th style={{ width: "36%" }}>Owners</th>
          </tr>
        </thead>
        <tbody>
          {owners.map(owner => (
            <OwnerRow key={owner._id} owner={owner} />
          ))}
        </tbody>
       
      </Table>
      <OwnerAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Owners
