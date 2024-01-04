import React from 'react';
import './ImageModal.css';

function ImageModal({ imageUrl, onClose}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="image-container1">
          <img src={imageUrl} alt="Image" />
        
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
