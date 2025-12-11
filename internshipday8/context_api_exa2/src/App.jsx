import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './One'
import Three from './Three'
import Two from './Two'
import { DataProvider } from './DataContext'

function App() {

  return (
    <>
    <DataProvider>
      <One />
      <Two />
      <Three />
    </DataProvider>
    </>
  )
}

export default App