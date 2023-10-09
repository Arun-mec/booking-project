import React from 'react'
import Individual from './Individual/Individual'

const Gallery = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-3">
        <Individual />
        <Individual />
        <Individual />
        <Individual />
    </div>
  )
}

export default Gallery