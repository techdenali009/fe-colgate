import React from 'react';

interface SubMenuProps {

  isActive: boolean;
  submenu: Array<{
    hasMore: boolean;
    title: string;
    items: string[];
  }>;

  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  className?: string;
  onNavLinkClick: (title: string) => void;
}
const SubMenu: React.FC<SubMenuProps> = ({ isActive, submenu, handleMouseEnter, handleMouseLeave, className,onNavLinkClick }) => {
 
  const handleLinkClick = (title: string) => {
   
    onNavLinkClick(title);
  };
  return (
    <div
      className={` left-0 w-full z-[22] ${className} ${isActive ? 'block' : 'hidden'} absolute shadow-lg p-4 transition-all duration-300 z-[99999] bg-white dark:bg-appModalColor`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="className='fixed z-100 w-full flex justify-center py-3.75 pr-7.5 pl-11">
        <div className={`grid ${submenu.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-4 w-full`}>
          {submenu.map((column, index) => (
            <div key={index}>
              <h3
                className="font-semibold text-Black-700 mb-2 hover:bg-appTheme-opacity-10 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px] font-HeroNewRegular"
                style={{ letterSpacing: '0.3px' }}
              >
                {column.title}
              </h3>
              <ul >
                {column.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={'text-appTextColor font-HeroNewRegular text-base transition-colors duration-200 cursor-pointer mb-2 hover:bg-appTheme-opacity-10 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px] hover:text-appTheme hover:underline'}
                    onClick={()=>handleLinkClick(item)}
                  >
                    {item}
                  </li>
                ))}
                {column.hasMore && (
                  <li onClick={()=>handleLinkClick('View All')} className="text-appTheme hover:bg-appTheme-opacity-10 leading-[38px]  pl-[9px] font-semibold cursor-pointer mb-2 hover:underline">
                    View All
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SubMenu;
