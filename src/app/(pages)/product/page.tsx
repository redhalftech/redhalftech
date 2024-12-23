import NavTopBar from '@/components/navTopbar/NavTopBar'
import AboutUs from './components/AboutUs'
import ActionBox from './components/ActionBox'
import CreativeUs from './components/CreativeUs'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import ContactUs from '@/components/ContactUs'

const ProductPages = () => {
  return (
    <>
      <NavTopBar />
      <Hero />
      <AboutUs />
      <CreativeUs />
      <Features />
      <Services />
      <ActionBox />
      <Testimonial />
      <Team />
      <Pricing />
      <ContactUs />
    </>
  )
}

export default ProductPages
