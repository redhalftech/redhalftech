import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="section bg-primary bg-shape py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="cta-content text-white text-center">
              <h3 className="mb-4">Download App Now</h3>
              <p className="text-white-50 f-16">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <div className="pt-3">
                <a href="#" className="btn btn-outline-white m-1">
                  App Store <i className="mdi mdi-apple" />
                </a>
                <a href="#" className="btn btn-outline-white m-1">
                  Windows <i className="mdi mdi-windows" />
                </a>
                <a href="#" className="btn btn-outline-white m-1">
                  Google Play <i className="mdi mdi-google-play" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
