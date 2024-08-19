"use client"
import { createContext, useState } from "react";

export const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
  const links = [
    {url: "/", title:"Home"},
    {url: "/resume", title:"Resume"},
    {url: "/work", title:"Work"},
    {url: "/contact", title:"Contact"},
  ]

  return (
    <OpenContext.Provider value={{ links }}>
      {children}
    </OpenContext.Provider>
  )
}
