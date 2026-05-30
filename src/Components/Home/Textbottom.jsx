import React from 'react'
import { Link } from 'react-router-dom'

const Textbottom = () => {
  return (
    <div className='font-[font2] text-[5vw]  flex gap-[2.5vw] justify-center mt-[15vw]'>
      <div className='hover:border-yellow-400 hover:text-yellow-400 border-3 h-23 rounded-full px-[2vw] border-white text-white'>
      <Link to="/Projects">PROJECTS</Link>
      </div>
      <div className='hover:border-yellow-400 hover:text-yellow-400 text-white h-23 border-3 rounded-full px-[2vw] '>
      <Link to="/Agency">AGENCE</Link>
      </div>
    </div>
  )
}

export default Textbottom
