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
  /* background-image: linear-gradient(45deg, black, transparent); */

  @media (max-width: 900px) {
    height: auto;
    padding: 0 5%;
  }
`

export const Slider = styled(Swiper)`
  width: 100%;

  @media (max-width: 900px) {
    margin: 5% 0;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    flex-direction: row-reverse;
    height: 520px;

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }

    img {
      width: 50%;
      padding-right: 40px;
      object-fit: cover;

      @media (max-width: 900px) {
        padding: 0;
      }
    }

    div {
      padding-left: 60px;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5%;

      @media (max-width: 900px) {
        padding: 0 0 5%;
        text-align: center;
        gap: 10%;
      }
    }
  }
`
