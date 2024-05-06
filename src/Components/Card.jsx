import React from 'react'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


function Card(props) {
  return (
    <>
<div className='containerBx relative flex justify-center items-center flex-wrap z-10 '>
<div className='group relative w-[300px] h-[400px] bg-[rgba(255,255,255,0.05)] m-5 shadow-[rgba(0,0,0,0.2)] rounded-2xl flex justify-center items-center backdrop-blur-md'>
<div className='contentBx relative flex justify-center items-center flex-col transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:translate-y-[-20px] '>
<div className='imgBx relative w-[169.2px] h-[169.2px] rounded-full overflow-hidden border-[10px] border-[rgba(0,0,0,0.25)] '>
    <img className='absolute top-0 left-0 w-full h-full object-cover' src={props.img} alt={props.name}/>
</div>
<div className='contentBx'>
    <h3 className='text-white uppercase tracking-wider font-[lato] font-medium text-[18px] text-center mt-5 mb-3'>{props.name} <br/> <span className='text-[12px] font-light capitalize'>{props.about}</span></h3>
</div>

</div>

{/* Social icons */}
<ul className='absolute bottom-[50px] flex'>
    <li className='cursor-pointer mx-3 mb-3 translate-y-10 transition-all duration-500 delay-100 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'><a href={props.fb} className='text-white text-2xl'><FaFacebookF className='scicons' /></a> </li>
    <li className='cursor-pointer mx-3 mb-3 translate-y-10 transition-all duration-500 delay-200 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'><a href={props.linkedin} className='text-white text-2xl'><FaLinkedinIn /></a> </li>
    <li className='cursor-pointer mx-3 mb-3 translate-y-10 transition-all duration-500 delay-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'><a href={props.mail} className='text-white text-2xl'><SiGmail /></a> </li>
</ul>


</div>
</div>


    </>
  )
}

export default Card