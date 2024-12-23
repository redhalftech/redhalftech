import Image from 'next/image'
import React from 'react'
import google from '@/assets/images/google.png'
import linkedin from '@/assets/images/linkedin.png'
import bgImg3 from '@/assets/images/bg-img-3.png'
import userImg from '@/assets/images/user-msg.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home-2 pb-0" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col lg={6}>
                <div>
                  <h5 className="mb-3 text-dark">Let&apos;s Make The Best Investment</h5>
                  <h1 className="text-dark display-6 fw-semibold lh-base">
                    You Start , Raise And Grow Faster With <span className="text-primary"> Skywave </span>
                  </h1>
                  <p className="mt-4 text-muted f-16">
                    Determine what you want to achieve with your digital products. Are you looking to increase revenue, improve customer experience,
                    streamline processes, or expand your market reach?
                  </p>
                  <Row className="align-items-center justify-content-start mt-2 g-3">
                    <Col lg={6}>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={google} alt="google" className="img-fluid" height={40} width={40} />
                        <div>
                          <div className="d-flex align-items-center">
                            <h4 className="text-dark fw-bold m-0">4.5</h4>
                            <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
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
                          </div>
                          <p className="mt-1 mb-0 text-muted">Best Rated On Google</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={linkedin} alt="linkedin" className="img-fluid" height={40} width={40} />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h4 className="text-dark fw-bold m-0">4.7</h4>
                            <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
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
                          </div>
                          <p className="mt-1 mb-0 text-muted">Best Rated On Linkedin</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="main-btn mt-5">
                    <Button variant="primary" className="">
                      Get Free Trial
                    </Button>
                    &nbsp;
                    <Button variant="info" className=" ms-1">
                      Started Account
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="main-top-img">
                  <Image src={bgImg3} alt="bgImg3" className="img-fluid" />
                  <Image src={userImg} alt="userImg" className="chat-img" />
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
