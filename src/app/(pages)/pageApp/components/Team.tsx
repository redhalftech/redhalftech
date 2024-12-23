import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="section" id="team">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <p className="d-flex align-items-center justify-content-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:users-group" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-dark fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Team</span>
            </p>
            <h3 className="text-dark">The Passionate Individuals Leading Our Mission</h3>
            <p className="text-muted">
              Behind every great product is a team of talented individuals. At Skywave, our team is a blend of creative thinkers
            </p>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col lg={3} key={idx}>
              <div className="app-team-box mt-4">
                <div className="app-team-box-img">
                  <Image src={item.image} alt="user" className="img-fluid mx-auto d-block" />
                </div>
                <div className="app-team-overlay">
                  <div className="app-team-content text-center">
                    <div className="app-team-name">
                      <h5 className="f-17">
                        <a href="#" className="text-white">
                          {item.name}
                        </a>
                      </h5>
                      <p className="text-custom f-14">{item.role}</p>
                    </div>
                    <div className="app-team-social-icon">
                      <Link href="" className="m-1">
                        <IconifyIcon icon="tabler:brand-facebook" />
                      </Link>
                      <Link href="" className="m-1">
                        <IconifyIcon icon="tabler:brand-twitter" />
                      </Link>
                      <Link href="" className="m-1">
                        <IconifyIcon icon="tabler:brand-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Team
