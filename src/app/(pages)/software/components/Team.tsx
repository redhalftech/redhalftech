import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="section bg-light" id="team">
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
            <h3 className="text-dark">The People Behind Skywave</h3>
            <p className="text-muted">
              Behind every great product is a team of talented individuals. At Skywave, our team is a blend of creative thinkers
            </p>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col lg={3} md={6} key={idx}>
              <div className="soft-team-box mt-4">
                <div className="team-img">
                  <Image src={item.image} alt="user" className="img-fluid mx-auto d-block rounded" />
                </div>
                <div className="soft-team-content bg-white text-center p-3 ms-2 me-2 rounded">
                  <h5 className="team-name f-17">
                    <Link href="" className="text-dark">
                      {item.name}
                    </Link>
                  </h5>
                  <p className="mb-0 text-custom f-14">{item.role}</p>
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
