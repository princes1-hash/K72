

const ProjectCard = (props) => {

  return (
    <>
   
    <div className='w-1/2  group relative  transition-all overflow-hidden duration-300 ease-in hover:rounded-4xl h-full'>
    <img className='w-full h-full  object-cover' src={props.image1} alt="" />  
    <div className='w-full opacity-0 group-hover:opacity-100 bg-black/10 absolute flex justify-center items-center top-0 h-full '>
    <h1 className='border-white border-[0.3vw] rounded-full px-[1.3vw] text-[3.2vw] mt-[0.5vw] text-white font-[font2]'>VOIR LE PROJET</h1>
    </div>
    </div>
    
      <div className='w-1/2 h-full group relative transition-all overflow-hidden duration-300 ease-in hover:rounded-4xl '>
      <img className='w-full h-full   object-cover' src={props.image2} alt="" />
       <div className='w-full opacity-0 group-hover:opacity-100 bg-black/10 absolute flex justify-center items-center top-0 h-full '>
      <h1 className='border-white border-[0.3vw] rounded-full px-[1.3vw] text-[3.2vw] mt-[0.5vw] text-white font-[font2]'>VOIR LE PROJET</h1>
    </div>
   
    </div>
    </>
  )
}

export default ProjectCard