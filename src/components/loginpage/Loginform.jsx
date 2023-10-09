import React from "react";
import { Link } from "react-router-dom";

const Loginform = () => {
  return (
      <div
        className="bg-white w-[25vw] p-[10%] flex flex-col 
        justify-start items-center space-y-5">
        <span className="text-lg font-bold">LOGIN</span>
        <form action="" method="get" className="space-y-5">
          <input
            type="text"
            placeholder="Username or Email"
            className="h-10 w-full bg-slate p-2 placeholder:text-sm border-none outline-none" />
          <input
            type="password"
            placeholder="Password"
            className="h-10 w-full bg-slate p-2 placeholder:text-sm border-none outline-none" />
          <div className="login-button w-full flex items-center justify-center h-10 p-2 text-base bg-black text-white font-thin 
          border-white cursor-pointer hover:bg-primary hover:text-white hover:border-primary hover:duration-500">
            <span>LOGIN</span>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <span className="text-md font-normal cursor-pointer">Already have an account? </span>
            <Link to="/signin" className="text-md font-bold cursor-pointer hover:underline">
              Sign in now</Link>
          </div>
        </form>
      </div>
  );
};

export default Loginform;
