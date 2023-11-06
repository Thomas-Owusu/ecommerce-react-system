//Home page

import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  )
}

export default Shop
