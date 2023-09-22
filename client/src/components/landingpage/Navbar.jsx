import React from "react";

const Navbar = () => {
  return (
    <div className="navbar p-3 py-5 flex flex-row justify-between items-center">
      <h1 className="text-3xl font-medium cursor-pointer text-white hover:text-primary">
        Title
      </h1>
      <div className="flex flex-row justify-around align-bottom text-white font-thin">
        <div className="px-5 cursor-pointer hover:text-primary">HOME</div>
        <div className="px-5 cursor-pointer hover:text-primary">ROOMS</div>
        <div className="px-5 cursor-pointer hover:text-primary flex flex-row items-center">
          <span className="px-2">DESTINATIONS</span>
          <span><i class="fa-solid fa-angle-down"></i></span>
        </div>
        <div className="px-5 cursor-pointer hover:text-primary">
          <span className="px-2">RESTAURANTS</span>
          <span><i class="fa-solid fa-angle-down"></i></span>
        </div>
        <div className="px-5 cursor-pointer hover:text-primary">
          GET IN TOUCH
        </div>
      </div>
      <div>
        <div
          className="login-button my-3 py-2 px-8 border-[1px] text-base text-white font-medium border-white cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary" >
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
