import React, { useLayoutEffect } from 'react'
import vision from "../assets/Vision.png"
import img1 from "../assets/about1.jpg"
import Footer from '../Components/Footer/Footer'
import DirectorMsg from '../Components/DirectorMsg'

function AboutPage() {

  // To Scroll on top every time
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});


  return (
    <>
   
<div className='maindivForWholePage pt-20 px-4 pb-4 lg:px-20 lg:pt-32 lg:pb-28'>

<div className='flex justify-center'> 
<h1 className='font-bold text-3xl md:text-4xl lg:text-5xl uppercase'>About <span className='text-customOrange'> us </span></h1> 
</div>

<div className='div1 my-6 lg:p-16'>
<div className='flex justify-center lg:p-8'><h5 className='uppercase text-white text-2xl lg:text-3xl font-[lato] font-normal lg:font-bold'> history</h5></div>
<div className='p-6'>
  <p className='text-[16px] lg:text-xl font-[poppins] text-white text-justify'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate vel erat a ultrices. In pellentesque massa sit amet urna posuere, quis placerat velit placerat. Sed et ipsum mi. Vestibulum interdum risus at elit facilisis, in dictum ex tincidunt. Quisque eu mattis lacus, a euismod dolor. Praesent urna magna, pellentesque nec egestas quis, lacinia vel mauris. Pellentesque vulputate euismod augue at mollis. Sed dolor ipsum, hendrerit non ultrices vitae, malesuada eu ex. In hac habitasse platea dictumst. Fusce efficitur neque risus, vitae vehicula nunc convallis eget. Sed tempor neque at sagittis interdum. Nunc vel nisi sem. Vivamus a sodales sem. Quisque.
  </p>
</div>
</div>

<DirectorMsg/>

{/* Next repeating same types of divs  */}
<div className='my-6'>
<div className='flex justify-center lg:p-16'>
<h5 className='uppercase text-white text-2xl lg:text-[34px] font-[lato] font-normal lg:font-bold'> vision</h5>
</div>
  
  <div className='lg:grid lg:grid-cols-2 mx-10 lg:px-4'>
  <div className='p-6 lg:p-6 h-auto w-auto'>
<img src={vision}/>
  </div>
  <div className="p-6 lg:p-8 flex items-center">
    <h6 className='text-[21.12px] text-justify font-[poppins] italic font-medium text-white lg:ml-20 lg:text-2xl'>“To promote informal learning and foster innovation and invention in technology, with a focus on technologies aimed at contributing positively to the environment and to the society”</h6>
  </div>
</div>

</div>


<div className='my-6 lg:mt-6 lg:mb-24 lg:p-16'>

  <div className='flex justify-center text-center lg:p-6'><h2 className='text-white text-2xl font-medium lg:text-[34px]'>The SMC vision is being achieved by espousing three major concepts.</h2></div>
  
  {/* Bellow div containing img and text */}
  <div className='lg:my-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center'>

  <div className='p-4 lg:p-8'>
    <div className='mb-[10px] mt-3'><h5 className='text-xl lg:text-3xl text-center lg:text-start font-medium'>Walk in with an idea, walk out with a product</h5></div>
    <div>
    <p className='text-[16px] lg:text-xl text-justify font-[poppins] font-normal'>Among the general demographic, students are more likely to come up with new, creative, and outrageous ideas. Add to this the fact that students at College are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the club provides the right environment and resources. Club strives to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society</p></div>
  </div>
  <div className='p-2 mx-5'>
    <img className="rounded-lg" src={img1}/>
  </div>

</div>

{/* Same div Again , just changing position of image  */}
<div className='lg:my-8 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-center lg:justify-center'>

<div className='p-4 lg:p-8 lg:col-start-2'>
  <div className='mb-[10px] mt-3'><h5 className='text-xl lg:text-3xl text-center lg:text-start font-medium'>A futuristic lab environment</h5></div>
  <div>
  <p className='text-[16px] lg:text-xl text-justify font-[poppins] font-normal'>Among the general demographic, students are more likely to come up with new, creative, and outrageous ideas. Add to this the fact that students at College are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the club provides the right environment and resources. Club strives to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society</p></div>
</div>
<div className='p-2 mx-5 lg:col-start-1 lg:row-start-1'>
  <img className="rounded-lg" src={img1}/>
</div>


<div className='p-4 lg:p-8'>
  <div className='mb-[10px] mt-3'><h5 className='text-xl lg:text-3xl text-center lg:text-start font-medium'>Research and Development Hub</h5></div>
  <div>
  <p className='text-[16px] lg:text-xl text-justify font-[poppins] font-normal'>Among the general demographic, students are more likely to come up with new, creative, and outrageous ideas. Add to this the fact that students at College are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the club provides the right environment and resources. Club strives to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society</p></div>
</div>
<div className='p-2 mx-5'>
  <img className="rounded-lg" src={img1}/>
</div>


</div>





</div> 


{/* Main container div */}
</div>


<Footer/>
    </>
  )
}

export default AboutPage