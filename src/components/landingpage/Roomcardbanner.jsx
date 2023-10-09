import React, { useState } from 'react'
// import image1 from '../../images/delux-suite.jpg'
// import image2 from '../../images/presidential-suite.jpg'
import image2 from "../../images/ad-image.jpg"

const Roomcard = ({title,content,image})=>{
    return (
        <div class="max-w-sm w-[20vw] rounded overflow-hidden shadow-lg h-[60vh]">
            <img class="w-full h-[30vh] object-cover" src={image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-thin italic">{content}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                ...<a href="" className='text-primary hover:text-black'>View more</a>
            </div>
        </div>
    )
}

function Roomcardbanner() {
  return (
    <div className="flex flex-col mt-5 container h-[100vh] justify-center items-center">
        <div className="room-card-title flex flex-col items-center justify-center text-center gap-5">
            <span className="text-green text-5xl font-bold">Rooms & Suits</span>
            <span className="text-green text-md font-light leading-6">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div className="room-cards flex flex-row justify-center items-center my-5 space-x-5">
            {
                rooms.map((room,index)=>{
                    const {title,content,image} = room
                    return (
                        <Roomcard key={index} title={title} content={content} image={image} />
                    )
                })
            }
        </div>
    </div>  
  )
}


const rooms = [
    {
        title:'Presidential suite',
        content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        image:image2
    },
    {
        title:'Delux suite',
        content:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        image:image2
    },
    {
        title:'Golden suite',
        content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image:image2
    },
    {
        title:'Golden suite',
        content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image:image2
    },
]

export default Roomcardbanner