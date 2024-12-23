import Image from 'next/image'
import React from 'react'
import businessWork from '@/assets/images/business-work.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Work = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="align-items-center justify-content-between g-3">
          <Col lg={5}>
            <div className="img-part-3 bg-primary p-2 rounded">
              <Image src={businessWork} alt="work" className="img-fluid rounded" />
            </div>
          </Col>
          <Col lg={6}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">How It Work </span>
            </p>
            <h3 className="lh-base">Our Unique Approach</h3>
            <div className="d-flex gap-3 mb-3 mt-4">
              <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                <IconifyIcon icon="tabler:chess-king" className="fs-3" />
              </span>
              <div>
                <p className="mb-1 fw-semibold f-18">Strategy</p>
                <p className="mb-0 f-15 text-muted">
                  Our digital marketing packages are tailored specifically for residential and commercial painting companies.
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 mb-3 mt-4">
              <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                <IconifyIcon icon="tabler:shareplay" className="fs-3" />
              </span>
              <div>
                <p className="mb-1 fw-semibold f-18">Deploy</p>
                <p className="mb-0 f-15 text-muted">
                  We build custom websites optimized for lead generation and pair it with bulletproof SEO and PPC campaigns.
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 mb-3 mt-4">
              <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                <IconifyIcon icon="tabler:message-2-cog" className="fs-3" />
              </span>
              <div>
                <p className="mb-1 fw-semibold f-18">Measure</p>
                <p className="mb-0 f-15 text-muted">Call tracking and website analytics are used to generate reports you can actively monitor.</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="primary">View All</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
