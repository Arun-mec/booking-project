import React from "react";
import img from "../../images/person1.jpg"
import Gallery from "./Gallery";

const Teams = () => {
  return (
    <div className="container flex flex-row pt-10 items-start py-20">
      <div className="flex flex-col w-[40vw] space-y-8">
        <span className="text-4xl font-semibold text-green">Our Experts</span>
        <div className="flex flex-row items-center justify-evenly text-justify leading-8">
            <span className="text-md">Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC</span>
        </div>
        <div
          className="w-[200px] my-3 py-2 px-8 flex justify-center items-center border-[1px] text-base text-green font-medium border-green cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary hover:duration-500">
          <span>More Details</span>
          <span className="px-2">
            <i class="fa-solid fa-angles-right text-small"></i>
          </span>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Teams;
