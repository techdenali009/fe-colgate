import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserByIdQuery, useEditUserMutation } from '@store/services/Endpoints/UserApi';
import EditUserForm from '@ui/molecules/UserEditForm';
import EditUserFormSkeleton from '@ui/atoms/EditUserFormSkeleton';

const EditUserTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const { data: userResponse, isLoading } = useGetUserByIdQuery(id);
  const [editUser, { isLoading: isSubmitting }] = useEditUserMutation();

  useEffect(() => {
    if (userResponse?.data) {
      setUserData(userResponse.data);
    }
  }, [userResponse]);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (updatedUser: any) => {
    if (id) {
      await editUser({ id, updatedUser });
      navigate('/admin/users'); 
    }
  };

  const handleCancel = () => {
    navigate('/admin/users'); 
  };

  if (isLoading || !userData) return <EditUserFormSkeleton/>;

  return (
    <div className="p-3">
      <h2 className="text-appTheme text-2xl font-HeroNewBold mb-2">User/Edit</h2>
      <EditUserForm
        userData={userData}
        isSubmitting={isSubmitting}
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default EditUserTemplate;
