import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Popover from '../Popover/Popover';

interface UserPopoverProps {
  onEdit: () => void;
  onDelete: () => void;
}

const UserPopover: React.FC<UserPopoverProps> = ({ onEdit, onDelete }) => (
  <Popover className=" float-left right-[0px] top-3 !p-0 !py-2 boxshadow  shadow-lg shadow-[#626161]  !min-w-10">
    <div
      className="flex hover:bg-slate-100 p-2 dark:hover:bg-slate-700"
      onClick={onEdit}
    >
      <FiEdit className="text-xl text-appTheme cursor-pointer hover:text-appTheme-opacity-60" />
      <p className="text-appTextColor cursor-pointer mx-2">Edit</p>
    </div>
    <hr />
    <div
      className="flex hover:bg-slate-100 p-2 dark:hover:bg-slate-700"
      onClick={onDelete}
    >
      <RiDeleteBin6Line className="text-xl text-red-500 cursor-pointer hover:text-red-700" />
      <p className=" cursor-pointer text-appTextColor mx-2">Delete</p>
    </div>
  </Popover>
);

export default UserPopover;
