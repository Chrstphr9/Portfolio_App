import { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Modal</button>

      {/* The modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>This is a modal that appears when an external link is clicked to access the website.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
