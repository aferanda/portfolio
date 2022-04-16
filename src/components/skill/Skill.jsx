import React from 'react';
import { Container } from './style';
import icons from '../../helpers/icons';

export default function Skill() {
  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img src={icons.html} alt="" />
      </div>
      <div>
        <img src={icons.css} alt="" />
      </div>
      <div>
        <img src={icons.javascript} alt="" />
      </div>
      <div>
        <img src={icons.react} alt="" />
      </div>
      <div>
        <img src={icons.redux} alt="" />
      </div>
      <div>
        <img src={icons.node} alt="" />
      </div>
      <div>
        <img src={icons.github} alt="" />
      </div>
      <div>
        <img src={icons.mysql} alt="" />
      </div>
      <div>
        <img src={icons.sass} alt="" />
      </div>
      <div>
        <img src={icons.python} alt="" />
      </div>
      <div>
        <img src={icons.swift} alt="" />
      </div>
      <div>
        <img src={icons.typescript} alt="" />
      </div>
      <div>
        <img src={icons.docker} alt="" />
      </div>
      <div>
        <img src={icons.styled} alt="" />
      </div>
      <div>
        <img src={icons.git} alt="" />
      </div>
      <div>
        <img src={icons.express} alt="" />
      </div>
      <div>
        <img src={icons.mongodb} alt="" />
      </div>
      <div>
        <img src={icons.graphql} alt="" />
      </div>
      <div>
        <img src={icons.jest} alt="" />
      </div>
      <div>
        <img src={icons.mocha} alt="" />
      </div>
      <div>
        <img src={icons.rtl} alt="" />
      </div>
      <div>
        <img src={icons.sinon} alt="" />
      </div>
      <div>
        <img src={icons.postgre} alt="" />
      </div>
    </Container>
  )
}