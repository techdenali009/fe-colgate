import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface ActionPopoverProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionPopover: React.FC<ActionPopoverProps> = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute top-10 right-0 bg-white border rounded shadow-lg p-2 w-32">
      <button
        onClick={onEdit}
        className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 text-blue-500"
      >
        <FiEdit className="text-xl" />
        <span>Edit</span>
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 text-red-500"
      >
        <RiDeleteBin6Line className="text-xl" />
        <span>Delete</span>
      </button>
    </div>
  );
};
export default ActionPopover;