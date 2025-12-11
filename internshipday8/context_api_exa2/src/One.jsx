import React, { useContext } from 'react'
import DataContext from './DataContext'

const One = () => 
    {
        const {num} = useContext(DataContext)
        return (
            <div>
                <h1>Count :  {num}</h1>
            </div>
        )
    }

export default One;