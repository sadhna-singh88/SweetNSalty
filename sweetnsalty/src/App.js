import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import { Header, AboutUs, SpecialMenu } from './container'
import {Header} from './container/Header/Header'
import {AboutUs} from './container/AboutUs/AboutUs'
import {SpecialMenu} from './container/Menu/SpecialMenu'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </>
  )
}

export default App
