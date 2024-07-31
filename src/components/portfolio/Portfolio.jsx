import React from 'react'
import home from '../../assets/images/poert1.png'
import torta from '../../assets/images/port2.png'
import khema from '../../assets/images/port3.png'

export default function portfolio() {
  var indexofclickedimg;
var allimg=Array.from(document.querySelectorAll('img'));
var mylayer=document.querySelector('.mylayer');
for(var i=0;i<allimg.length;i++){
   

   allimg[i].addEventListener('click',function(e){
  
    var imgsrc=e.target;
  var selectimgsrc=imgsrc.getAttribute('src');

      mylayer.classList.remove('d-none');
      
     var carsor=document.querySelector('.carsor')
       
       carsor.style.backgroundImage=`url('${selectimgsrc}')`;
       indexofclickedimg= allimg.indexOf(imgsrc);
    
    });}
  return (
   <>
    <div className='text-center mx-auto my-10'><h1 className=' font-bold text-5xl text-[#2C3E50]'>PROTOFOLIO COMPONENT</h1></div>
   <div className='  px-[130px] grid  grid-cols-3 gap-10 mt-12 mb-5 '>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={home} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={torta} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={khema} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={home} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={torta} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
    <div className='relative rounded-lg overflow-hidden'>
      <img src={khema} alt="" className='' />
    <div className='absolute bottom-0 left-0  right-0 top-0 flex justify-center items-center  opacity-[0]  hover:opacity-75 bg-[#29B197]  w-100 h-100 text-white text-5xl'><i class="fa-solid fa-plus"></i></div>
    </div>
   </div>
   <div class="  mylayer   bg-red-500  absolute top-0 left-0 w-[300px]">
<div class="carsor relative "  >
   

</div>
    
</div>
   
   </>
  )
}
