/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { NavBarStyle } from './style';

export function NavBar({ isDarkTheme, setIsDarkTheme }) {
  useEffect(() => {
    window.onscroll = () => {
      const navBar = document.querySelector('nav');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.id = 'scroll';
      } else {
        navBar.id = 'top';
      }
    }
  }, []);

  return (
    <NavBarStyle id="top">
      <button
        type="button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? <BsFillMoonStarsFill /> : <BsSun />}
      </button>
    </NavBarStyle>
  )
}