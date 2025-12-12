import { useState, useEffect } from 'react'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'
import { DataProvider } from '../context/DataContext'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/feedback")
      setPosts(res.data)
    }
    fetchData()
  }, [])

  // Search filter
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filtered)
  }, [posts, search])

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1
    const datetime = format(new Date(), "MMM dd, yyyy pp")

    const newObj = { id, title, datetime, body }

    await api.post("/feedback", newObj)

    const newList = [...posts, newObj]
    setPosts(newList)

    setTitle("")
    setBody("")
  }

  return (
    <>    
<DataProvider>
      <Search search={search} setSearch={setSearch} />
      <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} />
      <Home searchResult={searchResult} />
</DataProvider>      
    </>
  )
}

export default App