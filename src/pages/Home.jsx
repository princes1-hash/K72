import React from 'react'
import Video from '../Components/Home/Video'
import Textbottom from '../Components/Home/Textbottom'
import TextTop from '../Components/Home/TextTop'


const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen fixed'>
      <Video/>
    </div>
<div className='h-screen w-screen relative flex flex-col'>
    <TextTop/>
    <Textbottom/>
</div>

    </div>
    
  )
}

export default Home
