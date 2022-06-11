import React from 'react';
import brush from '../../../src/images/brush.png'
import bunch from '../../../src/images/bunch.png'
import margeret from '../../../src/images/margeret.png'
import headphone from '../../../src/images/headphone.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Projects = () => {
  AOS.init()
    return (
        <div className='bg-[#ffffff] mt-[80px] mb-[80px] px-20'>
          <h1 className='text-center text-4xl font-bold mb-5'>Projects</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full mx-auto gap-5'>
          <div data-aos="fade-right" class="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[300px]' src={brush} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Brush Manufacturer</h2>
    <p>Manufacturing goods</p>
    <div class="card-actions ">
      <button class="px-5 py-3 bg-[#22252c] uppercase rounded text-white ">Details</button>
    </div>
  </div>
</div>
          <div data-aos="fade-left" data-aos-easing="ease-in-out" class="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[300px]' src={bunch} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Bunch</h2>
    <p>Fruits warehouse</p>
    <div class="card-actions ">
      <button class="px-5 py-3 bg-[#22252c] uppercase rounded text-white">Details</button>
    </div>
  </div>
</div>
          <div data-aos="fade-up-right" class="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[300px]' src={margeret} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Marget fox fitness</h2>
    <p>Independent service provider website</p>
    <div class="card-actions ">
      <button class="px-5 py-3 bg-[#22252c] uppercase rounded text-white">Details</button>
    </div>
  </div>
</div>
          <div data-aos="fade-up-left" class="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[300px]' src={headphone} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Headphone City</h2>
    <p>This shows review of headphones</p>
    <div class="card-actions ">
      <button class="px-5 py-3 bg-[#22252c] uppercase rounded text-white">Live</button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Projects;