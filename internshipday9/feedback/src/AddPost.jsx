import React from 'react'

const AddPost = ({ title, setTitle, body, setBody, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <textarea 
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />

        <button type="submit">Save</button>
      </form>
      <hr />
    </div>
  )
}

export default AddPost