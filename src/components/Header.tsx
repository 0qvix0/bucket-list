import React from 'react';
import consent from '../assets/img/consent.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__main">
          <input className='header__main-input' placeholder='Хотите добавить что-то в список дел?' type="text" />
          <img className="header__main-img" src={consent} alt="consent" />
        </div>
      </div>
    </div>
  );
};
export default Header;
