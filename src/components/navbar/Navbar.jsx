import React, { useEffect } from 'react'
import { NavBarStyle } from './style'

export default function NavBar() {

  useEffect(() => {
    window.onscroll = () => {
      const navBar = document.querySelector('nav');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.style.opacity = 1;
      } else {
        navBar.style.opacity = 0;
      }
    }
  }, [])

  return (
    <NavBarStyle>
      <p>Image</p>
      <p>Get started</p>
    </NavBarStyle>
  )
}