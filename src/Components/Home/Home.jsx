import React from 'react'
import "./Home.scss";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <>
   
    <div className='slider'>
<div className='slide'> 
</div>
<div className='slide'> </div>
<div className='slide'> </div>
<div className='slide'> </div>
<div className='slide'> </div>

<div className='mt-[90vh] flex justify-center p-4 bg-black text-white'> <FaArrowDown className='h-8 mx-0 w-8' /> </div>
 </div>
 
 <section className='content'>
<div className=''> <h1 className='flex justify-center uppercase font-[Inter] font-bold text-xl md:text-4xl '>Smart <span className='text-customOrange mx-2 sm:mx-3 md:mx-4'> Manufacturing </span> Club</h1></div>
<div className='subtitle'> <a href='https://niamt.ac.in/' target="_blank"> NIAMT RANCHI</a> </div>
</section>

</>

  )
}

export default Home