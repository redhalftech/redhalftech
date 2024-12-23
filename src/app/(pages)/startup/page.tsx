import NavTopBar from '@/components/navTopbar/NavTopBar'
import React from 'react'
import Hero from './components/Hero'
import State from './components/State'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import ActionBox from './components/ActionBox'
import Team from './components/Team'
import Pricing from './components/Pricing'
import ContactUs from '@/components/ContactUs'
import ActionBox2 from './components/ActionBox2'

const Startup = () => {
  return (
    <>
      <NavTopBar isDark />
      <Hero />
      <State />
      <AboutUs />
      <Features />
      <Services />
      <Testimonial />
      <ActionBox />
      <Team />
      <Pricing />
      <ContactUs />
      <ActionBox2 />
    </>
  )
}

export default Startup
