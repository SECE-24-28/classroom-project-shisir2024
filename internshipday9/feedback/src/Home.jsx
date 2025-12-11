import React from 'react'

const Home = ({ searchResult }) => {
  return (
    <div>
        {
        searchResult.map((post)=>
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <hr />
        </div> )
      }
    </div>
  )
}

export default Home
