import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 0 5%;
  }
`

export const Blob = styled.div`
  z-index: -5;
  position: absolute;
  opacity: 0.2;
  background-image: ${props => props.theme.blob};
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(117deg);

  @media screen and (max-width: 414px) {
    width: 500px;
    height: 500px;
    bottom: calc(-500px / 5);
    left: calc(-500px / 5);
  }

  @media screen and (min-width: 415px) and (max-width: 539px) {
    width: 600px;
    height: 600px;
    bottom: calc(-600px / 5);
    left: calc(-600px / 5);
  }

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 700px;
    height: 700px;
    bottom: calc(-700px / 5);
    left: calc(-700px / 5);
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 800px;
    height: 800px;
    bottom: calc(-800px / 5);
    left: calc(-800px / 5);
  }

  @media screen and (min-width: 1025px) and (max-width: 1250px) {
    width: 900px;
    height: 900px;
    bottom: calc(-900px / 5);
    left: calc(-900px / 5);
  }

  @media screen and (min-width: 1251px) and (max-width: 1600px) {
    width: 1000px;
    height: 1000px;
    bottom: calc(-1000px / 5);
    left: calc(-1000px / 5);
  }

  @media screen and (min-width: 1601px) and (max-width: 2250px) {
    width: 1100px;
    height: 1100px;
    bottom: calc(-1100px / 5);
    left: calc(-1100px / 5);
  }

  @media screen and (min-width: 2250px) {
    width: 1300px;
    height: 1300px;
    bottom: calc(-1300px / 5);
    left: calc(-1300px / 5);
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
    transform: scaleX(-1);
  }
`;

export const TextContainer = styled(motion.div)`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (max-width: 900px) {
    width: 100%;
  }

  a {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 15px;
    border: none;
    border-radius: 12px;
    background: transparent;
    text-decoration: none;
    color: ${props => props.theme.textButton};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    div {
      box-shadow: 2px 2px 5px 0 rgb(0,0,0, 0.4);
      background: ${props => props.theme.contact};
      border-radius: 12px;
      width: 11rem;
      height: 7rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
`