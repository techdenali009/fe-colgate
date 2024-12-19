import React, { useState } from 'react';
import { profileMenuItems } from '../AccountMenu';
import { useNavigate } from 'react-router-dom';
import LogoutIconCart from '@ui/atoms/SvgAtoms/LogoutIconCart';

interface profileModalProps {
  handleLogoutClick: () => void;
}

const profileModal: React.FC<profileModalProps> = ({ handleLogoutClick, }) => {
 
  const [, setIsHovered] = useState(false);
  const navigate=useNavigate();
  const handleClick = (title: string) => {
    navigate(`/myaccount/${title}`);
    
    if (title === 'Favorites') {
      console.log('Favorites clicked');
    }

  };

  return (
    <div
      className=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col ">
        {/* <div className="bg-blue text-sm mb-4 bg-blue-100 text-appTheme p-4 text-primary-500 leading-5 rounded-lg w-full">
          Free drop-shipping for any order totaling $100 or more
        </div> */}
        <ul className="w-full overflow-auto max-h-64 text-sm ">
          {profileMenuItems.map((item, index) => (
            <li key={index} className="pl-4 pr-4 mb-3 hover:text-appTheme ">
              <a
                className="flex items-center text-tertiary-400 hover:text-primary-400 focus:text-primary-400 py-1 px-4 gap-2"
                // href={item.href}
                title={typeof item.title === 'string' ? item.title : ''}
                onClick={() => handleClick(item.title)}
              >
               
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='text-black flex hover:text-appTheme text-[0.75rem] font-HeroNewRegular font-normal leading-5 mt-6 py-2 tracking-[0.3px] cursor-pointer' onClick={handleLogoutClick}>
          <LogoutIconCart  className='mr-2'/>
          Logout
        </div>
      </div>
    </div>
  );
};

export default profileModal;
