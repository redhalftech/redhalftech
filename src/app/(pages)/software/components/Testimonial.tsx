'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React, { useState } from 'react'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import clsx from 'clsx'

const Testimonial = () => {
  const image = [avatar8, avatar5, avatar3, avatar4]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex)
  }

  const handleThunkSelect = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="section bg-dark bg-shape" id="testimonial">
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
              <h3 className="text-white">See What Our Clients Are Saying</h3>
              <p className="text-white-50">
                Explore testimonials highlighting the ease and effectiveness of our financial tools from satisfied customers.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col lg={8}>
            <div className="bg-primary p-1 rounded shadow bg-shape">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                id="carouselExampleIndicators"
                className="slide"
                data-bs-ride="carousel">
                <CarouselItem>
                  <div className="testi text-center">
                    <div className="card border-0">
                      <div className="card-body text-start">
                        <div className="row align-items-center justify-content-between g-0">
                          <div className="col-lg-12">
                            <div className="d-flex align-items-center gap-2 mb-4">
                              <h4 className="text-muted fw-semibold m-0">4.7</h4>
                              <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-half-filled" />
                                </li>
                              </ul>
                            </div>
                            <p className="card-text mt-3 f-16 text-muted">
                              &quot; Skywave has completely transformed the way we operate. The user-friendly interface and seamless integration with
                              our existing tools have saved us countless hours of work. The support team is incredibly responsive and always goes
                              above and beyond to help us. We&apos;ve tried other solutions, but nothing compares to the efficiency and reliability of
                              this software. It&apos;s truly the best investment we&apos;ve made for our business!.&quot;
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar8} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Danilo Tanic</p>
                                <p className="m-0 fs-6">Head of Design at Paypal</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <div className="card border-0">
                      <div className="card-body text-start">
                        <div className="row align-items-center justify-content-between g-0">
                          <div className="col-lg-12">
                            <div className="d-flex align-items-center gap-2 mb-4">
                              <h4 className="text-muted fw-semibold m-0">4.4</h4>
                              <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-half-filled" />
                                </li>
                              </ul>
                            </div>
                            <p className="card-text mt-3 f-16 text-muted">
                              &quot;Company is a game-changer for our team. The intuitive design and powerful features have streamlined our processes
                              and boosted our productivity. The onboarding process was smooth, thanks to the excellent training and support provided
                              by the team. We’ve seen significant improvements in our workflow since implementing this software. I highly recommend it
                              to anyone looking to enhance their operations.&quot;
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar5} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Samuel Kane</p>
                                <p className="m-0 fs-6">Project Manager at Shopify</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <div className="card border-0">
                      <div className="card-body text-start">
                        <div className="row align-items-center justify-content-between g-0">
                          <div className="col-lg-12">
                            <div className="d-flex align-items-center gap-2 mb-4">
                              <h4 className="text-muted fw-semibold m-0">4.6</h4>
                              <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-half-filled" />
                                </li>
                              </ul>
                            </div>
                            <p className="card-text mt-3 f-16 text-muted">
                              &quot;Team has exceeded our expectations in every way. From the moment we started using it, our productivity soared, and
                              tasks that used to take hours are now completed in minutes. The customer support is outstanding—always quick to respond
                              and incredibly helpful. This software has become an indispensable part of our daily operations, and we can&apos;t
                              imagine working without it.&quot;
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar3} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">James Arthur</p>
                                <p className="m-0 fs-6">Senior Manager at Amazon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="testi text-center">
                    <div className="card border-0">
                      <div className="card-body text-start">
                        <div className="row align-items-center justify-content-between g-0">
                          <div className="col-lg-12">
                            <div className="d-flex align-items-center gap-2 mb-4">
                              <h4 className="text-muted fw-semibold m-0">4.9</h4>
                              <ul className="p-0 m-0 ms-2 fs-6 d-flex text-warning">
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-filled" />
                                </li>
                                <li>
                                  <i className="ti ti-star-half-filled" />
                                </li>
                              </ul>
                            </div>
                            <p className="card-text mt-3 f-16 text-muted">
                              &quot;Skywave has been a total game-changer for our business. The ease of use and the flexibility it offers have allowed
                              us to customize our workflow like never before. The regular updates and new features keep us ahead of the curve, and the
                              support team is always there when we need them. We&apos;ve seen a remarkable improvement in our team&apos;s efficiency,
                              and I can&apos;t recommend this software enough.&quot;
                            </p>
                            <div className="d-flex align-items-center mt-4">
                              <Image src={avatar4} alt="avatar" className="rounded-circle" height={50} width={50} />
                              <div className="d-block ms-3">
                                <p className="m-0 text-primary fs-6 fw-medium">Olga D. Ward</p>
                                <p className="m-0 fs-6">Sales Manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
            <div className="mt-5">
              <ol className="carousel-indicators position-static justify-content-center text-center m-0">
                {image.map((img, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleThunkSelect(idx)}
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className={clsx({ active: activeIndex === idx })}>
                    <Image src={img} alt="avatar" className="testi-img img-fluid rounded-circle mx-auto d-block" />
                  </li>
                ))}
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
