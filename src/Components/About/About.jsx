import React from 'react'
import Abt from './Abt'
// import "./About.scss"
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();
  const gotToNewPage=()=>{
    navigate("/about");
  }

  return (
    <div className='px-8 py-16 sm:px-8 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 '>
<div className='flex justify-center pb-12'> 
<h1 className='font-bold text-3xl md:text-4xl uppercase'>About <span className='text-customOrange'> smc </span></h1> 
</div>
{/* <div className='flex justify-center mb-2'>
<p className='text-white'>What SMC do ?</p>
</div> */}

{/* photo and Text section */}

{/* <div className='grid sm:grid-cols-2 gap-6 px-10 py-10 rounded-2xl bg-lightBlack2'>

<div className="rounded-2xl"> 
<img className='px-0 w-[480px] h-[270.4px]' src='https://blogs.sw.siemens.com/wp-content/uploads/sites/3/2024/02/Smart-Manufacturing_Discrete.png' alt='photo' />
</div>

<div className='flex content-center'>
<div className='pb-4 leading-6 sm:pl-3 sm:flex sm:content-center'>
<p className='px-0 text-white text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
</div>
</div>
</div> */}

{/* Photo with text section 2 */}

<Abt/>
<div className='flex justify-center'> 
<button onClick={() => gotToNewPage()} className='secondary-btn'>know more</button>
</div>

{/* <div className='wrapper mt-8 mr-auto px-10 py-10 rounded-2xl bg-lightBlack2 '>
    <img className='max-w-[320px] float-left border-2 rounded-lg mr-4 md:w-auto'  src='https://blogs.sw.siemens.com/wp-content/uploads/sites/3/2024/02/Smart-Manufacturing_Discrete.png' alt=''/>
    <div className='textbox text-white'>
  
<h2 className='text-3xl  text-center'> This is a Title </h2>
  <p className='text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
</div>

</div> */}




    </div>
  )
}

export default About