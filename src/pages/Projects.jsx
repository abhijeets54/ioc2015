import React from 'react'
import { Container, CustomImageList } from '../components'
import ThreePillars from '../components/ThreePillars'
import Education from '../components/Projects/Education'
import Awareness from '../components/Projects/Awareness'
import HumanitarianAid from '../components/Projects/HumanitarianAid'


function Projects() {
  return (
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <ThreePillars />
          <Education/>
          <Awareness />
          <HumanitarianAid />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
