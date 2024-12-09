import React from 'react';
import LogoutIcon from '../SvgAtoms/Logout';

const DropdownMenu: React.FC = () => {
  return (
    <div className="dropdown-menu absolute right-0 mt-0 p-2 bg-white border border-gray-600 rounded shadow-md z-10 w-[210px] h-[153px]  ">
      <ul>
        <li className="dropdown-profile p-3">
          My Profile
        </li>
        <li className="dropdown-profile p-3">
          Change Password
        </li>
        <li className="dropdown-profile flex p-3">
          Logout <LogoutIcon className="pl-2" />
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
