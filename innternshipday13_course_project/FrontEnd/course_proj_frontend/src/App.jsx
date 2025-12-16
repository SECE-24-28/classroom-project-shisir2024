import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addCourses } from './api/CourseApii'
import { getCourses } from './api/CourseApii'

function App() {
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")

  const fetchCourse = async()=>
  {
    const res = await getCourses();
    setCourses(res.data)
  }

  useEffect(()=>
  {
    fetchCourse()
  },[]
  )

  const handleSubmit = async(e)=>
  {
    e.preventDefault()
    await addCourses({title, duration})
    fetchCourse();
    setTitle('')
    setDuration('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title}
               onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" value={duration}
               onChange={(e)=> setDuration(e.target.value)} />
        <button>Add Course</button>
      </form>

      <ul>
        {
          courses.map(course=>
            <li key={course._id}>
              {course.title} - {course.duration}
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App