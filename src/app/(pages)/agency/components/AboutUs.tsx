import Image from 'next/image'
import React from 'react'
import agencyAbout from '@/assets/images/agency-about.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">About Us </span>
            </p>
            <h3 className="lh-base">Why You Should Choose Skywave ?</h3>
          </Col>
        </Row>
        <Row className="align-items-center mt-5 pt-3">
          <Col lg={7}>
            <Image src={agencyAbout} alt="agency-about" className="img-fluid" />
          </Col>
          <Col lg={5}>
            <div className="about-content">
              <h5 className="mb-3 lh-base">Skywave offers a comprehensive, user-friendly app experience</h5>
              <p className="text-muted">
                Choosing Skywave means partnering with a team that&apos;s committed to your success. Our app is designed with your needs in mind,
                offering an intuitive and user-friendly experience that simplifies your day-to-day tasks.
              </p>
              <div className="pt-3">
                <Button variant="primary">
                  Learn more <i className="mdi mdi-arrow-right" />
                </Button>
              </div>
              <Row className="mt-4">
                <Col lg={4} xs={4}>
                  <h4 className="fw-semibold">20+</h4>
                  <p className="mb-0 text-muted">Working Task</p>
                </Col>
                <Col lg={4} xs={4}>
                  <h4 className="fw-semibold">70+</h4>
                  <p className="mb-0 text-muted">Country Reached</p>
                </Col>
                <Col lg={4} xs={4}>
                  <h4 className="fw-semibold">
                    <IconifyIcon icon="tabler:star-filled" className="text-warning" /> 4.5
                  </h4>
                  <p className="mb-0 text-muted">Best Rating</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
