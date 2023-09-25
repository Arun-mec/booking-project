import React from 'react'
import Banner from '../components/landingpage/Banner'
import Navbar from '../components/landingpage/Navbar'
import Introcard from '../components/landingpage/Introcard'
import Advertisemtbanner from '../components/landingpage/Advertisemtbanner'

const Landingpage = () => {
  return (
    <div>
      <Banner />
      <Introcard />
      <Advertisemtbanner />
      <Introcard />
    </div>
  )
}

export default Landingpage