import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Stories from "./pages/Stories"
import StoriesContext from "./utils/StoriesContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Genres from "./pages/Genres"
import Owners from "./pages/Owners"

function App() {
  const [stories, setStories] = useState([])
  const [genres, setGenres] = useState([])
  const [owners, setOwners] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getStories = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/stories")
    setStories(response.data)
  }

  const getGenres = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/genres")
    setGenres(response.data)
  }
  const getOwners = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/owners")
    setOwners(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardStories,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getStories()
    getGenres()
    getOwners()
    if (localStorage.tokenDashboardStories) getUsers()
  }, [])

  const deleteStory = async storyId => {
    try {
      await axios.delete(`https://p3-api-1.herokuapp.com/api/stories/${storyId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      toast.success("story deleted")
      getStories()
      getOwners()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://p3-api-1.herokuapp.com/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardStories = response.data
      toast.success("login success")
      getUsers()
      navigate("/stories")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editStory = async (e, storyId) => {
    e.preventDefault()
    try {
      const form = e.target
      const storyBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        body: form.elements.body.value,
        genres: form.elements.genres.value,
        owner: form.elements.owner.value,
      }
      await axios.put(`https://p3-api-1.herokuapp.com/api/stories/${storyId}`, storyBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getStories()
      getOwners()

      toast.success("edit story success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addStory = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const storyBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        body: form.elements.body.value,
        genres: form.elements.genres.value,
        owner: form.elements.owner.value,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/stories`, storyBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getStories()
      getOwners()
      toast.success("add story success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenDashboardStories")
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`https://p3-api-1.herokuapp.com/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addGenre = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const genreBody = {
        name: form.elements.name.value,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/genres`, genreBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getGenres()
      toast.success("add genre success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editGenre = async (e, genreId) => {
    e.preventDefault()
    try {
      const form = e.target

      const genreBody = {
        name: form.elements.name.value,
      }
      await axios.put(`https://p3-api-1.herokuapp.com/api/genres/${genreId}`, genreBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getGenres()
      toast.success("edit genre success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteGenre = async genreId => {
    try {
      await axios.delete(`https://p3-api-1.herokuapp.com/api/genres/${genreId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      toast.success("genre deleted")
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addOwner = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const ownerBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/owners`, ownerBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getOwners()
      toast.success("add owner success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editOwner = async (e, ownerId) => {
    e.preventDefault()
    try {
      const form = e.target

      const ownerBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.put(`https://p3-api-1.herokuapp.com/api/owners/${ownerId}`, ownerBody, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      getOwners()
      toast.success("edit owner success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteOwner = async ownerId => {
    try {
      await axios.delete(`https://p3-api-1.herokuapp.com/api/owners/${ownerId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardStories,
        },
      })
      toast.success("owner deleted")
      getOwners()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    stories,
    genres,
    owners,
    addOwner,
    editOwner,
    deleteOwner,
    users,
    deleteStory,
    login,
    editStory,
    addStory,
    logout,
    addAdmin,
    deleteUser,
    addGenre,
    editGenre,
    deleteGenre,
  }

  return (
    <StoriesContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/stories"
              element={localStorage.tokenDashboardStories ? <Stories /> : <Navigate to="/login" />}
            />
            <Route path="/users" element={localStorage.tokenDashboardStories ? <Users /> : <Navigate to="/login" />} />
            <Route
              path="/genres"
              element={localStorage.tokenDashboardStories ? <Genres /> : <Navigate to="/login" />}
            />
            <Route
              path="/owners"
              element={localStorage.tokenDashboardStories ? <Owners /> : <Navigate to="/login" />}
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </StoriesContext.Provider>
  )
}

export default App
