import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>




    
    <nav class="bg-[#2C3E50] text-white  px-4 flex items-center justify-between pt-7 pb-7 ps-20">
    <a class="font-bold text-4xl tracking-tight" href="#">START FRAMEWORK  </a>
    <div class="flex items-center pe-20">
        <Link class="text-lg font-bold px-4  leading-none rounded-full" to={`about`}>ABOUT</Link>
        <Link class="text-lg font-bold px-4 py-2 leading-none rounded-full "to={`portfolio`}>PORTFOLIO</Link>
        <Link class="text-lg font-bold px-4 py-2 leading-none rounded-full " to={`contact`}>CONTACT</Link>
    </div>
</nav>
    </>
  )
}
