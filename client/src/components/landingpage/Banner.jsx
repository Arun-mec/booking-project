import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Bannercard from "./Bannercard/Bannercard";
import img1 from "../../images/resort-image.jpg";
import img2 from "../../images/resortimage.jpg";

const Banner = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="h-[95vh] w-full bg-resortimage bg-cover bg-no-repeat bg-blend-multiply bg-black bg-opacity-70">
      <Navbar />
      <div className="container mx-auto pt-8 overflow-hidden flex flex-row">
        {
          <Bannercard key={slide} bannerData={carousalData[slide]} />
        }
      </div>
      <div className="container mx-auto flex flex-row items-center">
        {
          carousalData.map((carousal, index) => {
            return index === slide ? (
              <i key={index} class="fa-solid fa-circle text-[12px] px-2 text-primary"></i>
            ) : (
              <i key={index} class="fa-solid fa-circle text-[8px] px-2 text-white hover:text-primary" 
              onClick={()=>{
                console.log(slide)
                setSlide(index)}}></i>
            );
          })
          // <i class="fa-solid fa-circle px-2 text-primary hover:text-primary"></i>
          // <i class="fa-solid fa-circle px-2 text-white hover:text-primary"></i>
          // <i class="fa-solid fa-circle px-2 text-white hover:text-primary"></i>
        }
      </div>
    </div>
  );
};

const carousalData = [
  {
    title: "Magnific Resort",
    img1: img1,
    body1: "A Dreamy Hotel On A Magnificent Island.",
    img2: img2,
    body2: "Luxury Living Suites With Exclusive Offers",
    img3: img1,
    body3: "Satisfying People’s Hunger For Life’s Pleasures",
  },
  {
    title: "Amazing experience",
    img1: img1,
    body1: "A Dreamy Hotel On A Magnificent Island.",
    img2: img2,
    body2: "Luxury Living Suites With Exclusive Offers",
    img3: img1,
    body3: "Satisfying People’s Hunger For Life’s Pleasures",
  },
  {
    title: "Horrific Resort",
    img1: img1,
    body1: "A Dreamy Hotel On A Magnificent Island.",
    img2: img2,
    body2: "Luxury Living Suites With Exclusive Offers",
    img3: img1,
    body3: "Satisfying People’s Hunger For Life’s Pleasures",
  },
];

export default Banner;
