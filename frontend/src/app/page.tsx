import Clients from '@/components/Clients'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Iso from '@/components/Iso'
import Scenario from '@/components/Scenario'
import Video from '@/components/Video'
import Why_Choose from '@/components/Why_Choose'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Why_Choose/>
    <Clients/>
    <Scenario/>
    <Iso/>
    <Video/>    
    <Features/>  
    </div>
  )
}

export default Home