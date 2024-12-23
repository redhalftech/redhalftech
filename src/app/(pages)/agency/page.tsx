import ContactUs from '@/components/ContactUs'
import NavTopBar from '@/components/navTopbar/NavTopBar'
import AboutUs from './components/AboutUs'
import ActionBox from './components/ActionBox'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Project from './components/Project'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

const AgencyPage = () => {
  return (
    <>
      <NavTopBar isDark />
      <Hero />
      <AboutUs />
      <Features />
      <Services />
      <Project />
      <ActionBox />
      <Testimonial />
      <Pricing />
      <ContactUs />
    </>
  )
}

export default AgencyPage
