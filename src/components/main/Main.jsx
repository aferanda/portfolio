import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Container, ImageContainer, TextContainer } from './style';

import image from '../../images/undraw_proud_coder_re_exuy.svg';

export default function Main() {

  useEffect(() => {
    const title = document.querySelector('#title');
    const titleArray = title.innerHTML.split('');
    const myName = document.querySelector('#myName');
    const myNameArray = myName.innerHTML.split('');
    myName.innerHTML = '';
    title.innerHTML = '';
    titleArray.forEach((letter, i) => {
      setTimeout(() => title.innerHTML += letter, 95 * i)
    })
    setTimeout(() => {
      myNameArray.forEach((letter, i) => {
        setTimeout(() => myName.innerHTML += letter, 95 * i)
      })
    }, 3230)
  }, [])

  return (
    <Container>
      <TextContainer>
        <div>
          <h1 id="title">Olá, seja bem vindo(a)! Meu nome é </h1>
          <h1 id="myName">Amanda!</h1>
        </div>
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