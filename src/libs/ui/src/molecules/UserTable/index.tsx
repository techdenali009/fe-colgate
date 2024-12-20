import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SearchBar from '../SearchBar';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

import ReactPaginate from 'react-paginate';
import UserPopover from '../UserPopover';
import SkeletonRow from '@ui/atoms/SkeletonRow';
import CarouselPrevArrow from '@ui/atoms/SvgAtoms/CarouselPrevArrow';
import CarouselNextArrow from '@ui/atoms/SvgAtoms/CarouselNextArrow';

interface UserTableProps {
  loading: boolean;
  users: Array<{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    status: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
      phone: number;
      _id: string;
    };
  }>;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  hasMore: boolean;
}

const UserTable: React.FC<UserTableProps> = ({
  loading,
  users,
  handleEdit,
  handleDelete,
  searchQuery,
  setSearchQuery,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const [visiblePopover, setVisiblePopover] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const togglePopover = (id: string) => {
    setVisiblePopover((prev) => (prev === id ? null : id));
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    if (selectedPage.selected + 1 !== currentPage) {
      setCurrentPage(selectedPage.selected + 1);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesStatus =
      filter.toLowerCase() === 'all' ||
      user.status.toLowerCase() === filter.toLowerCase();
    return matchesStatus;
  });

  return (
    <div className="mt-6 w-full">
      <div className="bg-white border rounded-lg drop-shadow-lg p-8 h-[34rem] w-fit md:w-full dark:bg-appModalColor">
        <div className="flex justify-end gap-4 mr-2">
   
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search User"
            InputclassName=""
            searchclassName="xl:!w-[350px] !rounded-xl !my-0"
          >
          </SearchBar>
          
             
        
          <FilterDropdown
            options={['All', 'Active', 'inactive']}
            onSelect={(option) => setFilter(option)}
            buttonClassName="rounded-xl h-10"
          />
        </div>

        <table className="lg:table-auto mt-5 font-HeroNewRegular text-gray-500">
          <thead>
            <tr className="bg-gray-300 text-sm capitalize">
              <th className="px-4 py-2 text-left border-b w-1/4">Name</th>
              <th className="px-4 py-2 text-left border-b w-1/4">Email</th>
              <th className="px-4 py-2 text-left border-b w-1/4">
                Phone Number
              </th>
              <th className="px-4 py-2 text-left border-b w-1/5">Status</th>
              <th className="px-4 py-2 text-left border-b w-1/4">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array(5)
                .fill(0)
                .map((_, index) => <SkeletonRow key={index} />)
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-b transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 text-appTextColor"
                >
                  <td className="px-4 py-2 h-16">{user.firstName}</td>
                  <td className="px-4 py-2 h-16">{user.email}</td>
                  <td className="px-4 py-2 h-16">{user?.address?.phone || '######'}</td>
                  <td className="px-4 py-2 h-16">
                    {user.status === 'Active' ? (
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 min-w-[80px] justify-center capitalize">
                        {user.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20 min-w-[80px] justify-center capitalize">
                        {user.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 h-16 flex items-center">
                    <BsThreeDotsVertical
                      onClick={() => togglePopover(user._id)}
                      className="hover:text-slate-700 text-xl cursor-pointer"
                    />
                    {visiblePopover === user._id && (
                      <div className="relative">
                        <UserPopover
                          onEdit={() => handleEdit(user._id)}
                          onDelete={() => handleDelete(user._id)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredUsers.length > 0 && (
          <div className="mt-5 flex justify-between ">
            <div className="p-3 text-xs text-slate-500 ">
              Page {currentPage} of {totalPages}
            </div>
            <div>
              <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={0}
                breakLabel="..."
                onPageChange={handlePageClick}
                containerClassName="flex justify-center items-center mt-2"
                pageClassName="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 dark:text-black dark:hover:bg-gray-600 text-xs"
                activeClassName="!bg-appTheme-opacity-70 !text-white"
                previousLabel={<CarouselPrevArrow />}
                nextLabel={<CarouselNextArrow />}
                previousClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
                }`}
                nextClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
