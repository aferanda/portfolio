import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Container, ImageContainer, TextContainer, Blob } from './style';

import woman from '../../assets/images/code-review-animate.svg';

export default function Header() {

  const textInput = useRef();

  useEffect(() => {
    init(textInput.current, {
      showCursor: true,
      backDelay: 1100,
      backSpeed: 40,
      strings: ["< Desenvolvedora Web />"]
    })
  }, [])

  return (
    <Container id='hero'>
      <TextContainer>
        <h1>Amanda Fernandes</h1>
        <h2><span ref={textInput}></span></h2>
        <button>
          <a href='#about'>
            <div>About Me</div>
          </a>
        </button>
      </TextContainer>
      <ImageContainer>
        <img src={woman} alt="developer woman photo" />
      </ImageContainer>
      <Blob />
    </Container>
  )
}