import React, { useLayoutEffect } from 'react'
import Home from "../Components/Home/Home"
import About from "../Components/About/About"
import Projects from "../Components/Projects/Projects"
import Contact from "../Components/Contact/Contact"

import Snapshorts from "../Components/Snapshorts/Snapshorts"

import Footer from '../Components/Footer/Footer'


function HomePage() {

  // To Scroll on top every time
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <>
    <Home/>
    <About/>
     <Projects/>
     <Snapshorts/>
   <Contact/>
<Footer/>

</>
  )
}

export default HomePage