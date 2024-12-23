import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import agency from '@/assets/images/agency-img.png'
import avatar7 from '@/assets/images/team/avatar-7.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar9 from '@/assets/images/team/avatar-9.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  const images = [avatar7, avatar6, avatar8, avatar9]
  return (
    <section className="bg-home-agency bg-light position-relative" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container>
            <Row className="align-items-center justify-content-between position-relative">
              <Col lg={5}>
                <div className="title-sm border p-1 d-inline-block mb-4 rounded-pill px-2 bg-light">
                  <a href="">
                    <p className="fs-6 mb-0 text-primary fw-medium">
                      <span className="badge text-light bg-primary rounded-pill me-2 mb-1">New</span>Show Product{' '}
                      <i className="ti ti-arrow-narrow-right ms-1 align-middle" />
                    </p>
                  </a>
                </div>
                <h1 className="lh-base">Crafting Digital Solutions for Your Success</h1>
                <p className="text-muted">
                  At the heart of our mission is your success. We specialize in developing cutting-edge digital products tailored to meet your unique
                  needs.
                </p>
                <Row className="mt-4">
                  <Col lg={6}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-3" />7 Day Free Trial
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-3" />
                      Easy To Set Up
                    </p>
                  </Col>
                </Row>
                <div className="user-team-price mt-3 d-flex align-items-center">
                  <ul>
                    {images.map((img, idx) => (
                      <li key={idx}>
                        <Image src={img} alt="image" className="rounded-circle" />
                      </li>
                    ))}
                  </ul>
                  <div className="d-block ms-2">
                    <h6 className="fw-semibold mb-1">100K</h6>
                    <h6 className="fw-semibold">Active User</h6>
                  </div>
                </div>
                <div className="main-btn mt-4">
                  <Button variant="primary">Explore Now</Button>&nbsp;
                  <Button variant="outline-primary" className="ms-2">
                    Watch Video
                  </Button>
                </div>
              </Col>
              <Col lg={7}>
                <Image src={agency} alt="agency" className="img-fluid rounded-5" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
