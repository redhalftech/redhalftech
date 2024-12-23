import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { servicesData } from '../data'
import { splitArray } from '@/utils/array'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  const services = servicesData || []
  const chunk_size = 3
  const servicesChunks = splitArray(services, chunk_size)

  return (
    <section className="section" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:devices-cog" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Services </span>
              </p>
              <h3>Strategies for Thriving in Business</h3>
              <p className="text-muted">Improving one&apos;s business acumen and navigating the complexities of entrepreneurship require </p>
            </div>
          </Col>
        </Row>
        {(servicesChunks || []).map((chunk, idx) => (
          <Row key={idx}>
            {(chunk || []).map((item, idx) => (
              <Col lg={4} className="position-relative" key={idx}>
                <div className="busi-services-box p-4 bg-white mt-5">
                  <div className="busi-services-icon">
                    <i className="fs-3 text-white bg-primary">
                      <IconifyIcon icon={item.icon} />
                    </i>
                  </div>
                  <div className="busi-services-desc">
                    <h5 className="mb-4 f-18">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Services
