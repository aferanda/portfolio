import styled from 'styled-components';
import { motion } from 'framer-motion';

import blob from '../../images/blob.svg';

export const Container = styled(motion.header)`
  color: var(--text);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
  overflow: hidden;
  padding: 0 10%;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`

export const Blob = styled.div`
  z-index: -5;
  position: absolute;
  opacity: 0.2;
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(330deg);

  @media screen and (max-width: 414px) {
    width: 500px;
    height: 500px;
    top: calc(-500px / 5);
    right: calc(-500px / 5);
  }

  @media screen and (min-width: 415px) and (max-width: 539px) {
    width: 600px;
    height: 600px;
    top: calc(-600px / 5);
    right: calc(-600px / 5);
  }

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 700px;
    height: 700px;
    top: calc(-700px / 5);
    right: calc(-700px / 5);
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 800px;
    height: 800px;
    top: calc(-800px / 5);
    right: calc(-800px / 5);
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 900px;
    height: 900px;
    top: calc(-900px / 5);
    right: calc(-900px / 5);
  }

  @media screen and (min-width: 1441px) and (max-width: 2560px) {
    width: 1125px;
    height: 1125px;
    top: calc(-1125px / 5);
    right: calc(-1125px / 5);
  }

  @media screen and (min-width: 2560px) {
    width: 2000px;
    height: 2000px;
    top: calc(-2000px / 5);
    right: calc(-2000px / 5);
  }
`

export const TextContainer = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    margin-top: 100px;
    padding: 50px 20px;
    text-align: center;
    width: 100%;
  }

  h1 {
    background-clip: text;
    background-image: linear-gradient(
      to right,
      var(--pink),
      var(--purple),
      var(--yellow)
    );
    color: var(--text);
    display: inline;
    font-family: Montserrat Alternates, monospace, serif;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: var(--spacing-4);
    padding-right: 5px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-family: Roboto Mono, sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2;
    color: var(--dark-blue);
    margin-bottom: var(--spacing-4);
  }

  button {
    background: var(--white);
    border-radius: 14px;
    border: none;
    box-shadow: 0 0 0 3px var(--border);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    height: 50px;
    padding: 0 20px;
    position: relative;
    transition: all 0.2s ease-in-out 0s;

    div {
      background-image: linear-gradient(
        to right,
        var(--pink),
        var(--purple),
        var(--yellow)
      );
      background-clip: text;
      color: var(--text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  button::before {
    backface-visibility: hidden;
    background: linear-gradient(
      -45deg,
      var(--pink),
      var(--purple),
      var(--yellow)
    );
    border-radius: 17px;
    content: '';
    height: calc(100% + 6px);
    left: -3px;
    opacity: 0;
    position: absolute;
    top: -3px;
    transform: translateX(0px);
    transition: all 0.2s ease-in-out 0s;
    width: calc(100% + 6px);
    z-index: -1;
  }

  button:active {
    background: var(--lightgrey);
  }

  button:hover {
    box-shadow: transparent 0px 0px 0px 2px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
  }

  button:hover::before {
    opacity: 1;
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 100%;
  }
`;
