'use client'
import React from 'react'
import app1 from '@/assets/images/showcase/app-ss1.png'
import app2 from '@/assets/images/showcase/app-ss2.png'
import app3 from '@/assets/images/showcase/app-ss3.png'
import app4 from '@/assets/images/showcase/app-ss4.png'
import app5 from '@/assets/images/showcase/app-ss5.png'
import app6 from '@/assets/images/showcase/app-ss6.png'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Col, Container, Row } from 'react-bootstrap'

const Apps = () => {
  return (
    <div className="section bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:apps" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">App</span>
              </p>
              <h3>Showcasing the Unique Capabilities of Our App</h3>
              <p className="text-muted">
                Discover what sets our app apart in the digital landscape. From intuitive design to powerful functionality, our app is built to
                enhance your experience
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app1} alt="app" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app2} alt="app" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app3} alt="app" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app4} alt="app" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app5} alt="app" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-4">
                  <Image src={app6} alt="app" className="img-fluid" />
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="swiper-pagination bottom-0 top-100" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Apps
