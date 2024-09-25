import ModalBody from '@ui/atoms/ModalBody';

import RegisterForm from '@ui/organisms/RegisterModal';
import { useNavigate } from 'react-router-dom';

export const RegisterTemplatePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <>
      
      <ModalBody title={'gg'} className='!p-0 !m-0 text-center'>
     
        <RegisterForm />
      </ModalBody>
    </>
  );
};
