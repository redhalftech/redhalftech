import React from 'react'
import { workData, WorkType } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const SetupCard = ({ description, image, title, step }: WorkType) => {
  return (
    <Card className="border">
      <CardBody>
        <Row className="align-items-center">
          <Col lg={8}>
            <h6 className="text-primary">Step {step}</h6>
            <p className="text-dark fw-semibold mb-2 f-17">{title}</p>
            <p className="mb-0 text-muted">{description}</p>
          </Col>
          <Col lg={4}>
            <Image src={image} alt="images" className="img-fluid" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

const Setup = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:user-plus" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Setup</span>
              </p>
              <h3>How It Work</h3>
              <p className="text-muted">Four step to get you up and running</p>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          {workData.map((item, idx) => {
            return (
              <Col lg={6} key={idx}>
                <SetupCard {...item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Setup
