import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import user1Img from '@/assets/images/team/user-1.jpg'
import user4Img from '@/assets/images/team/user-4.jpg'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="section bg-light" id="team">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:users-group" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Team</span>
            </p>
            <h3 className="lh-base">Our Team of Exceptional Talent, Innovation, and Vision</h3>
            <p className="text-muted mb-4">
              At the heart of our success is our exceptional team of dedicated professionals. Each member brings a wealth of expertise, creativity,
              and passion to the table
            </p>
            <Button variant="primary">Join Our Team</Button>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <Row className="g-3">
              <Col lg={6}>
                <Card className="border-0">
                  <Image src={user1Img} alt="user" className="img-fluid rounded-top" />
                  <CardBody className="bg-primary rounded-bottom bg-shape">
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link href="" className="text-white fw-semibold">
                          Craig M. Landr
                        </Link>
                        <p className="mb-0 mt-1 text-white f-13">(Founder)</p>
                      </div>
                      <div>
                        <div className="d-flex gap-2">
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-twitter" className="text-white fs-5" />
                          </Link>
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-facebook" className="text-white fs-5" />
                          </Link>
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-linkedin" className="text-white fs-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="border-0">
                  <Image src={user4Img} alt="user4Img" className="img-fluid rounded-top" />
                  <CardBody className="bg-primary rounded-bottom bg-shape">
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link href="" className="text-white fw-semibold">
                          Amanda J. Velaz
                        </Link>
                        <p className="mb-0 mt-1 text-white f-13">(Co-Founder)</p>
                      </div>
                      <div>
                        <div className="d-flex gap-2">
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-twitter" className="text-white fs-5" />
                          </Link>
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-facebook" className="text-white fs-5" />
                          </Link>
                          <Link href="">
                            <IconifyIcon icon="tabler:brand-linkedin" className="text-white fs-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
