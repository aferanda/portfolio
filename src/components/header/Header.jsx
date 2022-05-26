/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Container, ImageContainer, TextContainer, Blob } from './style';

import { imgLight, imgDark } from '../../assets/images';

export function Header({ isDarkTheme }) {

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
    <Container>
      <TextContainer>
        <h1>Amanda Fernandes</h1>
        <h2><span ref={textInput}></span></h2>
        <button
          type="button"
          onClick={() => Navigator}
        >
          <div>Contact me</div>
        </button>
      </TextContainer>
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={isDarkTheme ? imgDark : imgLight} alt="developer woman photo" />
      </ImageContainer>
      <Blob />
    </Container>
  )
}