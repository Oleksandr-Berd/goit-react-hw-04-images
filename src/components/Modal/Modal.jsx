import css from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ onClose, largeImageURL, alt }) {
  const handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    });
  });

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className={css.image__modal} src={largeImageURL} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
}
