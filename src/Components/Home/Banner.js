import React from "react";
import aimunNahar from '../../../src/images/aimunNahar.pdf'
const Banner = () => {
  return (
      <div className="bg-[#22252c]">
          
         
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
       
        <div data-aos="fade-up"  data-aos-mirror="true">
          <h1 class="text-5xl text-[#ffffff] font-bold">Hi, This is Aimun Nahar</h1>
          <p class="py-6 text-[#ffffff]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a class="px-5 py-3 bg-[#D9A21B] uppercase rounded" href={aimunNahar} download> download resume</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
