import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { init } from 'ityped';
import { Container, ImageContainer, TextContainer } from './style';

import image from '../../images/undraw_proud_coder_re_exuy.svg';

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
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <TextContainer>
        <h1>Amanda Fernandes</h1>
        <h2><span ref={textInput}></span></h2>
        <button>
          <div>Get started</div>
        </button>
      </TextContainer>
      <ImageContainer>
        <img src={image} alt="developer woman photo" />
      </ImageContainer>
    </Container>
  )
}