import React, { useState, useEffect } from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import LoginForm from '@ui/organisms/LoginForm';
import ForgotPasswordForm from '@ui/molecules/ForgotPasswordForm';
import AlreadyRegistered from '@ui/organisms/AlreadyRegisteredForm';
import { LoginConsts, ValidationForm } from '@utils/Login';
import { useDispatch } from 'react-redux';
import { setAuthToken, userInfo } from '@store/services/Slices/authSlice';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { useLoginMutation } from '@store/services/Endpoints/AuthApi';
import { AppSpinner } from '@ui/atoms/AppSpinner';

interface LoginModalProps {
  closeModal: () => void;
}
interface LoginData {
  email?: string;
  password?: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [currentForm, setCurrentForm] = useState<'login' | 'forgotPassword' | 'alreadyRegistered'>('login');
  const dispatch = useDispatch(); 

   
  const [login, { isLoading ,isError}] = useLoginMutation();

  const onSubmit = async (data: LoginData) => {
    
    try {
      const result = await login(data).unwrap(); 
      if (result.status) {
        dispatch(userInfo(result.data.userInfo));
        dispatch(setAuthToken(result.data.token))
        dispatch(toggleLoginModel());
      } else {
        console.error('Login failed:', result);
      }
    } catch (error) {
      console.error('Login error:', error);

    }
  };

  const clearModel = () => {
    setCurrentForm('login'); 
  };

  //Reset form when modal closes
  useEffect(() => {
    return () => {
      clearModel();

    };
  }, []);

  const modalHeightClass = currentForm === LoginConsts.ForgotPassword || currentForm === LoginConsts.AlreadyRegistered ? 'h-[420px]' : 'h-auto'; // Adjust height
  
  //Use this attribute  forshowing the  'invalid email and password' in modal
  console.log('isError',isError);
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
        <div className="relative">
          <div className={isLoading ? 'opacity-50' : 'opacity-100'}>
            {currentForm === LoginConsts.Login && (
              <LoginForm 
                onSubmit={onSubmit} 
                setIsForgotPassword={() => setCurrentForm('forgotPassword')}
              />
            )}
            {isError && (
              <span className="text-normal text-appErrorMessage font-HeroNewBold mt-1">{ValidationForm.EmailPasswordFailed}</span>
            )}
            {currentForm === LoginConsts.ForgotPassword && (
              <ForgotPasswordForm 
                onSubmit={onSubmit} 
                setIsForgotPassword={() => setCurrentForm('alreadyRegistered')}
              />
            )}
            {currentForm === LoginConsts.AlreadyRegistered && (
              <AlreadyRegistered 
                onSubmit={onSubmit}
                setIsForgotPassword={() => setCurrentForm('forgotPassword')} mode={'modal'}/>
            )}
          </div>

          {isLoading && (
            <AppSpinner containerClassName="!h-[350px] flex justify-center items-center absolute inset-0" />
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;