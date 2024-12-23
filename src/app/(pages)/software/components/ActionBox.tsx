import Image from 'next/image'
import React from 'react'
import gmailImg from '@/assets/images/gmail.png'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="section-sm bg-dark bg-shape">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="title text-white text-center mb-4">
              <Image src={gmailImg} alt="gmailImg" className="img-fluid mb-4" />
              <h3>Subscribe</h3>
              <p className="text-white-50 mb-0">Subscribe to our newsletter &amp; stay update</p>
            </div>
            <div className="subscribe">
              <form>
                <Row className="justify-content-center align-items-center g-2">
                  <Col md={8}>
                    <div>
                      <input type="text" className="form-control rounded-pill" placeholder="Enter your E-mail address" />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <button type="submit" className="btn btn-primary w-100">
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

export default ActionBox
