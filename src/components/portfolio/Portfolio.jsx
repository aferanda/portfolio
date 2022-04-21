import React from 'react';

import { SwiperSlide } from "swiper/react";

import { Container, Slider } from './style';
import todolist from '../../images/todolist.png';
import trybewallet from '../../images/trybewallet.png';
import trybetunes from '../../images/trybetunes.png';
import tryunfo from '../../images/tryunfo.png';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Portfolio() {
  return (
    <Container>
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
        <SwiperSlide>
          <img src={todolist} />
          <div>
            <h3>To Do List</h3>
            <p>Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={trybewallet} />
          <div>
            <h3>To Do List</h3>
            <p>Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={trybetunes} />
          <div>
            <h3>To Do List</h3>
            <p>Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tryunfo} />
          <div>
            <h3>To Do List</h3>
            <p>Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover.</p>
          </div>
        </SwiperSlide>
      </Slider>
    </Container>
  )
}
