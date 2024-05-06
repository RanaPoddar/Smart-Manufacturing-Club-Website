import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import "../../output.css"

function Navbar2() {

    const navItems = [
        {path: "/" , link : "Home"},
        {path: "/events" , link : "Events"},
        {path: "/projects" , link : "projects"},
        {path: "/team" , link : "Team"},
        // {path: "/snapshorts" , link : "snapshorts"},
        {path: "/about" , link : "about us"},
        // {path: "/contact" , link : "contact us"},
    ]

const [isMenuOpen , setIsMenuOpen] = useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
}

// 11/03/2024 For Sticky Navbar
const [nav, setNav] = useState(false);
const changeBackground = () => {
  if (window.scrollY >= 50) {setNav(true)}
  else {setNav(false)}
}
window.addEventListener("scroll", changeBackground);



  return ( 
    <> 
    <header className= {` text-white fixed top-0 left-0 right-0 ${nav ? "bg-black":"bg-none"}`}>
<nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
    <a href='/' className='text-xl font-bold text-white uppercase'> lo<span className='text-customOrange uppercase'>go</span></a>

{/* nav items for lg devices */}
<ul className='md:flex gap-12 text-[16px] hidden font-[poppins] font-normal'>
    {navItems.map(({path , link}) => <li key={path} className='text-white uppercase hover:text-customOrange'>
<NavLink to={path} 
 className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
>{link}
</NavLink>
    </li>)}
</ul>


{/* Mobile menu btn , display mobile screen */}
<div className='md:hidden z-30'>
<button onClick={toggleMenu} className='cursor-pointer'> {isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/> } </button>

</div>
</nav>

{/* Menu Items only for Mobile */}
<div className=''>
<ul className={`md:hidden gap-5 h-[100vh] text-[14px] p-8 z-10 bg-black ${isMenuOpen ? "flex flex-col items-start fixed top-0 right-0 w-[300px] transition-all ease-out duration-300" : "flex flex-col items-start fixed top-0 right-[-300px] w-[300px] transition-all ease-out duration-300"}`}>
    <li className='uppercase text-customOrange text-xl font-bold '> menu</li>
    {navItems.map(({path , link}) =>
     <li key={path} className='text-white uppercase'>
<NavLink to={path} onClick={toggleMenu}>{link}</NavLink>
    </li>)}
</ul>
</div>

    </header>


    </>
  )
}

export default Navbar2