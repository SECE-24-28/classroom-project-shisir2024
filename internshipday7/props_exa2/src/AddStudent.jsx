import React from 'react'

const AddStudent = ({newstu,setNewStu,handleSubmit}) => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student'
                            ref={inputREf}
                               value={newstu}
                               onChange={(e)=>setNewStu(e.target.value)}
            />
            <button type='submit' onClick={()=>inputRef.current.focus()}>Submit</button>
        </form>
    </div>
  )
}

export default AddStudent