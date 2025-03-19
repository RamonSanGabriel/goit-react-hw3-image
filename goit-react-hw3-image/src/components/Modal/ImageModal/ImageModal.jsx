import './ImageModal.css';

const ImageModal = ({ selectLargeImage, onClick, currentIndex }) => {
  return (
    <div className="overlay">
      <button className="modal-button" onClick={onClick}>
        &times;
      </button>
      <div className="modal-content">
        <h1>Large Image</h1>
        <img src={selectLargeImage} alt="Large Image" />
      </div>
    </div>
  );
};

export default ImageModal;
