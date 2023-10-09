import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const destns = ["India", "Singapore", "Thailand", "Europe"];
  const resnts = ["Dinner", "Cafe", "Fast food"];
  return (
    <div className="navbar p-3 py-5 flex flex-row justify-between items-center">
      <h1 className="text-3xl font-medium cursor-pointer text-white hover:text-primary">
        Title
      </h1>
      <div className="flex flex-row justify-around align-bottom text-white font-thin">
        <Link to="/"><div className="px-5 cursor-pointer hover:text-primary">HOME</div></Link>
        <Link to="/rooms"><div className="px-5 cursor-pointer hover:text-primary">ROOMS</div></Link>
        <div class="px-5 relative inline-block text-left justify-center">
          <div className="flex flex-row group hover:text-primary cursor-pointer">
            <span className="px-2">DESTINATIONS</span>
            <span>
              <i class="fa-solid fa-angle-down"></i>
            </span>
            <Dropdown menuitems={destns} />
          </div>
        </div>

        <div class="px-5 relative inline-block text-left justify-center">
          <div className="flex flex-row group hover:text-primary cursor-pointer">
            <span className="px-2">RESTAURANTS</span>
            <span>
              <i class="fa-solid fa-angle-down"></i>
            </span>
            <Dropdown menuitems={resnts} />
          </div>
        </div>

        <div className="px-5 cursor-pointer hover:text-primary">
          GET IN TOUCH
        </div>
      </div>
      <div>
      <Link to="/signin">
        <div
          className="login-button my-3 py-2 px-8 border-[1px] text-base text-white font-medium border-white cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary hover:duration-500"
        >
          <span>
           Sign in</span>
        </div>
      </Link>
      </div>
    </div>
  );
};

const Dropdown = ({ menuitems }) => {
  return (
    <div
      class="hidden group-hover:block absolute z-10 mt-6 pt-2 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1">
      <div
        class="py-1 w-56 origin-top-right rounded-md bg-white 
                text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="none">
        {menuitems.map((menuitem) => {
          return <div className="hover:bg-white50 bg-opacity-5 hover:text-white"><a href="#" class="text-gray-700 block px-4 py-2 text-sm">{menuitem}</a></div>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
