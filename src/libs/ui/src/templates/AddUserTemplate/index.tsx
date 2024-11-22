import React, { useState } from 'react';
import AddUserForm from '@ui/organisms/AddUserForm';
import { useAddUserMutation } from '@store/services/Endpoints/UserApi';
import { useNavigate } from 'react-router-dom';
import Modal from '@ui/atoms/Modal';


const AddUserTemplate: React.FC = () => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const [errorMessages, setErrorMessages] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAddUser = async (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      await addUser(data).unwrap();
      alert('User added successfully');
      navigate('/admin/users');
    } 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    catch (err: any) {
      setErrorMessages(err.data.message);
      console.error('Error adding user:', err.data.message);
    }
  };
  const onClose = () => {
    setShowModal(false);
    
  };
  return (
    <div className="bg-white border rounded-lg drop-shadow-lg lg:p-8 lg:w-2/4 mx-auto my-10 dark:bg-appModalColor p-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Add New User
      </h1>
      {errorMessages && (
        <div className="text-red-500 text-center mb-4">{errorMessages}</div>
      )}
      <AddUserForm isLoading={isLoading} onSubmit={handleAddUser} />
      {showModal && (
        <Modal onClose={onClose}>{errorMessages}</Modal>
      )}
    </div>
  );
};

export default AddUserTemplate;
