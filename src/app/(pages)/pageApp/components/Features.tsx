import Image from 'next/image'
import React from 'react'
import phone3 from '@/assets/images/phone-3.png'
import phone2 from '@/assets/images/phone-2.png'
import phone4 from '@/assets/images/phone-4.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

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
              <h3>Features of Our Team of Exceptional Talent</h3>
              <p className="text-muted">
                Their diverse skills and creative approaches ensure that we consistently deliver outstanding results and push the boundaries of
                what&apos;s possible.{' '}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 text-center g-4">
          <Col lg={4}>
            <Card className="border-0">
              <CardBody className="pb-0">
                <h5>Full Exploration Apps</h5>
                <p className="text-muted">Unlock endless possibilities with our suite of Full Exploration Apps.</p>
                <Image src={phone3} alt="phone" className="img-fluid mt-3" />
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0">
              <CardBody className="pt-0">
                <Image src={phone2} alt="phone" className="img-fluid mb-3" />
                <h5 className="mt-3">Lightweight and Fast</h5>
                <p className="text-muted mb-0">Experience a responsive app that runs smoothly without draining your...</p>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0">
              <CardBody className="pb-0">
                <h5>Live Chat &amp; Call</h5>
                <p className="text-muted">Connect with our support team or other users in time with the Live Chat feature. </p>
                <Image src={phone4} alt="phone" className="img-fluid mt-3" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
