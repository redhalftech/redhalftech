import Image from 'next/image'
import React from 'react'
import creativeImg from '@/assets/images/creative.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const CreativeUs = () => {
  return (
    <section className="section-sm" id="creative">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <Image src={creativeImg} alt="creative" className="img-fluid mx-auto d-block" />
          </Col>
          <Col lg={6}>
            <div className="ps-lg-5">
              <p className="d-flex align-items-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:brand-react" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Creative Us</span>
              </p>
              <h3>Unleashing Your Imagination</h3>
              <p className="text-muted">
                At Creative Us, we believe in the power of imagination and creativity. Our mission is to help you bring your ideas to life through
                innovative design and artistic expression.
              </p>
              <Row className="my-4">
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
              <p className="text-muted">
                <b className="text-primary">Comments</b>
                <span className="mx-1 text-dark">:</span>This perfectly encapsulates the spirit of Creative Us! Embracing the boundless potential of
                creativity
              </p>
              <div className="main-btn mt-4">
                <Button variant="primary">About Me</Button>
                <Button variant="info" className="ms-1">
                  Contact Me
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreativeUs
