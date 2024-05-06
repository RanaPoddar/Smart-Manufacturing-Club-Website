import React, { useLayoutEffect } from 'react'
import team from "../assets/team.jpeg"
import Card from '../Components/Card'
import Footer from '../Components/Footer/Footer'

function TeamPage() {

 // To Scroll on top every time
 useLayoutEffect(() => {
  window.scrollTo(0, 0)
});

  return (
   <>

   {/* First section : Hero section */}
<div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url(${team})`}} className='h-[80vw] lg:h-[100vh] w-full bg-center bg-cover bg-no-repeat'>
  
<div className='pt-16 md:pt-32 pb-8 w-full h-full'>
  <h2 className=' text-3xl lg:text-4xl uppercase flex justify-center font-[poppins] font-semibold'> Smc <span className='text-customOrange ml-2'> Team </span></h2>
</div>
</div>

{/* text div  */}
<div className='px-5 md:px-20 text-center md:absolute md:top-[80vh]'>
  <p className='text-sm md:text-2xl text-white font-medium font-[poppins]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu mauris interdum, commodo sem vel, cursus ex. Ut semper sem id neque volutpat, nec maximus tellus ullamcorper. Nullam posuere posuere est ac consequat. Maecenas mollis neque ac.</p>
</div>

{/* Members Section */}
{/* Member type 1 */}
<div className='px-8 py-16 lg:py-24 lg:px-28'>
  <h2 className='text-customOrange uppercase font-semibold font-[poppins] text-3xl lg:text-5xl text-center'>advisor</h2>
<div className='flex justify-center items-center'>
{/* props of card --->  */}
<Card img="https://media.licdn.com/dms/image/C4E03AQEOf40RdUUDWg/profile-displayphoto-shrink_400_400/0/1517473399338?e=1720051200&v=beta&t=cTHcZEOwJNwKiWEqAfTHD0fWFtfp-umeeyQCg02Qg78" name="dr Himanshu khandelwal" about="Proff at NIAMT Ranchi" fb="https://www.facebook.com" linkedin="" mail=""/>
</div>

</div>

{/* Member type 2 */}

<div className='px-8 py-16 lg:py-24 lg:px-28'>
  <h2 className='text-customOrange uppercase font-semibold font-[poppins] text-3xl lg:text-5xl text-center'>STUDENT  <span className='text-white'>EXECUTIVE HEAD</span></h2>
<div className='flex justify-center items-center'>
{/* props of card --->  */}
<div className='flex flex-wrap justify-center items-center'>
<Card img="https://media.licdn.com/dms/image/C4E03AQEOf40RdUUDWg/profile-displayphoto-shrink_400_400/0/1517473399338?e=1720051200&v=beta&t=cTHcZEOwJNwKiWEqAfTHD0fWFtfp-umeeyQCg02Qg78" name="dr Himanshu khandelwal" about="Proff at NIAMT Ranchi" fb="https://www.facebook.com" linkedin="" mail=""/>
<Card img="https://media.licdn.com/dms/image/C4E03AQEOf40RdUUDWg/profile-displayphoto-shrink_400_400/0/1517473399338?e=1720051200&v=beta&t=cTHcZEOwJNwKiWEqAfTHD0fWFtfp-umeeyQCg02Qg78" name="dr Himanshu khandelwal" about="Proff at NIAMT Ranchi" fb="https://www.facebook.com" linkedin="" mail=""/>
<Card img="https://media.licdn.com/dms/image/C4E03AQEOf40RdUUDWg/profile-displayphoto-shrink_400_400/0/1517473399338?e=1720051200&v=beta&t=cTHcZEOwJNwKiWEqAfTHD0fWFtfp-umeeyQCg02Qg78" name="dr Himanshu khandelwal" about="Proff at NIAMT Ranchi" fb="https://www.facebook.com" linkedin="" mail=""/>

</div>

</div>
{/* Member type 2 */}



</div>

{/* Member type 3 : Developer */}
<div className='px-8 py-16 lg:py-24 lg:px-28'>
  <h2 className='text-customOrange uppercase font-semibold font-[poppins] text-3xl lg:text-5xl text-center'>Developer</h2>
<div className='flex justify-center items-center'>
{/* props of card --->  */}
<Card img="https://media.licdn.com/dms/image/C4E03AQEOf40RdUUDWg/profile-displayphoto-shrink_400_400/0/1517473399338?e=1720051200&v=beta&t=cTHcZEOwJNwKiWEqAfTHD0fWFtfp-umeeyQCg02Qg78" name="dr Himanshu khandelwal" about="Proff at NIAMT Ranchi" fb="https://www.facebook.com" linkedin="" mail=""/>
</div>

</div>


<Footer />
   </>
  )
}

export default TeamPage