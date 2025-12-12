import { formsl }  from "data-fns";
import { createContext,useState } from "react";
import api from '../api/post'

const DataContext=createContext()
export const DataProvider=({children})=>{
    const[num,setNum]=useState(100)
    return(
        <DataContext.Provider value={{posts,searchResult,title,setTitle,}}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext