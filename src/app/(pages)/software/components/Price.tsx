import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currency } from '@/context/constants'
import React from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const Price = () => {
  return (
    <section className="section" id="pricing">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:receipt-2" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Price </span>
            </p>
            <h3>Our Affordable Pricing Plan</h3>
            <p className="text-muted">We offer a variety of pricing plans designed to suit different needs and budgets.</p>
            <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted fw-medium mt-3">
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Account Aggregation{' '}
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Expense Tracking{' '}
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Budgeting Tools{' '}
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Transaction Insights{' '}
              </li>
              <li>
                <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Basic Security{' '}
              </li>
            </ul>
          </Col>
          <Col lg={8}>
            <div className="text-center mb-4">
              <div className="d-flex justify-content-center gap-2">
                <p className="mb-0 text-muted">Bill Annually</p>
                <div className="form-check form-switch">
                  <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                </div>
                <p className="mb-0 text-dark fw-medium">Bill Monthly</p>
              </div>
            </div>
            <Row className="g-3">
              <Col lg={6}>
                <Card className="border">
                  <CardBody className="text-center p-4">
                    <h5 className="text-primary">Basic</h5>
                    <div className="price-number my-4">
                      <h2 className="fw-bold m-0 text-dark">
                        {currency}20.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                      </h2>
                      <div className="mt-3">
                        <span className="f-14 text-muted me-1 fw-medium">1 Month Free </span>{' '}
                        <span className="badge bg-success-subtle text-success border-0">Save 50%</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="border-0">
                    <Button variant="primary" className="w-100">
                      Upgrade Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="border">
                  <CardBody className="text-center p-4">
                    <h5 className="text-info">Advanced</h5>
                    <div className="price-number my-4">
                      <h2 className="fw-bold m-0 text-dark">
                        {currency}80.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                      </h2>
                      <div className="mt-3">
                        <span className="f-14 text-muted me-1 fw-medium">1 Month Free </span>{' '}
                        <span className="badge bg-success-subtle text-success border-0">Save 60%</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="border-0">
                    <Button variant="info" className="w-100">
                      Upgrade Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Price
