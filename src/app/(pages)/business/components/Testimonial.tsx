import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { reviewsData, ReviewsType } from '../data'
import Image from 'next/image'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const TestimonialCard = ({ description, image, name, review, role }: ReviewsType) => {
  return (
    <Card className="border-0">
      <CardBody>
        <p className="mb-0 text-muted">&quot; {description}&quot;.</p>
        <hr className="border" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center  gap-3">
            <Image src={image} alt="avatar" className="rounded-circle" height={50} width={50} />
            <div>
              <p className="m-0 text-primary fs-6 fw-medium">{name}</p>
              <p className="m-0 f-14">{role}</p>
            </div>
          </div>
          <h6 className="fw-semibold text-muted">
            <IconifyIcon icon="tabler:star-filled" className="text-warning" /> {review}
          </h6>
        </div>
      </CardBody>
    </Card>
  )
}

const Testimonial = () => {
  return (
    <section className="section bg-light" id="testimonial">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:messages" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Testimonial</span>
              </p>
              <h3 className="text-dark">Discover Our Clients&apos; Stories: Why They Love Working with Us</h3>
              <p className="text-muted">
                Explore testimonials highlighting the ease and effectiveness of our financial tools from satisfied customers.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          {reviewsData.map((item, idx) => (
            <Col lg={4} className="position-relative" key={idx}>
              <TestimonialCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
