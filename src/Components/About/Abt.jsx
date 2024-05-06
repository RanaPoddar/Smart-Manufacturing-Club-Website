import React from 'react'
import "./Abt.scss"

function Abt() {
  return (
    <div class="container">
    <div class="about-section">
        <img src="https://picsum.photos/id/237/400/300" alt="Your Image" class="about-image"/>
        <div class="about-text">
            <h2 className='font-[poppins]'>Smart Manufacturing Club - NIAMT RANCHI</h2>
            <p className='text-white opacity-80 font-[inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa sit amet risus varius dapibus nec ut velit. Nulla facilisi. Etiam non enim vitae lectus fermentum iaculis. Vivamus id nunc nec metus consectetur ullamcorper.</p>
            <p className='text-white opacity-80 font-[inter] '>Sed nec ex a justo tincidunt lacinia. Phasellus eget ipsum id metus lacinia fermentum in ac mauris. Sed at urna convallis, fermentum lacus in, aliquam lectus.</p>
        </div>
    </div>
</div>

  )
}

export default Abt