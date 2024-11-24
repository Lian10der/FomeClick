import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div>
        <div className="footer-redes-sociais">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="footer-content-center">
          <h2>Empresa</h2>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Entrega</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Entre em contato</h2>
          <ul>
            <li>+55 48 4002-8922</li>
            <li>FomeClick@gmail.com</li>
          </ul>
        </div>
       </div>
       <hr />
        <p className="footer-copyright">Copyright 2024 @ FomeClick © Fomeclick.com -  Todos os Direitos Reservados. </p>
    </div>
  )
}

export default Footer
