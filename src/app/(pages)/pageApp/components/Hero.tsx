import Image from 'next/image'
import React from 'react'
import phone from '@/assets/images/sm-phone.png'
import apple from '@/assets/images/apple_store.png'
import google from '@/assets/images/google-play.png'
import mobile from '@/assets/images/mobile.png'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home-app" id="home">
      <div className="bg-overlay-2" />
      <div className="home-center pb-0">
        <div className="home-desc-center">
          <Container>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={9}>
                <Image src={phone} alt="phone" className="img-fluid mb-4" />
                <h5 className="mb-3 text-primary">Welcome To Skywave</h5>
                <h1 className="lh-base text-dark">
                  Are You Ready For A Revolution In Tech Industry ?<span className="text-primary"> Explore Us .</span>{' '}
                </h1>
                <p className="text-muted mb-4">
                  At the heart of every successful tech application lies a fusion of creativity, functionality, and user-centric design. Whether
                  it&apos;s streamlining business processes, enhancing customer experiences
                </p>
                <div className="main-btn text-center mt-4">
                  <a href="" className="btn p-0 m-0">
                    <Image src={apple} alt="apple" className="img-fluid" />
                  </a>
                  &nbsp;
                  <a href="" className="btn p-0 m-0 ms-2">
                    <Image src={google} alt="google" className="img-fluid" />
                  </a>
                </div>
              </Col>
              <Col lg={8}>
                <div className="main-img">
                  <Image src={mobile} alt="mobile" className="img-fluid mt-5" />
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
