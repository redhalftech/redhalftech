import Image from 'next/image'
import React from 'react'
import girlBook from '@/assets/images/girl-book.png'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="section pb-lg-0" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="img-part">
              <Image src={girlBook} alt="girl-book" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">About Us </span>
            </p>
            <h3 className="lh-base">Everything You Need To Grow Your Business</h3>
            <p className="text-muted">
              Skywave integrate seamlessly into your existing technology stack The ease of connecting it to other tools lets you combine it with the
              integration you need.
            </p>
            <div className="main-link">
              <a href="" className="text-primary fs-6 fw-medium text-decoration-underline link-offset-3">
                Learn More <IconifyIcon icon="tabler:arrow-narrow-right" className="align-middle" />
              </a>
            </div>
            <div className="user-detail border-start mt-5 ps-4">
              <p className="fs-6 text-muted fw-medium">
                &quot; The many integrations that can be linked really help me see data from other tools I also use. &quot;
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <Image src={avatar1} alt="avatar1" className="rounded-circle" width={40} height={40} />
                <div>
                  <p className="m-0 text-dark fs-6">Clayton N. Ziegler</p>
                  <p className="m-0 f-14 text-muted">Service manager @Skywave</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
