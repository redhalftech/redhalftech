import NavTopBar from '@/components/navTopbar/NavTopBar'
import React from 'react'
import Hero from './components/Hero'
import State from './components/State'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Services from './components/Services'
import ActionBox from './components/ActionBox'
import Team from './components/Team'
import Price from './components/Price'
import ContactUs from '@/components/ContactUs'
import Testimonial from './components/Testimonial'

const Software = () => {
  return (
    <>
      <NavTopBar isDark />
      <Hero />
      <State />
      <AboutUs />
      <Features />
      <Services />
      <ActionBox />
      <Team />
      <Testimonial />
      <Price />
      <ContactUs />
    </>
  )
}

export default Software
