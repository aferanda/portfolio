import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  padding: 0 10%;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  justify-content: space-between;
  background-color: var(--glassmorphism);
  backdrop-filter: blur(4px);
  z-index: 200;

  @media (max-width: 900px){
    display: none;
  }
`