import React from 'react'
import { Container, CustomImageList } from '../components'
import ChairmanAddress from '../components/ChairmanAddress'
import Trustee from '../components/Team/Trustee'
import Advisory from '../components/Team/Advisory'
import Media from '../components/Team/Media'
import OfficeStaff from '../components/Team/OfficeStaff'
import Branches from '../components/Team/Branches'
import Ludhiana from '../components/Team/Ludhiana'
import Delhi1 from  '../components/Team/Delhi1'
import Canada from '../components/Team/Canada'


function Team() {
  return (
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <ChairmanAddress />
          <Trustee />
          <Advisory />
          <Media />
          <OfficeStaff />
          <Branches />
          <Ludhiana />
          <Delhi1 />
          <Canada />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Team
