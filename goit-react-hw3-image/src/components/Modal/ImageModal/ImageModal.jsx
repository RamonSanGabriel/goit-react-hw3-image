import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModalStyle = {
  container: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    right: 'auto',
    bottom: 'auto',
    margin: '-50%',
  },
};
const ImageModal = ({ isOpen, closeModal, largeImageURL }) => {
  return (
    <div>
      {/* <button className="modal-button">OpenModal</button> */}
      <Modal isOpen={isOpen} isClose={closeModal} style={ImageModalStyle}>
        <div className="modal-content">
          <img src={largeImageURL} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
