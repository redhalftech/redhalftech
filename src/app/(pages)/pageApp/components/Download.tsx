import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import qrImg from '@/assets/images/qr.png'
import apple from '@/assets/images/apple.png'
import android from '@/assets/images/android.png'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Download = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={5}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:download" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Download</span>
            </p>
            <h3 className="lh-base">Download Our Smart Skywave App Today !</h3>
            <p className="text-muted">
              Experience the ultimate convenience with the Skywave App, designed to simplify your life. Whether you&apos;re managing tasks, staying
              organized, or exploring new features
            </p>
            <Row className="mt-4">
              <Col lg={6}>
                <h4 className="text-primary">5 Million+</h4>
                <p className="text-muted">Worldwide Active User</p>
              </Col>
              <Col lg={3}>
                <h4 className="text-primary">60+</h4>
                <p className="text-muted">Countries</p>
              </Col>
              <Col lg={3}>
                <h4 className="text-primary">5K+</h4>
                <p className="text-muted">Organizers</p>
              </Col>
            </Row>
          </Col>
          <Col lg={7}>
            <Row className="g-3">
              <Col lg={6}>
                <Card className="bg-primary bg-shape border-0">
                  <CardBody>
                    <h4 className="fw-semibold text-white">For iOS</h4>
                    <p className="text-white-50">iOS 15.6+</p>
                    <Button variant="light" size="sm">
                      Download App
                    </Button>
                    <Row className="align-items-center mt-4">
                      <Col xs={6} lg={6}>
                        <Image src={qrImg} alt="qrImg" className="border border-3 rounded" height={80} width={80} />
                      </Col>
                      <Col xs={6} lg={6} className=" text-end">
                        <Image src={apple} alt="apple" className="img-fluid" height={50} width={50} />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="bg-primary bg-shape border-0">
                  <CardBody>
                    <h4 className="fw-semibold text-white">For Android</h4>
                    <p className="text-white-50">Android 8.0+</p>
                    <Button variant="light" size="sm">
                      Download App
                    </Button>
                    <Row className="align-items-center mt-4">
                      <Col lg={6} xs={6}>
                        <Image src={qrImg} alt="qrImg" className="border border-3 rounded" height={80} width={80} />
                      </Col>
                      <Col lg={6} xs={6} className=" text-end">
                        <Image src={android} alt="android" className="img-fluid" height={50} width={50} />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Download
