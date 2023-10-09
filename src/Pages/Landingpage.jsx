import React from 'react'
import Banner from '../components/landingpage/Banner'
import Navbar from '../components/Navbar'
import Introcard from '../components/landingpage/Introcard'
import Advertisemtbanner from '../components/landingpage/Advertisementbanner/Advertisemtbanner'
import Roomcardbanner from '../components/landingpage/Roomcardbanner'
import Footer from '../components/Footer'

const Landingpage = () => {
  return (
    <div>
      <Banner />
      <Introcard />
      <Advertisemtbanner />
      <Roomcardbanner />
      <Footer />
    </div>
  )
}

export default Landingpage