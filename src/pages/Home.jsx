import React from 'react'
import { Container, CustomImageList } from '../components'


function Home() {
  return (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
          <CustomImageList />
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Ab hoga karya karam shuru
            </h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
