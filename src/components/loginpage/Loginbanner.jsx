import React from 'react'
import Logincontent from './Logincontent'
import Loginform from './Loginform'

const Loginbanner = () => {
  return (
    <div className="bg-drinksimage bg-center bg-cover w-[100vw] h-[100vh] bg-black bg-opacity-60 
        bg-blend-multiply">
        <div className="container h-full flex flex-row justify-center items-center">
            <div className="flex w-[50vw] items-center justify-start p-20">
                <Logincontent />
            </div>
            <div className="flex w-[50vw] items-center justify-center">
                <Loginform />
            </div>
        </div>
    </div>
  )
}

export default Loginbanner