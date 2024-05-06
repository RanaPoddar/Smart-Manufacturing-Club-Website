import React, { useState } from 'react'
import {BsArrowLeftCircleFill , BsArrowRightCircleFill  } from "react-icons/bs"

const data = [
    {
      src : "https://picsum.photos/seed/img1/600/400",
      alt : "Image 1"
    } ,
    {
      src : "https://picsum.photos/seed/img2/600/400",
      alt : "Image 2"
    } ,
    {
      src : "https://picsum.photos/seed/img3/600/400",
      alt : "Image 3"
    } ,
    {
      src : "https://picsum.photos/seed/img4/600/400",
      alt : "Image 4"
    } ,
  ]

function Carousel() {

    const [slide, setSlide] = useState(0);
const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
}

const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
}
  return (
    
    <div className='relative flex justify-center items-center w-[100%] h-[50vw] md:h-[35vw] '>
    <BsArrowLeftCircleFill className='absolute w-8 h-8 text-white left-4 hover:cursor-pointer' onClick={prevSlide}/>
  {data.map((item , index) => { 
   return <img src={item.src} alt={item.alt} key={index} className= {slide === index ? 'rounded-lg w-[100%] h-[100%]' : "hidden"}/> 
  })}

  <BsArrowRightCircleFill className='absolute w-8 h-8 text-white right-4 hover:cursor-pointer' onClick={nextSlide}/>
  <span className='flex absolute bottom-4'>
    {data.map((_ , index) => {
        return <button key={index} onClick={() => setSlide(index)} className={slide === index ? 'bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer' : "bg-gray-600 h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer"}/>
    })}
  </span>
</div>
  )
}

export default Carousel