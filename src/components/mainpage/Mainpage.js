import React from 'react'
import { Categories } from './Categories'
import { Flashdeal } from './Flashdeal'
import { Movingprod } from './Movingprod'
import { Productforyou } from './Productforyou'
import { Service } from './Service'

import SliderCard from './SliderCard'


const Mainpage = () => {
  return (<>
      <SliderCard/>
      <Categories/>
      <Flashdeal/>
      <Movingprod/>
      <Productforyou/>
      <Service/>
      </>
  )
}

export default Mainpage