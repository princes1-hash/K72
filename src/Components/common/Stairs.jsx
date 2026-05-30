import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
    const stairparentRef=useRef(null);
    const currentPath=useLocation().pathname;
    const pageRef= useRef(null);

    useGSAP(function(){
        var tl=gsap.timeline()
        tl.to(stairparentRef.current,{
          display:"block"
        })
        tl.from(".stair",{
          height:0,
          stagger:{
            amount:-0.15
          }
          
        })
        tl.to(".stair",{
          y:"100%",
          stagger:{
            amount:-0.15
          }
        })
        tl.to(stairparentRef.current,{
          display:"none"
        })
        tl.to(".stair",{
          y:"0%",
          
        })
        gsap.from(pageRef.current,{
          opacity:0,
          scale:1.3,
          delay:1
        })
      },[currentPath])
  return (
    
    <div>
    <div ref={stairparentRef} className='h-screen w-full fixed z-10'>
    <div className='h-full w-full flex '>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
    </div>
    </div>
    
    <div ref={pageRef}>
      {props.children}
    </div>
    
    </div>
    

  )
}

export default Stairs