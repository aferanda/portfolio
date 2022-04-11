import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Container, ImageContainer, TextContainer } from './style';

import image from '../../images/undraw_proud_coder_re_exuy.svg';

export default function Main() {

  useEffect(() => {
    const title = document.querySelector('h1');
    const titleArray = title.innerHTML.split('');
    title.innerHTML = '';
    titleArray.forEach((letter, i) => {
      setTimeout(() => title.innerHTML += letter, 95 * i)
    })
  }, [])

  return (
    <Container>
      <TextContainer>
        <h1>Amanda Fernandes</h1>
        <h2>{ '< Desenvolvedora Web />' }</h2>
        <button>
          <div>Get started</div>
        </button>
      </TextContainer>
      <ImageContainer>
        <img src={image} alt="proud coder" />
      </ImageContainer>
    </Container>
  )
}