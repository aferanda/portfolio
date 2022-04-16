import React from 'react';
import { CircleBack, CircleFront, Container, ImageContainer, TextContainer } from './style';
import image from '../../images/undraw_contact_us_re_4qqt.svg';

export default function Contact() {
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} alt="photo of a woman with a laptop on her lap" />
      </ImageContainer>
      <TextContainer>
      </TextContainer>
      <CircleBack />
      <CircleFront />
    </Container>
  )
}
