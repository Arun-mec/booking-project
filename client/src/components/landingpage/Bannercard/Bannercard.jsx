import React from "react";
import './Bannercard.css'

const Card = ({ image, content }) => {
  return (
    <div className="card flex flex-col items-center justify-start w-[18vw] p-2">
      <img src={image} alt="No image" className="h-44 w-full object-cover" />
      <span className="text-white text-xl font-bold text-opacity-90 pt-2">
        {content}
      </span>
    </div>
  );
};

const Bannercard = ({bannerData}) => {
  return (
    <div className="banner-card flex flex-col items-start my-8 w-full">
      <div className="title">
        <h6 className="font-bold font-sans italic text-7xl text-white text-opacity-80">
          {bannerData.title}
        </h6>
      </div>
      <div className="cards flex flex-row py-3">
        <Card image={bannerData.img1} content={bannerData.body1} />
        <Card image={bannerData.img2} content={bannerData.body2} />
        <Card image={bannerData.img1} content={bannerData.body3} />
      </div>
      <div
        className="login-button my-3 py-2 px-8 border-[1px] text-base text-white font-medium border-white cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary">
        <span>Reserve now</span>
        <span className="px-2">
          <i class="fa-solid fa-angles-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Bannercard;
