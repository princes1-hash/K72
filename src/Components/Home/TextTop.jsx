import React from 'react'
import Video from './Video'

const TextTop = () => {
  return (
    <div className='text-center mt-[2vw] leading-[0.92] text-[9vw] font-[font1] uppercase  text-white'>
      <div className='' >
        L'étincelle
      </div>
      <div className='flex justify-center items-center'>
         qui <div className='w-[17vw] h-[8vw] rounded-full -mt-[1vw] overflow-hidden  [&_*]:rounded-full'><Video/></div>génère
      </div>
      <div className=''>
        la créativité
      </div>
    </div>
  )
}

export default TextTop
