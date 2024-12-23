import ContactUs from '@/components/ContactUs'
import NavTopBar from '@/components/navTopbar/NavTopBar'
import ActionBox from './components/ActionBox'
import Clients from './components/Clients'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Work from './components/Work'

const Business = () => {
  return (
    <>
      <NavTopBar />
      <Hero />
      <Clients />
      <Work />
      <Features />
      <Services />
      <Testimonial />
      <Team />
      <ActionBox />
      <Pricing />
      <ContactUs />
    </>
  )
}

export default Business
