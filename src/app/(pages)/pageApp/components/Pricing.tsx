import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { pricingData, PricingType } from '../data'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const PricingCard = ({ buttonName, description, devices, icon, name, pricing, year, isPopular, save }: PricingType) => {
  return (
    <Card className={`border-top border-0 border-4 ${isPopular ? 'border-primary' : 'border-dark'}  shadow-sm bg-light-subtle h-100`}>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <span
            className={`icon-bg text-white ${isPopular ? 'bg-primary' : 'bg-dark'} rounded d-flex justify-content-center align-items-center flex-shrink-0`}>
            <IconifyIcon icon={icon} className="fs-4" />
          </span>
          {save && (
            <div>
              <span className="badge bg-success-subtle text-success border-0">Save 50%</span>
            </div>
          )}
        </div>
        <div>
          <h5 className={`mb-2 ${isPopular ? 'text-primary' : 'text-dark'}`}>{name}</h5>
          <span className="text-muted">{description}</span>
        </div>
        <div className="price-number my-4">
          <h2 className="fw-bold mb-1 text-dark">
            $ {pricing} <span className="text-muted fs-6 fw-medium">/ Month</span>
          </h2>
          <p className="text-primary">{year}</p>
        </div>
        <p className="mb-0 f-14">
          <IconifyIcon icon="tabler:device-laptop" className="f-16 text-primary" /> {devices}
        </p>
      </CardBody>
      <CardFooter className="border-0 mt-4">
        <a href="" className={`btn ${isPopular ? 'btn-primary' : 'btn-dark'} w-100`}>
          {' '}
          {buttonName}
        </a>
      </CardFooter>
    </Card>
  )
}

const Pricing = () => {
  return (
    <section className="section bg-light" id="pricing">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:receipt-2" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-dark fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Pricing</span>
            </p>
            <h3 className="text-dark">Cost and Subscription Options</h3>
            <p className="text-muted">Competitive rates and pricing plans to help you find a plan that fits the needs and budget of your business.</p>
          </Col>
        </Row>
        <Row className="mt-5 g-4">
          {pricingData.map((item, idx) => (
            <Col lg={4} key={idx}>
              <PricingCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
