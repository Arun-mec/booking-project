import React from "react";
import './Advertisementbanner.css'

const Advertisemtbanner = () => {
  return (
    <div
      className="advertisement-banner h-[60vh] bg-adimage bg-fixed bg-cover 
    bg-no-repeat bg-blend-multiply bg-black bg-opacity-50"
    >
      <div className="container h-full flex flex-col justify-center items-start gap-3 animate-pulse">
        <span className="text-5xl font-semibold text-white">The Spa Introduces the </span>
        <span className="advertisement-textbtm text-5xl font-semibold text-white">New Fusion Massage</span>
        {/* <div
          className="login-button w-48 my-10 py-2 px-8 border-[1px] text-base text-white font-medium border-white cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary hover:duration-500">
          <span>Reserve now</span>
          <span className="px-2">
          <i class="fa-solid fa-angles-right text-small"></i>
        </span>
        </div> */}
      </div>
    </div>
  );
};

export default Advertisemtbanner;
