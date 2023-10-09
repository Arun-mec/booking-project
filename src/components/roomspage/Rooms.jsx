import React from 'react'
import RoomCard from './RoomCard'

const Rooms = () => {
  return (
    <div className='container grid grid-flow-row grid-row-1'>
      Rooms
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
    </div>
  )
}

export default Rooms