import React from 'react';

import { Container } from './style';
import { skills } from '../../assets/data/skills'

export function Skill() {
  return (
    <Container
      id='skills'
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {skills.map(({ img, description }) => (
        <div key={ description }>
          <img src={ img } title={ description } alt={ description } />
        </div>
      ))}
    </Container>
  )
}