import React from 'react';
import successimage from '../images/success.svg';
import errorimage from '../images/error.svg';

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div className={`popup popup_type_infotooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__box info'>
        <button 
        type="button" 
        className="action-button popup__close-button"
        aria-label="Close button"
        onClick={onClose} />
        {status === 'success' ? (
          <div className='info__body'>
            <img 
            className='info__image' 
            src={successimage}
            alt='Check mark inside a circle - success icon' />
            <p className='info__text'>Success! You have now been registered.</p>
          </div>
        ) : (
          <div className='info__body'>
            <img 
            className='info__image' 
            src={errorimage}
            alt='A red cross inside a red circle - fail icon' />
            <p className='info__text'>Oops, something went wrong! Please try again.</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default InfoTooltip;
