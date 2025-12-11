import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div>
        <input type="text" value={search} placeholder='Search Here'
                         onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default Search