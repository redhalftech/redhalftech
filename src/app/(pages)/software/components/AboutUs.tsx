import Image from 'next/image'
import React from 'react'
import adminImg from '@/assets/images/admin.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={5}>
            <div className="img-part">
              <Image src={adminImg} alt="adminImg" className="img-fluid" />
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
            <h3 className="lh-base">Meet the Minds Behind Our Innovation and Success</h3>
            <p className="text-muted">
              At the heart of our company is a team of exceptional individuals who drive our success through their unique blend of talent, innovation,
              and vision. We are dedicated to creating cutting-edge software solutions that transform industries and improve lives.
            </p>
            <h6 className="text-primary">Why Choose Us ?</h6>
            <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-dark fw-medium mt-4">
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> We embrace new ideas and technologies to stay
                ahead in the industry.{' '}
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> We are committed to delivering products that
                exceed expectations.
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> We believe in the power of teamwork and open
                communication.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
