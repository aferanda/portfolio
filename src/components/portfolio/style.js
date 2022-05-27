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
    height: calc(100vh - 100px);
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
      font-family: 'Poppins', sans-serif;
      padding-left: 60px;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 900px) {
        padding: 0;
        text-align: center;
        width: 70%;
      }

      h3 {
        margin-bottom: 5px;
      }

      span {
        font-weight: bold;
        font-size: 0.9rem;
        margin-bottom: 15px;
      }

      p {
        margin-bottom: 20px;
      }

      button {
        border: none;
        border-radius: 6px;
        cursor: pointer;
        height: 2rem;
        width: 5rem;
        background-color: ${props => props.theme.button};
        color: ${props => props.theme.textButton};
        box-shadow: 1px 1px 2px 0px #00000061;
        font-family: 'Poppins', sans-serif;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .swiper-pagination {

  }
`
