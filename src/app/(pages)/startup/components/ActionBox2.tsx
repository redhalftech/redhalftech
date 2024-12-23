import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox2 = () => {
  return (
    <section className="section-sm bg-primary bg-shape">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={5}>
            <div className="title text-white">
              <h3>Subscribe to our mailing list and stay up to date</h3>
              <p className="text-light mb-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when at its layout
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="subscribe">
              <form>
                <Row className="justify-content-end g-3">
                  <Col md={8}>
                    <p className="text-white mb-4">Get Started Free</p>
                    <div>
                      <input type="text" className="form-control rounded-pill" placeholder="Enter your E-mail address" />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div>
                      <button type="submit" className="btn btn-outline-light w-100">
                        Subscribe Us
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox2
