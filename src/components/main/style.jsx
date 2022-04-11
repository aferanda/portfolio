import styled from 'styled-components'
import { keyframes } from 'styled-components';

const appear = keyframes`
  50%, 100% { opacity: 1 };
  0%, 25%, 75% { opacity: 0 };
`

const typeWriter = keyframes`
  from { width: 0 }
  to { width: 16em }
`

const blinkCursor = keyframes`
  from { border-right-color: var(--font-base) }
  to { border-right-color: transparent }
`

export const Container = styled.div`
  color: var(--text);
  height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  margin: 0px auto;
  overflow: hidden;
  padding: 0 10%;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
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
    animation: ${blinkCursor} .6s steps(20) infinite normal, ${typeWriter} 6s steps(20) 1s normal both;
    background-clip: text;
    background-image: linear-gradient(
      to right,
      var(--pink),
      var(--purple),
      var(--yellow)
    );
    border-right: 3px solid var(--font-base);
    color: var(--text);
    display: inline;
    font-family: Courier, monospace, serif;
    font-size: 2.3rem;
    line-height: 1.2;
    margin-bottom: var(--spacing-4);
    padding-right: 5px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    animation: ${appear} 3s ease 0s 1 normal none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
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

export const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 100%;
    /* border-radius: 24px; */
    /* box-shadow: rgb(45 21 71 / 20%) 30px 20px 35px; */
  }
`;
