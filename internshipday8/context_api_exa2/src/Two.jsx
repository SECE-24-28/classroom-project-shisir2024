import React, { useContext } from 'react'
import DataContext from './DataContext'

const Two = () => 
    {
        const {inc} = useContext(DataContext)
        return (
            <div>
                <button onClick={inc}>+</button>
            </div>
        )
    }

export default Two;