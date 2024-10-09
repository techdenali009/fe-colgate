import React from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import { IoLocationSharp } from 'react-icons/io5';

const ReviewModal: React.FC = () => {
  // Implement the onClose function for handling modal close
  const handleClose = () => {
    console.log('Modal closed');
  };

  return (
    <div>
      <Modal onClose={handleClose}>
        <ModalHeader onClose={handleClose}>

          <h1>Feedback Details</h1>
          <div className=''>
            <IoLocationSharp className='text-neutral-500' />
            <span>Wexford, PA</span>
          </div>
        </ModalHeader>

        {/* Add modal content here */}
      </Modal>
    </div>
  );
};

export default ReviewModal;

