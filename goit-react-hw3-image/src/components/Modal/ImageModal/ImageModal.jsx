import { useState } from 'react';

import './ImageModal.css';

const ImageModal = ({
  setLargeImage,
  largeImageURL,
  onClose,
  currentIndex,
  setCurrentIndex,
  photos,
}) => {
  // const [index,setIndex] = useState(currentIndex);

  // const selectImage = photos[0].largeImageURL;

  // console.log(selectImage);
  return (
    <div className="image-modal-overlay">
      <button className="modal-button" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content">
        <h1>Large Image</h1>
        {/* <img src={selectImage} alt="Large Image" width="90%" /> */}
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.id.largeImageURL} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
