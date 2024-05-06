import React from 'react'
import img from "../../assets/contact-img.svg"

function Contact() {
  return (
    <>
    <div className='px-8 py-16 sm:px-8 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24'>
    <div className=' flex justify-center pb-12'>
<h1 className="font-bold text-3xl md:text-4xl uppercase"> <span className='text-customOrange'>Contact</span> us </h1>
</div>
<div className=' grid sm:grid-cols-2 gap-6'>
<div className='image'>
  <img src={img} alt=''/>
</div>
<div className='form'>
  <h2 className='flex justify-start my-2 py-2 px-6 capitalize font-semibold text-xl'>Get in touch</h2>
  <form>
<div className='grid sm:grid-cols-2 gap-2 px-6 my-2'>
  <input type='text' placeholder='First Name' className='input bg-lightBlack2 border '></input>
  <input type='text' placeholder='Last Name'  className='input bg-lightBlack2 border'></input>
</div>
<div className='grid sm:grid-cols-2 gap-2 px-6 my-2'>
  <input type='text' placeholder='Email'  className='input bg-lightBlack2 border'></input>
  <input type='text' placeholder='Phone Number' className='input bg-lightBlack2 border'></input>
</div>
<div className='grid gap-2 px-6 my-2'>
  <textarea rows={8} placeholder='Message' className='p-6 rounded-xl w-full text-white leading-tight bg-lightBlack2 border'></textarea>
</div>
<div className='flex justify-center mb-2'>
  <button className='secondary-btn'> Send </button>
</div>

  </form>
</div>

</div>



    </div>
    </>
  )
}

export default Contact