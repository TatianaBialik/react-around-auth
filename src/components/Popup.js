import React, { useEffect } from 'react';

function Popup({ isOpen, onClose, name, children }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    };

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      };
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
    }, [isOpen, onClose, name]);

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      };
    };

    return (
      <div
        className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name}`}
        onClick={handleOverlayClick} >
          <div className={`${name === 'picture' ? 'popup-picture-box' : 'popup__box'}`}>
            <button
              type='button'
              className='action-button popup__close-button'
              aria-label='Close'
              onClick={onClose} />

            {children}
          </div>
      </div>
    )
};

export default Popup;
