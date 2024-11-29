import React, { useState } from 'react';
import { Button } from '@ui/atoms/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationModal from '@ui/molecules/ConfirmationModal';
import { RiUserAddLine } from 'react-icons/ri';
import UserTable from '@ui/molecules/UserTable';
import { useDeleteUserMutation, useGetUsersQuery } from '@store/services/Endpoints/UserApi';

const UserDateTemplate: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [deleteUser] = useDeleteUserMutation();
  
  const { data: usersData, isLoading } = useGetUsersQuery({
    search: searchQuery, // Use searchQuery directly
    page: currentPage,
    limit: 5,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const headingText =
    location.pathname === '/admin/users' ? 'Users' : 'Users/edit';

  const handleAddUser = () => {
    navigate('/admin/adduser');
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/users/${id}`);
  };

  const handleDelete = (id: string) => {
    setUserToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete);
      setShowModal(false);
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="p-4 w-fit md:w-full">
      <div className="flex justify-between mb-6">
        <h2 className="text-appTheme text-2xl font-HeroNewBold font-bold">
          {headingText}
        </h2>

        <Button
          className="bg-appTheme text-white font-HeroNewSemiBold border-appTheme border-2 rounded-lg w-24 h-10 flex items-center justify-center"
          onClick={handleAddUser}
        >
          <RiUserAddLine />
          <span className="ml-2">Add</span>
        </Button>
      </div>

      <div>
        <UserTable
          loading={isLoading}
          users={usersData?.data?.users || []}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={usersData?.data?.meta?.totalPages}
          hasMore={usersData?.data?.hasMore || false}
        />

        {showModal && (
          <ConfirmationModal onClose={cancelDelete} onConfirm={confirmDelete}  message="Do you really want to delete these records? This process cannot be
          undone."/>
        )}
      </div>
    </div>
  );
};

export default UserDateTemplate;
