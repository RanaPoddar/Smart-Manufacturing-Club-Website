import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


const data = [
    {
        projectName : "Project 1 ",
        img : "https://picsum.photos/seed/img1/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat . "
    },
    {
        projectName : "Project 2 ",
        img : "https://picsum.photos/seed/img2/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    },
    {
        projectName : "Project 3 ",
        img : "https://picsum.photos/seed/img3/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    },
    {
        projectName : "Project 4 ",
        img : "https://picsum.photos/seed/img4/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    },
    {
        projectName : "Project 5 ",
        img : "https://picsum.photos/seed/img5/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    },
    {
        projectName : "Project 6 ",
        img : "https://picsum.photos/seed/img6/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    },
    {
        projectName : "Project 7 ",
        img : "https://picsum.photos/seed/img7/200/300",
        description : "Hello , this is a demo description of this project . lorem ipsem balked hency rickhy jahban ispat "
    }
]

function Projects() {
    const navigate = useNavigate()

    const gotToNewPage=()=>{
      navigate("/projects");
    }

    var settings = {
       
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 4000,
    speed:2000,
    swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
  return (
  <>
<div className='py-16 sm:py-16 md:py-20 lg:py-24'>
{/* container div */}

    <div className='flex justify-center pb-2'> 
    <h1 className='font-bold text-3xl md:text-4xl uppercase'> Projects</h1>
   </div>
    
<div className='w-3/4 m-auto'>
    <div className='mt-10'>
    <Slider {...settings}> 
{data.map((d) => (
    <div className='bg-lightBlack2 h-[450px] text-white rounded-2xl'>
    <div className='h-56 rounded-t-2xl bg-indigo-500 flex justify-center items-center'>
        <img src={d.img} alt='project1' className='h-[100%] w-[100%] rounded-t-2xl '/>
    </div>

    <div className='flex flex-col justify-center items-center gap-4 p-4'>
        {/* <p className='text-xl font-semibold'>{d.projectName}</p> */}
        <p className='font-[poppins]'>{d.description}</p>
        <button onClick={() => gotToNewPage()} className='secondary-btn'> Know more</button>
    </div>
    </div>
))}
</Slider>


    </div>
</div>


{/* Container div end <down> */}
</div> 
    </>
  )
}

export default Projects