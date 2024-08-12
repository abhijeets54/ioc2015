import React from 'react'
import { Container, CustomImageList } from '../components'
import Collage from '../components/Collage'
import About from '../components/About'
import ChairmanAddress from '../components/ChairmanAddress'
import ThreePillars from '../components/ThreePillars'
import OurAssociates from '../components/OurAssociates'
import QuickNumbers from '../components/QuickNumbers'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import DonateComponent from '../components/Donate/DonateComponent'
import Register from '../Authentication/Register'


function Home() {
  return (
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <Collage />
          <About />
          <ChairmanAddress />
          <ThreePillars />
          <OurAssociates />
          <QuickNumbers />
          <WhatPeopleAreSaying />
          <DonateComponent />
          <Register />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
