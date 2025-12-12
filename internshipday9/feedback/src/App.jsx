import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import EditPost from './EditPost'
import { format } from 'date-fns'
import DataContext, { DataProvider } from './context/DataContext'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
function App() {


  return (
    <>
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/newpost">NewPost</Link></li>
    </ol>

    <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<AddPost />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
    </DataProvider>
     </>
     
  )
}

export default App