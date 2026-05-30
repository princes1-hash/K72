import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavbarContext } from '../../Context/NavContext'

const FullNav = () => {
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const FullScreenNavRef=useRef(null)
    const FullScreenNavLinksRef=useRef(null)
    const CrossRef1 =useRef(null)
     const CrossRef2 =useRef(null)

    
    useGSAP(function(){
        gsap.to(".Move",{
            x: "-200%",
            ease: "none",
            duration:10,
            repeat: -1
        })
    })
 function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairs', {
     
            height: '100%',
            stagger: {
                amount: -0.15
            }
        })
        tl.to('.link', {
            rotateX: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 1
        },"-=0.3")
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairs', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        },"-=0.5")
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])
return(
  <div ref={FullScreenNavRef} className='fullscreennav hidden overflow-hidden h-screen z-50 w-full absolute  '>
<div className='h-screen overflow-x-hidden fixed  w-full  '>
<div className='h-screen   w-full flex '>
      <div className='stairs h-full w-1/5 bg-black'></div>
      <div className='stairs h-full w-1/5 bg-black'></div>
      <div className='stairs h-full w-1/5 bg-black'></div>
      <div className='stairs h-full w-1/5 bg-black'></div>
      <div className='stairs h-full w-1/5 bg-black'></div>
    </div>
</div>
<div ref={FullScreenNavLinksRef} className='relative  overflow-hidden'>
<div className="navlink flex w-full relative justify-between ">
     <div className=' m-[0.6vw]'>
    <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
    </div>
    <div onClick={()=>{setNavOpen(false)}} onMouseEnter={()=>{CrossRef1.current.style.backgroundColor="#D3FD50", CrossRef2.current.style.backgroundColor="#D3FD50" }} onMouseLeave={()=>{CrossRef1.current.style.backgroundColor="white",CrossRef2.current.style.backgroundColor="white"}} className='w-[10vw] h-[10vw] right-0 relative cursor-pointer'>
  <div ref={CrossRef1} className='w-[0.2vw] h-[10.5vw] absolute rotate-45 origin-bottom -mt-[2.6vw] ml-[2vw] bg-white '></div>
  <div ref={CrossRef2} className='w-[0.2vw] h-[10.3vw] absolute -rotate-45 origin-bottom right-[0.1vw] -mt-[2.4vw] mr-[0.15vw] bg-white  '></div>
  </div>
     </div>

<div className='AllMiddleLinks  pt-1'>
  
  <div className='link link1  origin-top relative border-t border-white'>
     
        <div className='w-full h-[8vw] flex justify-center items-center border-t border-white'>
<h1 className=' text-white h-full font-[font2] text-[7vw] -mt-[2.5vw]'>PROJECTS</h1>
</div>
    
    <div  className='Move move1 top-0 flex shrink-0 flex-nowrap absolute w-screen h-[8vw]'>
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR VOIR </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img1.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR VOIR</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img2.png" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR VOIR </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img1.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR VOIR</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img2.png" alt="" />
    </div> 
        </div> 
     </div>

     <div className='link link2 origin-top relative border-t border-white '>
     
        <div className='w-full h-[8vw] flex justify-center items-center border-t border-white'>
<h1 className='text-white h-full font-[font2] text-[7vw] -mt-[2.5vw]'>AGENCE</h1>

    </div>
    <div  className='Move move2 top-0 absolute flex shrink-0 flex-nowrap w-screen h-[8vw]'>
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR SAVOIR </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img3.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR SAVOIR</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img4.gif" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR SAVOIR </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img3.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR TOUR SAVOIR</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img4.gif" alt="" />
    </div> 
        </div>

     </div>

<div className='link link3 origin-top relative border-t border-white '>
<div className='w-full h-[8vw] flex justify-center items-center border-t border-white'>
<h1 className='text-white h-full font-[font2] text-[7vw] -mt-[2.5vw]'>CONTACT</h1>
</div>
   
    <div  className='Move move3 absolute top-0 flex shrink-0 flex-nowrap w-screen h-[8vw]'>
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR ENVOYER UN FAX </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img5.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR ENVOYER UN FAX</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img6.png" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR ENVOYER UN FAX </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img5.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>POUR ENVOYER UN FAX</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img6.png" alt="" />
    </div>
    </div>

</div>

<div className='link link4 origin-top relative border-t border-white '>
<div className='w-full h-[8vw] flex justify-center items-center border-y border-white'>
<h1 className='text-white h-full font-[font2] text-[7vw] -mt-[2.5vw]'>BLOGUE</h1>

    </div>
    <div  className='Move move4 absolute top-0 flex shrink-0 flex-nowrap w-screen h-[8vw]'>
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>LIRE LES ARTICLES </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img7.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>LIRE LES ARTICLES</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img8.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>LIRE LES ARTICLES </h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img7.jpg" alt="" />
    </div> 
    <div className=' flex justify-center shrink-0 bg-[#D3FD50] h-full '>
    <h1 className='font-[font2] text-[7vw] -mt-[1vw] '>LIRE LES ARTICLES</h1>
    <img className=' mx-[1vw] mt-[0.5vw] rounded-full w-[14vw] h-[7vw]' src="./img/menu-img8.jpg" alt="" />
    </div> 
        </div> 

</div>


</div>


  
</div>
  </div>
)
}

export default FullNav