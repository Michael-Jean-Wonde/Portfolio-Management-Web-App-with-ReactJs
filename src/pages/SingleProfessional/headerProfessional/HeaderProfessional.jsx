import React from 'react';
import './HeaderProfessional.css';
import CTA from './CTA';
import ME from '../assets/dgu.png'
import HeaderSocial from './HeaderSocials'

const HeaderProfessional = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dgafie Melese</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default HeaderProfessional;
