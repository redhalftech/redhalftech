import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { projectData, ProjectType } from '../data'
import Image from 'next/image'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ProjectCard = ({ title, description, image }: ProjectType) => {
  return (
    <Card className="border">
      <CardBody>
        <Image src={image} alt="image" className="img-fluid bg-light" />
        <div className="mt-3">
          <h5>{title}</h5>
          <p className="text-muted">{description}</p>
          <Link href="" className="text-primary">
            Show More
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

const Project = () => {
  return (
    <section className="section bg-light" id="portfolio">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:presentation" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Project </span>
              </p>
              <h3>Discover Our Selected Projects</h3>
              <p className="text-muted">
                Explore the innovative and impactful work we’ve done across various industries. Each project showcases our commitment to quality{' '}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          {projectData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <ProjectCard {...item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Project
