import React from 'react'
import Carousel from './Carousel'


function Snapshorts({slides}) {
  return (<>
<div className='px-8 py-16 sm:px-8 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24'>
<div className='flex justify-center pb-12 uppercase'> <h1 className='text-white text-3xl md:text-4xl font-bold'> Smc <span className='text-customOrange'>Snapshorts</span></h1></div>

<div className='flex justify-center items-center px-2 md:px-20  '>
<Carousel/>
</div>
</div>

    </>
  )
}

export default Snapshorts