import React, { useState } from "react";
import "./Indivdual.css";

const Individual = () => {
  const [details, setDetails] = useState(false);
  return (
    <div
      className="flex flex-col bg-resortimage w-[20vw] h-[50vh] 
    justify-center items-center
    bg-cover hover:bg-black hover:bg-blend-multiply"
      onMouseEnter={() => {
        setDetails(true);
      }}
      onMouseLeave={() => {
        setDetails(false);
      }}
    >
      {/* <img src={image} className='max-w-xs' alt="" srcset="" /> */}
      {details && (
        <div className="exprt-name flex flex-col justify-center items-center p-3">
          <span className="text-white text-opacity-60 font-medium text-lg">Adrian Luna</span>
          <span className="text-white text-opacity-60 font-thin text-xs text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</span>
        </div>
      )}
      {details && 
      <div className="text-md font-thin hover:text-white flex flex-row space-x-3">
        <i class="fa-brands fa-facebook text-xl text-white text-opacity-60 hover:text-white"></i>
        <i class="fa-brands fa-twitter text-xl text-white text-opacity-60 hover:text-white"></i>
        <i class="fa-brands fa-instagram text-xl text-white text-opacity-60 hover:text-white"></i>
        <i class="fa-brands fa-linkedin text-xl text-white text-opacity-60 hover:text-white"></i>
        <i class="fa-brands fa-google-plus text-xl text-white text-opacity-60 hover:text-white"></i>
  </div>}
    </div>
  );
};

export default Individual;
