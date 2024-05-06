import React from 'react'
import director from "../assets/director.jpeg"


function DirectorMsg() {
  return (
    <>
    <div className='flex justify-center'><h5 className='uppercase text-white text-2xl lg:text-3xl font-[lato] font-normal lg:font-bold'> <span className='text-customOrange'>director's</span> message</h5></div>

<div className='mainCont my-6 lg:p-16 flex justify-center'>


<div className='testimonial relative max-w-[900px] w-full py-12 px-0 overflow-hidden'>
<div className='testi-content'>
<div className='box flex items-center justify-center flex-col gap-7'>
<img className='h-[170px] w-[170px] object-cover rounded-full' src={director}/>
<p className='text-center px px-5 lg:px-24 text-[16px] lg:text-xl text-white font-[poppins]'>" pellentesque nec egestas quis, lacinia vel mauris. Pellentesque vulputate euismod augue at mollis. Sed dolor ipsum, hendrerit non ultrices vitae, malesuada eu ex. In hac habitasse platea dictumst. Fusce efficitur neque risus, vitae vehicula nunc convallis eget. Sed tempor neque at sagittis interdum. Nunc vel nisi sem. Vivamus a sodales sem. Quisque "</p>


{/* Name and Position div */}
<div className='details flex flex-col items-center'>
    <span className='name text-sm lg:text-[18px] font-semibold text-customOrange'> Partha Pratim Chatterjee</span>
    <span className='text-xs lg:text-[16px] font-normal text-white'> Director - NIAMT Ranchi</span>
</div>


</div>

</div>

</div>

</div>
        
    </>
  )
}

export default DirectorMsg