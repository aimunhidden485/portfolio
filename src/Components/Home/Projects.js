import React from 'react';
import desktop  from '../../../src/images/desktop.png'
import margeretMobile from '../../../src/images/margeretMobile.png'
const Projects = () => {
    return (
        <div className='bg-[#ffffff] mt-[80px] mb-[80px]'>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full  border-red border-2">
   <div className='grid lg:grid-cols-2 justify-center items-center'>
   <img src={desktop} alt='website' class="w-50 mx-auto" />
 <div>
 <h1 className='text-5xl'>Margeret Fox Fitness</h1>
 <button className='btn btn-primary'>Details</button>
 </div>

   </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-50 mx-auto" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-50 mx-auto" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-50 mx-auto" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects;