import React from "react";
import { Link } from "react-router-dom";

const Logincontent = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="title flex flex-col space-y-2">
        <span className="text-white font-extrabold text-5xl">
          Select the tour you like from our top tour place.
        </span>
      </div>
      <div className="content">
        <span className="text-white">
          Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi
          optio consectetur adipisicing elit Ea consequuntur illum.
        </span>
      </div>
      <Link to="/">
      <div className="button">
        <div
          className="login-button w-[220px] my-3 py-2 px-8 border-[1px] text-base text-white font-medium border-white cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary hover:duration-500"
        >
          <span>Home Overview</span>
          <span className="px-2">
            <i class="fa-solid fa-angles-right text-small"></i>
          </span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Logincontent;
