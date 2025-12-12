import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'
const Home = () => 
    {
        const {searchResult}=useContext(DataContext)
  return (
    <div>
        <Search />
        {
        searchResult.map((post)=>
          <div key={post.id}>
    
        <Link to={`/editpost/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
        </Link>
        <hr />
        </div>
        )
       }
    </div>
  )
}

export default Home