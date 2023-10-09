import React from "react";
import { Link } from "react-router-dom";

const Signinform = () => {
  return (
    <div
      className="bg-white w-[25vw] p-[10%] flex flex-col 
        justify-start items-center space-y-5"
    >
      <span className="text-lg font-bold">SIGNUP</span>
      <form action="" method="get" className="space-y-5">
        <input
          type="text"
          placeholder="Username"
          className="h-10 w-full bg-slate p-2 placeholder:text-sm border-none outline-none"
        />
        <input
          type="text"
          placeholder="User email"
          className="h-10 w-full bg-slate p-2 placeholder:text-sm border-none outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-10 w-full bg-slate p-2 placeholder:text-sm border-none outline-none"
        />
        <div
          className="login-button w-full flex items-center justify-center h-10 p-2 text-base bg-black text-white font-thin 
          border-white cursor-pointer hover:bg-primary hover:text-white hover:border-primary hover:duration-500"
        >
          <span>SIGN UP</span>
        </div>
        <span className="text-sm font-normal cursor-pointer">
            By clicking Signup, I agree to your terms and conditions
        </span>
        <div className="flex flex-row items-center justify-center space-x-1">
          <span className="text-md font-normal cursor-pointer">
            Don't have an account?
          </span>
          <Link
            to="/login"
            className="text-md font-bold cursor-pointer hover:underline">
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
