import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Me.jpeg'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Diego Ruiz</h1>
        <h5 className="text light">FullStack Developer</h5>
        <CTA />

        <div className="Me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
    
  )
}

export default Header