import Image from 'next/image'
import React from 'react'
import features from '@/assets/images/features-1.png'
import { featuresData, FeaturesType } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
//:

const FeaturesCard = ({ description, icon, title }: FeaturesType) => {
  return (
    <Card className="border-0">
      <CardBody>
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
            <IconifyIcon icon={icon} className="fs-4" />
          </span>
          <p className="mb-0 fw-semibold f-18">{title}</p>
        </div>
        <p className="mb-0 text-muted">{description}</p>
      </CardBody>
    </Card>
  )
}

const Features = () => {
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Features</span>
              </p>
              <h3>Key Features Of The Product</h3>
              <p className="text-muted">Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6}>
            <Row className="g-3">
              {featuresData.map((item, idx) => {
                return (
                  <Col lg={6} key={idx}>
                    <FeaturesCard {...item} />
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col lg={6}>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex gap-3 mb-3">
                  <span className="icon-lg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                    <IconifyIcon icon="tabler:pencil" className="fs-2" />
                  </span>
                  <div>
                    <p className="mb-1 fw-semibold f-18">Real Time Problem Solution</p>
                    <p className="mb-0 f-15 text-muted">You&apos;ve just launched your project, and want to minimise risk of downtime</p>
                  </div>
                </div>
                <Image src={features} alt="features" className="img-fluid" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
