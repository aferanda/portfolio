import React from 'react';
import { Container, ImageContainer, TextContainer } from './style';
import image from '../../images/undraw_web_development_0l6v.svg';

export default function About() {
  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div />
      <div />
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} alt="photo of a woman with a laptop on her lap" />
      </ImageContainer>
      <TextContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.
        </p>
        <br/>
        <p>Quaerat provident commodi consectetur veniam similique ad
          earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
          fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
          suscipit quas? Nulla, placeat.
        </p>
        <br/>
        <p>Voluptatem quaerat non architecto ab laudantium
          modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
          totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
          quasi aliquam eligendi, placeat qui corporis!
        </p>
      </TextContainer>
    </Container>
  )
}
