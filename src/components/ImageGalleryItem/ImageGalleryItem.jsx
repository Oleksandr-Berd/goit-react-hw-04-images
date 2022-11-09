import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = evt => setShowModal(!showModal);

  return (
    <li
      className={css.gallery__item}
      onClick={toggleModal}
      largeimageurl={largeImageURL}
    >
      <img className={css.galleryItem__image} src={webformatURL} alt={tags} />
      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          alt={tags}
        ></Modal>
      )}
    </li>
  );
}
