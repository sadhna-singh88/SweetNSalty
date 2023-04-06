import React from 'react'
//import { FooterOverlay, Newsletter } from '../../components'
import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />
    </div>
  )
}

export default Footer
