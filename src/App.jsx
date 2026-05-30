import React, { useRef } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Navbar from './Components/common/Navbar'
import FullNav from './Components/common/FullNav'




const App = () => {
  const stairparentRef=useRef(null);
  

  return (


    <div className='text'>
      
    <Navbar/>
    <FullNav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Agency' element={<Agency/>}/>
    </Routes>
    </div>
  )
}

export default App
