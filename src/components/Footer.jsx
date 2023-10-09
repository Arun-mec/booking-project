import React from 'react'

const Footer = () => {
  return (
    <div className="h-[50vh] bg-dark flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col justify-center items-center leading-10">
            <span className="text-xl font-medium text-white text-opacity-90">Our Locations</span>
            <div className="flex flex-row gap-5 justify-center items-center text-white50">
                <span className="text-md font-thin cursor-pointer hover:text-white">India</span>
                <span className="text-md font-thin cursor-pointer hover:text-white">Dubai</span>
                <span className="text-md font-thin cursor-pointer hover:text-white">Europe</span>
                <span className="text-md font-thin cursor-pointer hover:text-white">America</span>
                <span className="text-md font-thin cursor-pointer hover:text-white">Singapore</span>
            </div>
        </div>
        <div className="w-[80%] flex flex-row items-start justify-evenly leading-10 opacity-90">
            <div className="flex flex-col text-white50 space-y-2">
                <span className="text-xl font-medium text-white text-opacity-80">Our services</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">About</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">Restaurant</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">Privacy and policy</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">Map & Location</span>
            </div>
            <div className="w-[20vw] flex flex-col items-center text-white50 leading-10">
                <span className="text-xl font-medium text-white text-opacity-80">News letter signup</span>
                <input className="w-full h-[2rem] bg-white bg-opacity-80 text-black p-1 flex items-center
                 rounded-md outline-none border-none my-2" type="text" />
                <button className="w-full h-[2rem] bg-primary text-white font-medium flex 
                justify-center items-center rounded-md my-1 hover:bg-secondary" type="text">Submit</button>
            </div>
            <div className="flex flex-col text-white50 space-y-2">
                <span className="text-xl font-medium text-white text-opacity-80">For booking</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">+91 83236623627</span>
                <span className="text-sm font-thin hover:text-white cursor-pointer">+88 28323222323</span>
                <span className="text-xl font-medium text-white text-opacity-80">Connect with us</span>
                <div className="text-md font-thin hover:text-white flex flex-row space-x-3">
                    <i class="fa-brands fa-facebook text-xl text-white50 hover:text-white"></i>
                    <i class="fa-brands fa-twitter text-xl text-white50 hover:text-white"></i>
                    <i class="fa-brands fa-instagram text-xl text-white50 hover:text-white"></i>
                    <i class="fa-brands fa-linkedin text-xl text-white50 hover:text-white"></i>
                    <i class="fa-brands fa-google-plus text-xl text-white50 hover:text-white"></i>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
           <span className="text-sm font-thin text-white50 text-opacity-80">
            <i class="fa-regular fa-copyright text-md text-white50 hover:text-white">2023 | All rights reserved.</i>
           </span>
        </div>
    </div>
  )
}

export default Footer