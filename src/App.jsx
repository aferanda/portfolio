import React from 'react'
import GlobalStyle from './styles/global'
import NavBar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Header />
      <About />
    </>
  )
}

export default App
