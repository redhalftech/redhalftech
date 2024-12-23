import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import features from '@/assets/images/features.png'
import web2 from '@/assets/images/web-2.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Features </span>
              </p>
              <h3>Product Key Features</h3>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center g-3 mt-3">
          <Col lg={4}>
            <div className="feautures-content text-lg-end">
              <h5>
                <IconifyIcon icon="tabler:sun-high" className="text-primary" /> High Performance :
              </h5>
              <div className="d-flex mt-5 gap-2">
                <div className="text">
                  <h6 className="text-dark">Exceptional Speed</h6>
                  <p className="text-muted">Engineered to operate at top speeds, ensuring quick and efficient execution of tasks.</p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-1" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="text">
                  <h6 className="text-dark">Optimized Efficiency</h6>
                  <p className="text-muted">
                    Designed to maximize productivity and minimize downtime, providing a smooth and effective user experience.
                  </p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-2" className="fs-5 text-primary" />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="text">
                  <h6 className="text-dark">Reliable Operation</h6>
                  <p className="text-muted">Built for consistent and dependable performance, even under demanding conditions or high workloads.</p>
                </div>
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-3" className="fs-5 text-primary" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="features-img">
              <Image src={web2} alt="web" className="img-fluid mx-auto d-block" />
            </div>
            <div className="mt-5 text-center">
              <Button variant="primary">View All Features</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="feautures-content">
              <h5>
                <IconifyIcon icon="tabler:layout" className="text-primary" /> Customizable Options :
              </h5>
              <div className="d-flex mt-5 gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-1" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">Advanced Personalization</h6>
                  <p className="text-muted">Utilize a wide range of options to personalize the product, from appearance to functionality.</p>
                </div>
              </div>
              <div className="d-flex my-3 gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-2" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">Adaptable Functionality</h6>
                  <p className="text-muted">Easily add or remove components and integrations to fit your unique requirements.</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="icon-bg rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:number-3" className="fs-5  text-primary" />
                </div>
                <div className="text">
                  <h6 className="text-dark">User-Specific Profiles</h6>
                  <p className="text-muted">Create and manage different profiles to accommodate various user preferences and needs.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <div className="features-img">
              <Image src={features} alt="features" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="feautures-content ps-lg-5">
              <div className="icon-bg bg-primary rounded d-flex justify-content-center align-items-center flex-shrink-0 mb-4">
                <IconifyIcon icon="tabler:mood-happy" width={20} height={20} className="fs-5 text-white" />
              </div>
              <div>
                <h3 className="lh-base">The Best Features In Skywave That Make You Happy</h3>
                <p className="text-muted">
                  Skywave offers a range of features designed to enhance your experience and bring you joy. Its sleek and intuitive interface ensures
                  effortless navigation
                </p>
                <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-dark fw-medium">
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Exceptional Speed{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Ongoing Enhancements
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Seamless Integration
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Security Features
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Regular Updates
                  </li>
                </ul>
                <div className="mt-3">
                  <Link href="" className="text-primary text-decoration-underline fw-medium">
                    View All <IconifyIcon icon="tabler:arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
