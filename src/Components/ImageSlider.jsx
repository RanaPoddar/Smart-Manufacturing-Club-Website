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
    } 
  ]

function ImageSlider(props) {

    const [slide, setSlide] = useState(0);
const nextSlide = () => {
    setSlide(slide === 2 ? 0 : slide + 1)
}

const prevSlide = () => {
    setSlide(slide === 0 ? 2 : slide - 1)
}
  return (
    
    <div className='relative flex justify-center items-center w-[100%]'>
    <BsArrowLeftCircleFill className='absolute w-8 h-8 text-white left-4 hover:cursor-pointer' onClick={prevSlide}/>
  
   <img src={props.src1} alt={props.alt} className= {slide === 0 ? 'rounded-lg w-[100%] h-[100%]' : "hidden"}/>
   <img src={props.src2} alt={props.alt} className= {slide === 1 ? 'rounded-lg w-[100%] h-[100%]' : "hidden"}/> 
   <img src={props.src3} alt={props.alt} className= {slide === 2 ? 'rounded-lg w-[100%] h-[100%]' : "hidden"}/>  
  

  <BsArrowRightCircleFill className='absolute w-8 h-8 text-white right-4 hover:cursor-pointer' onClick={nextSlide}/>
  <span className='flex absolute bottom-4'>
    
 <button onClick={() => setSlide(1)} className={slide === 0 ? 'bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer' : "bg-gray-600 h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer"}/>
 <button onClick={() => setSlide(2)} className={slide === 1 ? 'bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer' : "bg-gray-600 h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer"}/>
 <button onClick={() => setSlide(3)} className={slide === 2 ? 'bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer' : "bg-gray-600 h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer"}/>



  </span>
</div>
  )
}

export default ImageSlider