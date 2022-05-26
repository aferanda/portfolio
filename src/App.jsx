import React, { useState } from 'react';

import { GlobalStyle } from './styles/global';
import { NavBar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Skill } from './components/skill/Skill';
import { Contact } from './components/contact/Contact';
import { Portfolio } from './components/portfolio/Portfolio';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { Footer } from './components/footer/Footer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Header isDarkTheme={isDarkTheme} />
      <About />
      <Skill isDarkTheme={isDarkTheme} />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
