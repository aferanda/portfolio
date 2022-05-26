/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './style';
import { skills } from '../../assets/data/skills'

export function Skill({ isDarkTheme }) {
  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {skills.map(({ img, imgDark, description, link }) => (
        <a key={description} href={link} target="_blank" rel="noreferrer" >
          <div data-content={description} >
            <img
              src={ isDarkTheme ? imgDark : img }
              title={description}
              alt={description}
            />
          </div>
        </a>
      ))}
    </Container>
  )
}