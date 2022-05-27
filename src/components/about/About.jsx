/* eslint-disable react/prop-types */
import React from 'react';
import { Container, TextContainer } from './style';

import { womanLove } from '../../assets/images';
import { Skill } from '../skill/Skill';

export function About({ isDarkTheme }) {
  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <TextContainer>
        <img src={womanLove} />
        <p>Olá, sou Amanda. Estou em transição de carreira. Atualmente estudo desenvolvimento web e estou cada dia mais apaixonada pelo mundo da tecnologia.
        </p>
      </TextContainer>
      <Skill isDarkTheme={isDarkTheme} />
    </Container>
  )
}
