import React from 'react';

import { SwiperSlide } from "swiper/react";

import { Container, Slider } from './style';
import { projects } from '../../assets/data/projects';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Portfolio() {
  return (
    <Container id='projects'>
      <Slider
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map(({ img, title, description }) => (
          <SwiperSlide key={img}>
            <img src={img} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </Container>
  )
}
