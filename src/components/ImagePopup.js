import React, { useEffect } from 'react';

function ImagePopup(props) {
  useEffect(() => {
    const onEscPress = (e) => e.key === 'Escape' && props.onClose();
    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  }, []);

  return (
    <div className={`popup popup_type_picture ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-picture-box">
        <button 
        type="button" 
        className="action-button popup__close-button popup-picture-box__button"
        aria-label="Close button"
        onClick={props.onClose} />
        <img 
        src={props.card.link} 
        alt="" 
        className="popup-picture-box__image" />
        <p className="popup-picture-box__caption">{props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;