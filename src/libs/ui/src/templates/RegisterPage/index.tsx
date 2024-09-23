import ModalBody from '@ui/atoms/ModalBody';
import { HeaderLabel } from '@ui/molecules/LabelTypes/HeaderLabel';
import RegisterForm from '@ui/organisms/RegisterModal';
import { useNavigate } from 'react-router-dom';

export const RegisterTemplatePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <>
      
      <ModalBody title={'gg'} className='text-center !p-0 !pt-0 !mt-0'>
     
        <RegisterForm />
      </ModalBody>
    </>
  );
};
