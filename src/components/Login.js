import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
    // setEmail('');
    // setPassword('');
  }

  return (
    <div className='auth-page'>
      <h1 className='auth-page__title'>Log in</h1>
      <form 
      className='auth-page__form'
      onSubmit={handleSubmit}>
        <fieldset className='auth-page__form-fields'>
          <input 
          className='auth-page__email auth-page__input' 
          placeholder='Email' 
          type='email'
          onChange={handleChangeEmail} />
          <input 
          className='auth-page__password auth-page__input' 
          placeholder='Password' 
          type='password'
          onChange={handleChangePassword} />
        </fieldset>
        <button className='auth-page__submit-button action-button' type='submit'>Log in</button>
      </form>
      <div className='auth-page__subtext'>
        <p className='auth-page__text'>
          Not a member yet?&nbsp;
          <NavLink to='/signup' className='auth-page__redirect-link link'>Sign up here!</NavLink>
        </p>
      </div>
    </div>
  )
};

export default Login;
