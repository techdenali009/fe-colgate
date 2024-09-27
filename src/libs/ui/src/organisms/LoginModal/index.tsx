import React, { useState, useEffect } from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import LoginForm from '@ui/organisms/LoginForm';
import ForgotPasswordForm from '@ui/molecules/ForgotPasswordForm';
import AlreadyRegistered from '@ui/organisms/AlreadyRegisteredForm';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [currentForm, setCurrentForm] = useState<'login' | 'forgotPassword' | 'alreadyRegistered'>('login');

  const onSubmit = (data: any) => {
    console.log('data onSubmit', data);
  };

  const clearModel = () => {
    console.log('clearModel');
    setCurrentForm('login'); // Reset to login form on modal close
  };

  // Reset form when modal closes
  // useEffect(() => {
  //   console.log("hitteddd");
  //   return () => {
  //     console.log("hitteddd 22");
  //     clearModel();

  //   };
  // }, []);

  const modalHeightClass = currentForm === 'forgotPassword' || currentForm === 'alreadyRegistered' ? 'h-[420px]' : 'h-auto'; // Adjust height

  return (
    <Modal
      onClose={closeModal}
      className={`!pl-6 !pr-6 !w-40rem ${modalHeightClass}`} // Apply dynamic class for height
    >
      <ModalHeader 
        onClose={closeModal} 
       
      />
      <ModalBody title="">
        {currentForm === 'login' && (
          <LoginForm 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('forgotPassword')} // Open Forgot Password form
          />
        )}
        {currentForm === 'forgotPassword' && (
          <ForgotPasswordForm 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('alreadyRegistered')} // Go to Already Registered form
          />
        )}
        {currentForm === 'alreadyRegistered' && (
          <AlreadyRegistered 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('forgotPassword')} // Go back to Login form
          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
