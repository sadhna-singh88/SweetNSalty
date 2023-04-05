import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import { Header, AboutUs, SpecialMenu } from './container'
import {Header} from './container/Header/Header'
import {AboutUs} from './container/AboutUs/AboutUs'
import {SpecialMenu} from './container/Menu/SpecialMenu'
import {Chef} from './container/Chef/Chef'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </>
  )
}

export default App
