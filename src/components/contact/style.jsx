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

export const CircleBack = styled.div`
  z-index: -5;
  float: left;
  position: absolute;
  left: -250px;
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
  left: -10px;
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
  width: 50%;
  z-index: 100;

  @media (max-width: 900px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 100%;
    object-position: 50px;
  }
`;

export const TextContainer = styled(motion.div)`
  width: 50%;

  @media (max-width: 900px) {
      width: 100%;
    }

  div {
    shape-outside: ellipse(200px 500px at 10% 50%);
    width: 400px;
    height: 1000px;
    float: left;
    opacity: .2;

    @media (max-width: 900px) {
      display: none;
    }
  }

  p {
    font-size: 1.2em;
    line-height: 30px;

    @media (max-width: 900px) {
      text-align: center;
      text-indent: 30px;
    }
  }
`