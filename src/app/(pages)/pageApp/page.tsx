import NavTopBar from '@/components/navTopbar/NavTopBar'
import React from 'react'
import Hero from './components/Hero'
import Download from './components/Download'
import Features from './components/Features'
import Setup from './components/Setup'
import Apps from './components/Apps'
import Team from './components/Team'
import Pricing from './components/Pricing'
import ActionBox from './components/ActionBox'
import ContactUs from '@/components/ContactUs'

const AppPages = () => {
  return (
    <>
      <NavTopBar isDark />
      <Hero />
      <Download />
      <Features />
      <Setup />
      <Apps />
      <Team />
      <Pricing />
      <ActionBox />
      <ContactUs />
    </>
  )
}

export default AppPages
