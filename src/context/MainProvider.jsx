/* eslint-disable react/prop-types */
import React from "react";
import { MainContext } from './MainContext'

export default function MainProvider({ children }) {
  const context = {

  }

  return (
    <MainContext.Provider value={ context }>
      { children }
    </MainContext.Provider>
  )
}