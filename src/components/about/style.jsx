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
    flex-direction: column;
    height: auto;
  }

  div:nth-child(1) {
    z-index: -5;
    position: absolute;
    top: -130px;
    left: -300px;
    opacity: 0.4;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom,
      var(--pink),
      var(--purple),
      var(--yellow)
    );
  }

  div:nth-child(2) {
    z-index: -4;
    border-radius: 50%;
    height: 1000px;
    left: -10px;
    opacity: 0.4;
    position: absolute;
    top: -130px;
    width: 1000px;
    background-color: var(--glassmorphism);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
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
  }
`;

export const TextContainer = styled(motion.div)`
  width: 50%;

  p {
    font-size: 1.1em;
    line-height: 30px;
    text-align: end;
    text-indent: 40px;
  }
`