import React from 'react';

import { GlobalStyle } from './styles/global';
// import NavBar from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Skill } from './components/skill/Skill';
import { Contact } from './components/contact/Contact';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <NavBar /> */}
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
