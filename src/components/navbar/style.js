import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  padding: 0 10%;
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 900px){
    display: none;
  }

  button {
    background: ${props => props.theme.background};
    border: none;
    border-radius: 35px;
    cursor: pointer;
    width: 80px;
    /* height: 35px; */
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: ${props => props.theme.position};

    svg {
      width: 30px;
      height: 30px;
      color: ${props => props.theme.background};
      background: ${props => props.theme.accent};
      border-radius: 50%;
      padding: 5px;
    }
  }
`