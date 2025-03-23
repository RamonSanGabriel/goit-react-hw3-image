import './ImageModal.css';

const ImageModal = ({ handleCloseModal, image }) => {
  return (
    <div className="image-modal-overlay">
      <button className="modal-close-btn" onClick={handleCloseModal}>
        &times;
      </button>

      <div className="modal-content">
        <img src={image} className="modal-image" alt="Large Image" />
      </div>
    </div>
  );
};

export default ImageModal;
