/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { NavBarStyle } from './style';

export function NavBar({ isDarkTheme, setIsDarkTheme }) {
  // useEffect(() => {
  //   window.onscroll = () => {
  //     const navBar = document.querySelector('nav');
  //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //       navBar.style.opacity = 1;
  //     } else {
  //       navBar.style.opacity = 0;
  //     }
  //   }
  // }, [])

  return (
    <NavBarStyle>
      <p>Logo</p>
      <p>About Me</p>
      <button
        type="button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? <BsFillMoonStarsFill /> : <BsSun />}
      </button>
    </NavBarStyle>
  )
}