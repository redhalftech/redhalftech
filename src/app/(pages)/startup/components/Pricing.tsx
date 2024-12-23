import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import avatar7 from '@/assets/images/team/avatar-7.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar9 from '@/assets/images/team/avatar-9.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import { currency } from '@/context/constants'

const Pricing = () => {
  return (
    <section className="section pricing-section-2" id="pricing">
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
        <Row className="mt-4 g-4 align-items-end">
          <Col lg={4}>
            <Card className="border-top border-0 border-4 border-info shadow-sm bg-light-subtle h-100">
              <CardBody>
                <div>
                  <h5 className="mb-2 text-info">3 Month Membership</h5>
                  <span className="text-muted">Offering a free plan allows companies to showcase the value and effectiveness of their service.</span>
                </div>
                <div className="price-number my-4">
                  <h2 className="fw-bold m-0 text-dark">
                    {currency}40.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                  </h2>
                  <div className="mt-2">
                    <p className="text-muted mb-0">Billed Every 3 Month</p>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="border-0 mt-5">
                <Button variant="info" className="w-100">
                  Upgrade Now
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-top border-0 border-4 border-primary shadow-sm bg-light-subtle h-100">
              <CardBody>
                <div>
                  <h5 className="mb-2 text-primary">12 Month Membership</h5>
                  <span className="text-muted">
                    A 12-month membership typically refers to a subscription or access plan that provides benefits, services, of one year...
                  </span>
                </div>
                <div className="price-number my-4">
                  <h2 className="fw-bold m-0 text-dark">
                    {currency}20.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                  </h2>
                  <div className="mt-2">
                    <p className="text-muted mb-0">Billed Every Year</p>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="border-0 mt-5">
                <Button variant="primary" className="w-100">
                  Upgrade Now
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-top border-0 border-4 border-info shadow-sm bg-light-subtle h-100">
              <CardBody>
                <div>
                  <h5 className="mb-2 text-info">Team Membership</h5>
                  <span className="text-muted ">
                    Team memberships are designed to provide access to, tools, or spaces for a group of individuals working together.
                  </span>
                </div>
                <div className="price-number">
                  <div className="user-team-price mb-4 mt-3  pb-2 pt-1">
                    <ul>
                      <li>
                        <Image src={avatar7} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar6} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar8} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar9} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar4} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar2} alt="image" className="rounded-circle" />
                      </li>
                      <li>
                        <Image src={avatar5} alt="image" className="rounded-circle" />
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="border-0 mt-5">
                <Button variant="info" className="w-100">
                  Contact Us
                </Button>
              </CardFooter>
              <span className="badge bg-info px-2 py-1 f-14 text-white position-absolute top-0 end-0 rounded-top-0 rounded-end-0">Popular</span>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
