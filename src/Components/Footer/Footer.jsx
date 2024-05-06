import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className='bg-[#111]'>
        <div className='containerDiv w-full pt-16 pr-8 pb-5 '>
<div className='socialIcons flex justify-center gap-5'>
    <a href='' className='p-[10px] bg-white rounded-[50%] hover:bg-[#111] hover:duration-500 '> <FaFacebook className='text text-[2em] text-black opacity-90 hover:text-white hover:duration-500'/> </a>
    <a href='' className='p-[10px] bg-white rounded-[50%] hover:bg-[#111] hover:duration-500' > <FaInstagram className='text text-[2em] text-black opacity-90 hover:text-white hover:duration-500' /> </a>
    <a href='' className='p-[10px] bg-white rounded-[50%] hover:bg-[#111] hover:duration-500' > <FaTwitter className='text text-[2em] text-black opacity-90 hover:text-white hover:duration-500' /> </a>
    <a href='' className='p-[10px] bg-white rounded-[50%] hover:bg-[#111] hover:duration-500' > <FaYoutube className='text text-[2em] text-black opacity-90 hover:text-white hover:duration-500'/> </a>
</div>

<div className='footerNav mt-8 mb-8 ml-0 mr-0'>
<ul className='flex justify-center flex-col md:flex-row'>
<li className='w-full text-center m-[10px] md:w-auto'><NavLink to="/" className='text-white m-[20px] text-[1.3em] opacity-70 duration-500 hover:opacity-100 hover:text-customOrange font-[poppins]'>Home</NavLink></li>
<li className='w-full text-center m-[10px] md:w-auto'><NavLink to='/projects' className='text-white m-[20px] text-[1.3em] opacity-70 duration-500 hover:opacity-100 hover:text-customOrange font-[poppins]'>Projects</NavLink></li>
<li className='w-full text-center m-[10px] md:w-auto'><NavLink to='/team' className='text-white m-[20px] text-[1.3em] opacity-70 duration-500 hover:opacity-100 hover:text-customOrange font-[poppins]'>Our Team</NavLink></li>
<li className='w-full text-center m-[10px] md:w-auto'><NavLink to='/about' className='text-white m-[20px] text-[1.3em] opacity-70 duration-500 hover:opacity-100 hover:text-customOrange font-[poppins]'>About </NavLink></li>
<li className='w-full text-center m-[10px] md:w-auto'><NavLink to='/contact' className='text-white m-[20px] text-[1.3em] opacity-70 duration-500 hover:opacity-100 hover:text-customOrange font-[poppins]'>Contact</NavLink></li>
</ul>
</div>
        </div>

<div className='footerBottom bg-black p-[20px] text-center'>
<p className='text-white'>Copyright &copy; 2024  Developed by <span className='opacity-70 tracking-wider font-normal mr-1'><a href='https://www.google.com' target="_blank" className='cursor-pointer'>Rana Poddar</a></span></p>

</div>        
    </footer>

    </>
  )
}

export default Footer