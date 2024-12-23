import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import google from '@/assets/images/google.png'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home-3" id="home">
      <div className="bg-overlay" />
      <div className="home-center">
        <div className="home-desc-center">
          <Container>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={8}>
                <h5 className="text-primary"> Try our 14 days free trial</h5>
                <h1 className="lh-base display-3 fw-semibold text-white">Spending Made Smarter</h1>
                <p className="text-white-50 mb-4">
                  It sounds like you&apos;re describing the key features and benefits of a financial or expense management solution, budget controls,
                  and streamlined approval processes.
                </p>
                <div className="d-flex flex-wrap my-4 justify-content-center align-items-center gap-3">
                  <Image src={google} alt="google" width={30} />
                  <p className="f-18 mb-0 text-white">4.5</p>
                  <ul className="p-0 m-0 fs-6 d-flex text-warning">
                    <li>
                      <IconifyIcon icon="tabler:star-filled" />
                    </li>
                    <li>
                      <IconifyIcon icon="tabler:star-filled" />
                    </li>
                    <li>
                      <IconifyIcon icon="tabler:star-filled" />
                    </li>
                    <li>
                      <IconifyIcon icon="tabler:star-filled" />
                    </li>
                    <li>
                      <IconifyIcon icon="tabler:star-half-filled" />
                    </li>
                  </ul>
                  <p className="mb-0 text-white-50">1900+ Reviews</p>
                  <div className="main-btn text-start ms-3">
                    <a href="#" className="d-flex align-items-center">
                      <div className="icon-bg d-flex bg-primary align-items-center justify-content-center rounded-circle">
                        <span className="text-light">
                          <IconifyIcon icon="tabler:player-play-filled" />
                        </span>
                      </div>
                      <div className="d-block ms-3 ">
                        <p className="text-white-50 m-0">Watch 1 min video testimonial from</p>
                        <p className="text-white-50 m-0"> our satisfied customers</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="subscribe">
                  <form>
                    <Row className="justify-content-center align-items-center g-2">
                      <Col lg={6}>
                        <div>
                          <input type="text" className="form-control rounded-pill" placeholder="Enter your E-mail address" />
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <button type="submit" className="btn btn-primary">
                            Subscribe Us
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
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
