import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [SList, setList] = useState([])

  useEffect(()=>
  {
    const fetData= async () =>
    {
      try {
        const res = await api.get("/student")
        setSList(res.data)
        //console.log(res.data)
      } catch(err){
        //console.error(err)
      }
    }
    fetData()
  }, [])
  return (
    <>
      {
        SList.map((stu)=>
           <p>{stu.sid} - {stu.sname} - {stu.smark}</p>
        )
      }
    </>
  )
}

export default App