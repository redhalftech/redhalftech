import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

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
        <Row className="mt-4 g-3">
          <Col lg={6}>
            <Card className="border-0">
              <CardBody>
                <Row>
                  <Col lg={8}>
                    <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                      <IconifyIcon icon="tabler:alarm" className="fs-3" />
                    </span>
                    <h5 className="my-3">Accomplish tasks swiftly with online tools.</h5>
                    <p className="text-muted mb-4">Get quoted and covered in under 10 minutes online. no paperwork or waiting any more used</p>
                    <Button variant="outline-primary" size="sm">
                      View More
                    </Button>
                  </Col>
                  <Col lg={4}>
                    <div className="bg-primary h-100 rounded bg-shape" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="border-0">
              <CardBody>
                <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:report-analytics" className="fs-3" />
                </span>
                <h5 className="my-3">Improved technology yields greater value</h5>
                <p className="text-muted mb-4">We&apos;ve eliminated old analogue process with state-of-the art tech</p>
                <Button variant="outline-primary" size="sm">
                  View More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="border-0">
              <CardBody>
                <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:chart-pie" className="fs-3" />
                </span>
                <h5 className="my-3">Build wealth with insurance planning</h5>
                <p className="text-muted mb-4">Every life plan policy has a built-in wealth bonus, and we contribute too</p>
                <Button variant="outline-primary" size="sm">
                  View More
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
