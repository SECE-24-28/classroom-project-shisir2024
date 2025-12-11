import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallary from './Gallary'
import PostPage from './PostPage'
import NewPost from './NewPost'
import Post from './Post'

function App() {

  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/postpage">PostPage</Link></li>

    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
        <Route path="/postpage" element ={<PostPage />} >
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
    
        

    </Routes>
    
      
    </>
  )
}

export default App
