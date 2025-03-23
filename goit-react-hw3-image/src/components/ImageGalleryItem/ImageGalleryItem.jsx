import { useState } from 'react';
import ImageModal from '../Modal/ImageModal/ImageModal';

const ImageGalleryItem = ({ id, user, tags, webformatURL, largeImageURL }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setSelectedImage(largeImageURL);
    setShowModal(true);
    console.log(selectedImage);
  };

  const handleCloseModal = () => {
    // setSelectedImage(null);
    setShowModal(false);
  };
  return (
    <div key={id} className="image-gallery">
      <li className="gallery-items" onClick={handleOpenModal}>
        <img
          className="gallery-image"
          src={
            webformatURL
              ? `${webformatURL}`
              : `https://fakeimg.pl/265x250?text=No+Image+Available`
          }
          alt={tags}
        />
        <p>{user}</p>
      </li>
      {showModal && (
        <ImageModal
          handleCloseModal={handleCloseModal}
          // modalOpen={selectedImage !== null}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default ImageGalleryItem;
