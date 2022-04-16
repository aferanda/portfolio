import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Carousel = styled(motion.div)`
  width: 50%;
`

export const CircleBack = styled.div`
  z-index: -5;
  float: left;
  position: absolute;
  right: -250px;
  opacity: 0.4;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    var(--pink),
    var(--purple),
    var(--yellow)
  );

  @media (max-width: 900px) {
    left: -100px;
    width: 400px;
    height: 400px;
  }
`

export const CircleFront = styled.div`
  z-index: -4;
  border-radius: 50%;
  height: 900px;
  right: -10px;
  opacity: 0.4;
  position: absolute;
  width: 900px;
  background-color: var(--glassmorphism);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  @media (max-width: 900px) {
    left: -100px;
    width: 400px;
    height: 400px;
  }
`

export const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: end;
  width: 50%;
  z-index: 100;

  @media (max-width: 900px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 80%;
  }
`;
