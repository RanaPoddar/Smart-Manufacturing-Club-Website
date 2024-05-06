import React, { useLayoutEffect } from 'react'
import ImageSlider from '../Components/ImageSlider'
import Footer from '../Components/Footer/Footer'
import img1 from "../assets/mech1.jpg"
import img2 from "../assets/mech2.jpg"
import img3 from "../assets/mech3.jpg"


function EventPage() {

  // To Scroll on top every time
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
   <>
 {/* First section : Hero section */}
 <div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url("https://media.licdn.com/dms/image/D4D22AQGE0mVVq1a1qQ/feedshare-shrink_2048_1536/0/1710922083279?e=1717632000&v=beta&t=thrHcyb05qWIXXR_JiEUuik9Bcn7Iqsmuwmk87XyeUk")`}} className='h-[80vw] lg:h-[60vh] w-full bg-center bg-cover bg-no-repeat'>
  
  <div className='pt-16 md:pt-32 pb-8 w-full h-full'>
    <h2 className=' text-3xl lg:text-4xl uppercase flex justify-center font-[poppins] font-semibold'> Smc <span className='text-customOrange ml-2'> events </span></h2>
  </div>
  </div>

{/* text div  */}
  <div className='px-5 md:px-20 lg:px-24 text-center md:absolute md:top-[80vh] lg:top-[45vh]'>
  <p className='text-sm md:text-2xl text-white font-medium font-[poppins]'>We organise a variety of events ranging from boot camps, hackathons to several competitions on trading, investing, blockchain, and other diverse fields of Finance</p>
</div>


{/* Events Section */}
{/* Event type 1 */}
<div className='px-8 py-16 lg:py-40 lg:px-28'>
  <h2 className='text-customOrange uppercase font-semibold font-[poppins] text-3xl lg:text-4xl text-center'> <span className='text-white'>competitions</span> & hackathons   </h2>

{/* img and text section */}

<div className='lg:my-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center'>

<div className='p-2 mx-5  '>
    {/* <img className="rounded-lg" src={img1}/> */}
    <ImageSlider src1={img1} src2={img2} src3={img3}/>
  </div>
  
  <div className='p-4 lg:p-8'>
    <div className='mb-[10px] mt-3'><h5 className='text-3xl lg:text-4xl text-center lg:text-start font-medium '>Mech-a-thon 1.0</h5></div>
    <div>
    <p className='text-[16px] lg:text-xl text-justify font-[poppins] font-normal'>Among the general demographic, students are more likely to come up with new, creative, and outrageous ideas. Add to this the fact that students at College are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the club provides the right environment and resources. Club strives to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society</p></div>
  
  <div className='flex justify-center my-5'>
  <button className='secondary-btn '> Register here </button>
  </div>
 
  </div>
  

</div>





</div>


{/* Event type 2 */}
<div className='px-8 py-16 lg:py-24 lg:px-28'>
  <h2 className='text-white uppercase font-semibold font-[poppins] text-3xl lg:text-4xl text-center'> <span className='text-customOrange'>Sessions</span>  & Bootcamps</h2> 
{/* img and text section */}

<div className='lg:my-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center'>

<div className='p-2 mx-5  '>
    {/* <img className="rounded-lg" src={img1}/> */}
    <ImageSlider src1="https://media.licdn.com/dms/image/D4D22AQFFpLvVtTZ1Yw/feedshare-shrink_1280/0/1700058581918?e=1717632000&v=beta&t=Fa0_VWE0f0D6NQL6dV7r3yV-Bw7BsPTX4z-eej5Oj14" src2="https://media.licdn.com/dms/image/D4D22AQHG4yte_iYYFA/feedshare-shrink_2048_1536/0/1702227219342?e=1717632000&v=beta&t=l984UHCmTReTSI0gVX9xE2jEFsHdl2jMOR_kT2k79WY" src3="https://media.licdn.com/dms/image/D4D22AQHDk0LVG4wz5A/feedshare-shrink_2048_1536/0/1702227229988?e=1717632000&v=beta&t=6ik24uHfv5PVUYUa8QX5DCAUo8c9wXlptuHRtL4n1c4"/>
  </div>
  
  <div className='p-4 lg:p-8'>
    <div className='mb-[10px] mt-3'><h5 className='text-3xl lg:text-4xl text-center lg:text-start font-medium '>"Artificial Intelligence and Machine Learning: Today and Tomorrow,"</h5></div>
    <div>
    <p className='text-[16px] lg:text-xl text-justify font-[poppins] font-normal'>Among the general demographic, students are more likely to come up with new, creative, and outrageous ideas. Add to this the fact that students at College are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the club provides the right environment and resources. Club strives to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society</p></div>
  </div>
  

</div>
</div>

<Footer/>

   </>
  )
}

export default EventPage