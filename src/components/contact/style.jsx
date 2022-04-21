import { motion } from 'framer-motion';
import styled from 'styled-components';

import blob from '../../images/blob.svg';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  height: 900px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Blob = styled.div`
  z-index: -5;
  position: absolute;
  bottom: -300px;
  left: -400px;
  opacity: 0.2;
  width: 1300px;
  height: 1300px;
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(117deg);
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
    transform: scaleX(-1);
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