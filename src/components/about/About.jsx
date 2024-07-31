import React from 'react'

export default function About() {
  return (
   <>
   <div className='bg-[#1ABC9C]  h-[550px]  container  pt-2 '>
    <div className='flex flex-col justify-center content-center  mt-20  '>
    <div className='flex justify-center  '><h1 className=" text-white font-bold text-4xl mt-5 after:content-[''] after:w-25 after:text-red-500 top-0 left-0">ABOUT COMPONENT</h1></div>



<div className="flex flex-row w-[590px] mx-auto mt-12 text-white  ">
<div  className='basis-1/2 sm:basis-full me-12 '>
 <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
<div className='basis-1/2 sm:basis-full'>
  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
</div>
</div>

   </div>
   </>
  )
}
