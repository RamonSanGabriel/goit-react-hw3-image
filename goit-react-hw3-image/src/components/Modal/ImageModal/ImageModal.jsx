import './ImageModal.css';

const ImageModal = ({
  selectLargeImage,
  largeImageURL,
  onClick,
  currentIndex,
  photos,
  open,
}) => {
  return (
    <div className="image-modal overlay">
      <button className="modal-button" onClick={onClick}>
        &times;
      </button>
      <div className="modal-content">
        <h1>Large Image</h1>
        <img src={largeImageURL} alt="Large Image" width="90%" />
      </div>
    </div>
  );
};

export default ImageModal;
