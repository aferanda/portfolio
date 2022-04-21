import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  width: 100%;

  // dark-mode
  /* background-image: linear-gradient(45deg, black, transparent); */

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Slider = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    flex-direction: row-reverse;
    /* width: 520px; */
    height: 520px;

    img {
      width: 50%;
      padding-right: 40px;
      object-fit: cover;
    }

    div {
      padding-left: 60px;
      width: 50%;
    }
  }
`
