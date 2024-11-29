import React from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import { Button } from '@ui/atoms/Button';

interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  message:string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onClose,
  onConfirm,
message
}) => {
  return (
    <Modal onClose={onClose} className="rounded-xl !h-70 lg:!w-1/3">
      <ModalHeader onClose={onClose} >{''}</ModalHeader>
      <ModalBody title="" className="!mt-0">
        <div>
          <p className="text-2xl font-semibold text-center">Are You Sure?</p>
          <p className="text-center mt-8">
         {message}
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button
            className="bg-gray-300 text-black rounded-lg w-32 h-10"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-red-500 text-white rounded-lg w-32 h-10 mx-5"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ConfirmationModal;
