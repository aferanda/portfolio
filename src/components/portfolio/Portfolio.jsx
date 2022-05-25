import React from 'react';

import { SwiperSlide } from "swiper/react";

import { Container, Slider } from './style';
import { projects } from '../../assets/data/projects';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export function Portfolio() {
  return (
    <Container
      id='projects'
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
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
        {projects.map(({ img, title, tech, description, url }) => (
          <SwiperSlide key={img}>
            <img src={img} />
            <div>
              <h3>{title}</h3>
              <span>{tech}</span>
              <p>{description}</p>
              <a href={url} target="_blank" rel="noreferrer">
                <button type="button">
                  Preview
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </Container>
  )
}
