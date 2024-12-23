import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { servicesData, ServicesType } from '../data'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ServicesCard = ({ description, icon, title, isPopular }: ServicesType) => {
  return (
    <Card className={`border-0 text-center ${isPopular && 'bg-primary bg-shape'}`}>
      <CardBody>
        <div className="mb-3">
          <IconifyIcon icon={icon} className={`fs-1 text-primary ${isPopular && 'text-white'}`} />
        </div>
        <h6 className={` ${isPopular && 'text-white'}`}>{title}</h6>
        <p className={`mt-2 text-muted ${isPopular && 'text-white-50'}`}>{description}</p>
        <Link href="" className={`text-primary ${isPopular && 'text-light'}`}>
          View More
        </Link>
      </CardBody>
    </Card>
  )
}

const Services = () => {
  return (
    <section className="section" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:devices-cog" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Services </span>
              </p>
              <h3>How To Better Into Business</h3>
              <p className="text-muted">Improving one&apos;s business acumen and navigating the complexities of entrepreneurship require </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center g-3">
          {servicesData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <ServicesCard {...item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services
