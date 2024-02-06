import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Pop_up2 from './components/Pop_up2'
import Personal_Information_small from './components/Personal_Information_small'
import Personal_Information from './components/Personal_Information'
import Account_small from './components/Account_small'
import Pop_up from './components/Pop_up'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/*<Pop_up/> */}
     {/* <Pop_up2/> */}
      {/* <Personal_Information_small/> */}
      {/* <Personal_Information/> */}
     {/*  <Account_small /> */}
    </>
  )
}

export default App
