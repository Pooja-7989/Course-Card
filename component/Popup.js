import React from 'react';
import './popup.css';

const Popup = ({ onClose, children }) => {
  return (
    
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>X</span>
        {children}
      </div>
  
  );
}

export default Popup;