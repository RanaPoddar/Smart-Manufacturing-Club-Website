import React, { useState } from 'react'
import "./Navbar.scss";
import "../../index.scss"
import Logo from "../../assets/logo.png"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



function Navbar() {
const [showNav , setShowNav] = useState(false);

// 11/03/2024 For Sticky Navbar
const [nav, setNav] = useState(false);
const changeBackground = () => {
  if (window.scrollY >= 50) {setNav(true)}
  else {setNav(false)}
}
window.addEventListener("scroll", changeBackground);
// END HERE ...and changes in header className (prevoiusly navbar only)

// const [hidden , setHidden] = useState(false);
// const hideNav = () => {
//   if (window.scrollY >= 400) {setHidden(true)}
//   else {setHidden(false)}
// }
// window.addEventListener("scroll", hideNav);

  return (
<header className={nav ? "navbar active" : "navbar"}>
<nav className='navbar__container wrappper'>
{/* Logo Section */}

<a href='#' className='navbar__logo'  onClick={() => setShowNav(false)}><img src={Logo} alt='logo'/></a>
   
{/* logo=====end */}

<ul className={`${showNav ? "show" : ""}`}>
 <li><a onClick={() => setShowNav(false)} href='#'> Home </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Events </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Resources </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Blog </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Projects </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Team </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Snapshorts </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> About </a></li>
 <li><a onClick={() => setShowNav(false)} href='#'> Contact </a></li>
</ul>


{/* Hamburger Menu Responsive */}
<div className='navbar__menu' onClick={() => setShowNav(!showNav)}>
{showNav ? <IoMdClose/> : <IoMenu/>}
</div>
{/* ------------- */}
</nav>

</header>

  )
}

export default Navbar