import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import { useParams } from 'react-router-dom'

export const EditPost = () => 
    {
        const{posts,handleDelete} = useContext(DataContext)
        const{id} = useParams()
        const post = posts.find((p)=>p.id==id)

        if(!post)
            return (
                <div>
                    <h2>There is no data...</h2>
                </div>
            )

        return (
            <div>
                <h2>Edit Post</h2>
                <hr />
                <input type="text" value={post.title} /> 
                <br />
                <textarea value={post.body} />
                <br />
                <button onClick={()=>handleDelete(post.id)}>Delete</button>
            </div>
        )

  return (
    <div>EditPost</div>
  )
}

export default EditPost