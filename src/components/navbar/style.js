import styled from 'styled-components';

export const NavBarStyle = styled.nav`
  padding: 0 10%;
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  justify-content: end;
  background: transparent;
  z-index: 10;

  &#scroll {
    background: ${props => props.theme.navbar};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
  }

  button {
    background: ${props => props.theme.button};
    border: none;
    border-radius: 35px;
    cursor: pointer;
    width: 80px;
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: ${props => props.theme.position};

    transition: all 0.2s;

    svg {
      width: 30px;
      height: 30px;
      color: ${props => props.theme.iconColor};
      background: ${props => props.theme.iconBg};
      border-radius: 50%;
      padding: 5px;
      transform: scaleX(-1);
    }
  }
`