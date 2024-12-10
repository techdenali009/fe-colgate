import React, { useState } from 'react';
import DropDownIOpencon from '@ui/atoms/SvgAtoms/DropdownOpenIcon';
import DropUpIcon from '@ui/atoms/SvgAtoms/DropdownCloseIcon';
import DropdownMenu from '@ui/atoms/AdminPannelDropdownMenu'; // Import the DropdownMenu atom

const DropdownToggle: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='dropdown-container relative'>
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className='dropdown-toggle text-[16px] focus:outline-none'
        aria-label='Toggle Dropdown'
      >
        {isDropdownOpen ? <DropUpIcon /> : <DropDownIOpencon />}
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && <DropdownMenu />}
    </div>
  );
};

export default DropdownToggle;
