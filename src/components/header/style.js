import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  color: ${props => props.theme.text};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
  overflow: hidden;
  padding: 0 10%;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
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

  @media screen and (min-width: 1025px) and (max-width: 1250px) {
    width: 900px;
    height: 900px;
    top: calc(-900px / 5);
    right: calc(-900px / 5);
  }

  @media screen and (min-width: 1251px) and (max-width: 1600px) {
    width: 1000px;
    height: 1000px;
    top: calc(-1000px / 5);
    right: calc(-1000px / 5);
  }

  @media screen and (min-width: 1601px) and (max-width: 2250px) {
    width: 1100px;
    height: 1100px;
    top: calc(-1100px / 5);
    right: calc(-1100px / 5);
  }

  @media screen and (min-width: 2250px) {
    width: 1300px;
    height: 1300px;
    top: calc(-1300px / 5);
    right: calc(-1300px / 5);
  }
`

export const TextContainer = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    text-align: center;
    width: 100%;
  }

  h1 {
    background-clip: text;
    background: ${props => props.theme.gradient};
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

    @media (max-width: 900px) {
      text-align: center;
    }
  }

  h2 {
    font-family: Roboto Mono, sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2;
    color: ${props => props.theme.textDeveloper};
    margin-bottom: var(--spacing-4);
  }

  button {
    background: var(--white);
    border-radius: 14px;
    border: none;
    box-shadow: 0 0 0 3px var(--grey-200);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    height: 50px;
    padding: 0 20px;
    position: relative;
    transition: all 0.2s ease-in-out 0s;

    div {
      font-family: Montserrat Alternates, monospace, serif;
      background: ${props => props.theme.gradient};
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
      var(--red-400),
      var(--malva-300),
      var(--maize-300)
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
    background: var(--grey-100);
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
    width: 80%;
    padding: 50px 20px;
    text-align: center;
  }

  @media (max-width: 720px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 100%;
    transform: scaleX(-1);
  }
`;
