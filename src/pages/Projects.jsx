import React from 'react'
import ProjectCard from '../Components/Project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const ProjectsImg=[{
image1:'./img/projects-img1.jpg',
image2:'./img/projects-img2.jpg'
},{
    image1:'./img/projects-img3.jpg',
    image2:'./img/projects-img4.jpg'

},{
image1:'./img/projects-img5.jpg',
image2:'./img/projects-img6.jpg'
},{
image1:'./img/projects-img7.jpg',
image2:'./img/projects-img8.jpg'
},{
image1:'./img/projects-img9.jpg',
image2:'./img/projects-img10.jpg'
}]
gsap.registerPlugin(ScrollTrigger)
useGSAP(() => {
  gsap.utils.toArray(".hero").forEach((hero) => {
    gsap.fromTo(
      hero,
      {
        height:"100px",
        transformOrigin: "top",
      },
      {
        
        height:'27vw',
        ease: "power3.out",
        scrollTrigger: {
          trigger: hero,
          start: "top 100%",
          end: "top -150%",
          scrub: 2,
        },
      }
    );
  });
});

  return (
    <div className=' mb-[100vh] '>
      
    <div className=' w-full overflow-x-hidden pt-[23vw]'>
      <h1 className='text-[14vw] font-[font2] leading-none  '>PROJETS</h1>
    </div>
 <div className=' lol mt-[2vw] ml-[1vw] mr-[1vw]'>
        {ProjectsImg.map(function (elem, idx) {
          return <div key={idx} className='hero  mb-[1vw] w-full gap-2  h-[27vw] flex '>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>


    </div>
  )
}

export default Projects