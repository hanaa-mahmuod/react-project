import React from 'react'

export default function Contacts() {
  return (
   <>
   <div className='flex justify-center '>
    
    <form action="" className='flex flex-col '>
    <div className='text-center my-10'><h1 className=' font-bold text-5xl text-[#2C3E50]'>CONTACT SECTION</h1></div>
    <input type="text" placeholder='userName'  className='mb-5 border-b-2 border-[#cbd5e1] rounded-lg w-[600px] mt-10 placeholder:text-neutral-400  focus:outline-none border-b-2 border-[#cbd5e1] rounded-lg '/>
      <input type="number" placeholder='userAge'  className='mb-5 border-b-2 border-[#cbd5e1] rounded-lg w-[600px] mt-10 focus:outline-none border-b-2 border-[#cbd5e1] rounded-lg' />
      <input type="email" placeholder='userEmail' className='mb-5 border-b-2 border-[#cbd5e1] rounded-lg w-[600px] mt-10 focus:outline-none border-b-2 border-[#cbd5e1] rounded-lg' />
      <input type="password" placeholder='userPassword' className='mb-12 border-b-2 border-[#cbd5e1] rounded-lg w-[600px] mt-10 focus:outline-none border-b-2 border-[#cbd5e1] rounded-lg '/>
    <button className='bg-[#1ABC9C]  text-white w-[150px] rounded-lg mb-10 p-2' > send Message</button>
    </form>
      
   </div>
   </>
  )
}
