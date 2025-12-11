import { useState, useEffect } from 'react'       
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  //fetch initial information

  useEffect(()=>
  {
    const fetData=async()=>
    {
      const res=await api.get("/feedback")
      setPosts(res.data)  
    }
    fetData();
  },[])

  //search
  useEffect(()=>
  {
    const filtered = posts.filter((post)=>(post.title).includes(search))
    setSearchResult(filtered)
  },[posts, search])

  return (
    <>
      <Search search={search} 
              setSearch={setSearch}/>
      <Home searchResult={searchResult} />
    </>
  )
}

export default App