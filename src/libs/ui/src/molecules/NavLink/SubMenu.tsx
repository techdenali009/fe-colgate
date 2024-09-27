import React from 'react';

interface SubMenuProps {
    isActive: boolean;
    submenu: Array<{
        hasMore: any; title: string; items: string[]
    }>;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ isActive, submenu, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div
            className={` left-0 w-full z-[22] ${isActive ? 'block' : 'hidden'} shadow-lg p-4 transition-all duration-300 z-[99999] bg-white`}
            // Adjust top to match your nav bar height or dynamically calculate it
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex justify-center py-3.75 pr-7.5 pl-11">
                <div className={`grid ${submenu.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-4 w-full`}>
                    {submenu.map((column, index) => (
                        <div key={index}>
                            <h3
                                className="font-semibold text-gray-700 mb-2 hover:bg-blue-50 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px]"
                                style={{ fontFamily: 'sans-serif', letterSpacing: '0.3px' }}
                            >
                                {column.title}
                            </h3>
                            <ul>
                                {column.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-gray-600 text-base font-serif transition-colors duration-200 cursor-pointer mb-2 hover:bg-blue-50 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px] hover:text-blue-600 hover:underline`}
                                        style={{ fontFamily: 'sans-serif' }}
                                    >
                                        {item}
                                        {/* <span className={item === 'View All' ? 'text-blue-600 font-semibold' : ''}>
                                            {item}
                                        </span> */}
                                    </li>
                                ))}
                                {column.hasMore && (
                                    <li className="text-blue-600  pl-[9px] font-semibold cursor-pointer mb-2 hover:underline">
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
