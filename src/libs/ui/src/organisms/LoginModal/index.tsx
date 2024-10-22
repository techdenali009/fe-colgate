import React, { useState, useEffect } from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import LoginForm from '@ui/organisms/LoginForm';
import ForgotPasswordForm from '@ui/molecules/ForgotPasswordModal';
import AlreadyRegistered from '@ui/organisms/AlreadyRegisteredForm';
import { LoginConsts } from '@utils/Login';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [currentForm, setCurrentForm] = useState<'login' | 'forgotPassword' | 'alreadyRegistered'>('login');

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const onSubmit = (data:any) => {
    console.log('data onSubmit', data);
  };

  const clearModel = () => {
    console.log('clearModel');
    setCurrentForm('login'); // Reset to login form on modal close
  };

  //Reset form when modal closes
  useEffect(() => {
    console.log('hitted');
    return () => {
      clearModel();

    };
  }, []);

  const modalHeightClass = currentForm === LoginConsts.ForgotPassword || currentForm === LoginConsts.AlreadyRegistered ? 'h-[420px] px-[40px] py-[30px]' : 'h-auto'; // Adjust height

  return (
    <Modal
      onClose={closeModal}
      className={`!w-40rem ${modalHeightClass}`} // Apply dynamic class for height
    >
      <ModalHeader 
        onClose={closeModal}              
      >
        <p></p>
      </ModalHeader>
      <ModalBody title="">
        {currentForm === LoginConsts.Login && (
          <LoginForm 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('forgotPassword')} // Open Forgot Password form
          />
        )}
        {currentForm === LoginConsts.ForgotPassword && (
          <ForgotPasswordForm 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('alreadyRegistered')} // Go to Already Registered form
          />
        )}
        {currentForm === LoginConsts.AlreadyRegistered && (
          <AlreadyRegistered 
            onSubmit={onSubmit}
            setIsForgotPassword={() => setCurrentForm('forgotPassword')} // Go back to Login form
            mode={'modal'}          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;