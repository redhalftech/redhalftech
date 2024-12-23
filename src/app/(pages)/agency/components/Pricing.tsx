import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { pricingData, PricingType } from '../data'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'

const PricingCard = ({ packs, price, title, isPopular }: PricingType) => {
  return (
    <Card className="border">
      <CardHeader className={`${isPopular ? 'bg-primary' : 'bg-light'}  border-bottom p-4 bg-shape`}>
        <div>
          <h5 className={`mb-2 ${isPopular ? 'text-white' : 'text-primary'}`}>{title}</h5>
        </div>
        <div className="price-number mt-4">
          <h2 className={`fw-bold m-0 ${isPopular ? 'text-white' : 'text-dark'} `}>
            ${price} <span className={`${isPopular ? 'text-white' : 'text-muted'} fs-6 fw-medium`}>/ Month</span>
          </h2>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <h6 className="fw-semibold">Start Up Starter Packs</h6>
        <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
          {packs.map((item, idx) => (
            <li key={idx}>
              <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> {item}{' '}
            </li>
          ))}
        </ul>
        <div className="price-btn mt-4">
          <Button variant="primary" className="w-100">
            Get Started
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

const Pricing = () => {
  return (
    <section className="section" id="pricing">
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
            <h3 className="text-dark">Choose The Plan That&apos;s Right For You</h3>
            <p className="text-muted">Competitive rates and pricing plans to help you find a plan that fits the needs and budget of your business.</p>
          </Col>
        </Row>
        <Row className="mt-5 g-3">
          {pricingData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <PricingCard {...item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
