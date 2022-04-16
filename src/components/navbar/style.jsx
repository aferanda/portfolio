import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  padding: 0 10%;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px){
    display: none;
  }
`