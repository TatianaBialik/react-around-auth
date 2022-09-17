import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ email, onLogout }) {
  const location = useLocation();

  return (
    <header className="header">
      <img 
      src={logo}
      alt="Around the U.S. inscription" 
      className="header__logo" />

      {location.pathname === '/signin' && (<NavLink to='/signup' className='header__item link'>Sign up</NavLink>)}
      {location.pathname === '/signup' && (<NavLink to='/signin' className='header__item link'>Log in</NavLink>)}
      {location.pathname === '/' && (
        <div className="header__menu">
          <p className='header__item header__text'>{email}</p>
          <button className="header__item header__button action-button" onClick={onLogout}>Log out</button>
        </div>
        )}
    </header>
  )
}

export default Header;