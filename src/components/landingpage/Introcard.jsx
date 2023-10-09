import React from "react";

const Introcard = () => {
  return (
    <div className="container flex flex-col justify-evenly items-start h-[60vh] py-5">
      <div className="flex items-center justify-start">
          <p className="text-4xl text-green font-bold">
            Special <br />
            Viewpoint
          </p>
      </div>
      <div className="flex flex-row items-center justify-evenly text-justify gap-10 leading-8">
        <div className="flex flex-row items-center justify-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word
        </div>
        <div className="flex flex-row items-center justify-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word
        </div>
      </div>
      <div
          className="login-button my-3 py-2 px-8 border-[1px] text-base text-green font-medium border-green cursor-pointer 
          hover:bg-primary hover:text-white hover:border-primary hover:duration-500" >
          <span>Discover more</span>
          <span className="px-2">
          <i class="fa-solid fa-angles-right text-small"></i>
        </span>
      </div>
    </div>
  );
};

export default Introcard;
