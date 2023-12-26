import Modal from 'react-modal';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
  },
};
Modal.setAppElement('#root');

export const ImgModal = ({ isOpen, onClose, image, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={image} alt={tags} width="1050" height="700" />
    </Modal>
  );
};
