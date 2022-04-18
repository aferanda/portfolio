import React from 'react';
import { Grid, Container, ImageContainer } from './style';
import image from '../../images/javascript-frameworks-animate.svg';

export default function Portfolio() {
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} alt="photo of a woman with a laptop on her lap" />
      </ImageContainer>
      <Grid>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </Container>
  )
}
