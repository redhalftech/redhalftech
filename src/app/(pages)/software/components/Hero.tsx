import Image from 'next/image'
import React from 'react'
import bgImg4 from '@/assets/images/bg-img-4.png'
import heroCard from '@/assets/images/hero-card.png'
import heroCard2 from '@/assets/images/hero-card-2.png'
import heroCard3 from '@/assets/images/hero-card-3.png'
import heroCard4 from '@/assets/images/hero-card-4.png'
import arrow2 from '@/assets/images/arrow-02.png'
import arrow1 from '@/assets/images/arrow-01.png'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home-software" id="home">
      <div className="home-center pb-0">
        <div className="home-desc-center">
          <Container>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={9}>
                <h5 className="mb-3 text-primary">Including Design And Data Platform</h5>
                <h1 className="lh-base">
                  Easy And Secure Access To All Your Files Anytime With <span className="text-primary">Skywave </span>{' '}
                </h1>
                <p className="text-muted mb-4">
                  In today&apos;s digital age, the demand for easy and secure access to files anytime, anywhere has become paramount. With the
                  increasing reliance on digital data for personal, professional.
                </p>
                <Button variant="primary">Get Free Trial</Button>
              </Col>
              <Col lg={12}>
                <div className="main-img">
                  <Image src={bgImg4} alt="bgImg4" className="img-fluid" />
                  <Image src={heroCard} alt="heroCard" className="img-fluid card-img-1" width={240} />
                  <Image src={heroCard2} alt="heroCard2" className="img-fluid card-img-2" width={240} />
                  <Image src={heroCard3} alt="heroCard3" className="img-fluid card-img-3" width={240} />
                  <Image src={heroCard4} alt="heroCard4" className="img-fluid card-img-4" width={200} />
                  <Image src={arrow2} alt="arrow2" className="img-fluid arrow-img" width={70} />
                  <Image src={arrow1} alt="arrow1" className="img-fluid arrow-img-2" width={70} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
