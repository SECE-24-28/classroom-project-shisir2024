import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import api from '../api/Post'
import { useNavigate } from "react-router-dom";

const DataContext=createContext()
export const DataProvider=({children})=>
{
  const [posts,setPosts] = useState([])
  const [search,setSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const navigate = useNavigate()

  //Fetch Initial Information
  useEffect(()=>
  {
    const fetData=async()=>
    {
      const res=await api.get("/feedback")
      setPosts(res.data)
    }
    fetData();
  },[]
  )

  //Search
  useEffect(()=>
  {
    const filterd=posts.filter((post)=>(post.title).includes(search)
                              )
    setSearchResult(filterd.reverse())
  },[posts,search])

  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const id=(posts.length)?String(Number(posts[posts.length-1].id)+1):("1")
    const datetime=format(new Date(),"MMM dd,yyyy pp")
    const newObj={id,title,datetime,body}
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
    alert("Data Inserted Successfully..")
    navigate("/")
  }

  const handleDelete=async(id)=>
  {
    try
    {
      await api.delete(`/feedback/${id}`)
      alert("Deletion Success..")
      const newList = posts.filter((post)=>post.id!=id)
      setPosts(newList)
      navigate("/")
    }
    catch(err)
    {
      console.log(err)
    }
  }
    return (
        <DataContext.Provider value={{posts,searchResult,title,setTitle,body,setBody,
                                      search,setSearch,handleSubmit,handleDelete
                                     }}>
          {children}
        </DataContext.Provider>
    )
}
export default DataContext