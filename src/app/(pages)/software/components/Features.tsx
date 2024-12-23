import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { featuresData } from '../data'
import { splitArray } from '@/utils/array'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  const fea = featuresData || []
  const chunk_size = 4
  const feaChunks = splitArray(fea, chunk_size)

  return (
    <section className="section" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Features</span>
              </p>
              <h3>Features of Our Team of Exceptional Talent</h3>
              <p className="text-muted">
                Their diverse skills and creative approaches ensure that we consistently deliver outstanding results and push the boundaries of
                what&apos;s possible.{' '}
              </p>
            </div>
          </Col>
        </Row>
        {(feaChunks || []).map((chunk, idx) => (
          <Row className={`mt-5 g-3`} key={idx}>
            {(chunk || []).map((item, idx) => (
              <Col lg={3} xs={4} key={idx}>
                <div className="features-box text-center border-end">
                  <div className="features-icon mb-3 ">
                    <Image src={item.image} alt="fea" />
                  </div>
                  <div className="features-desc rounded">
                    <h5 className="mb-0 f-16">{item.title}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Features
