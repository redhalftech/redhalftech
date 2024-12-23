import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { featuresData, FeaturesType } from '../data'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

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
        <p className="text-muted">{description}</p>
        <Link href="" className="text-primary">
          View More
        </Link>
      </CardBody>
    </Card>
  )
}

const Features = () => {
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <div className="title mb-5">
              <p className="d-flex align-items-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Features</span>
              </p>
              <h3>Amazing Features</h3>
              <p className="text-muted">
                Their diverse skills and creative approaches ensure that we consistently deliver outstanding results and push the boundaries of
                what&apos;s possible.{' '}
              </p>
            </div>
          </Col>
          <Col lg={3} className="text-end">
            <Button variant="primary">View 12 Features</Button>
          </Col>
        </Row>
        <Row className="mt-5 g-3">
          {featuresData.map((item, idx) => (
            <Col lg={6} key={idx}>
              <FeaturesCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
