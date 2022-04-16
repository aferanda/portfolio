import React from 'react';
import { Carousel, CircleBack, CircleFront, Container, ImageContainer } from './style';
import image from '../../images/undraw_mobile_testing_re_w7yb.svg';

export default function Portfolio() {
  return (
    <Container>
      <Carousel>
        projetos
      </Carousel>
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} alt="photo of a woman with a laptop on her lap" />
      </ImageContainer>
      <CircleBack />
      <CircleFront />
    </Container>
  )
}
