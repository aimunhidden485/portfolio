import React from "react";
import aimunNahar from '../../../src/images/aimunNahar.pdf'
const Banner = () => {
  return (
      <div className="bg-[#22252c]">
          
          <div className="border"><p className="text-[#ffffff]">home</p></div>
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl" alt="imag"
        />
        <div>
          <h1 class="text-5xl text-[#ffffff] font-bold">Box Office News!</h1>
          <p class="py-6 text-[#ffffff]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a class="btn btn-[ #6d56c1]" href={aimunNahar} download> download resume</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
