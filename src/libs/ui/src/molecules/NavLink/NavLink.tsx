import React, { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for hamburger and close button
import { Label } from '@ui/atoms/Label';
import { links } from '@utils/NavLinksConstants';


const NavLinks: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu,setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (title: string) => {
        setActiveMenu(title);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                className="lg:hidden p-2 text-black hover:text-blue-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {/* Navigation Menu */}
            <ul
                className={`fixed top-0 left-0 w-full bg-white lg:static lg:flex lg:gap-[0.6rem] text-nowrap lg:p-0 p-4 transform lg:transform-none transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {links.map((link) => (
                    <li
                        key={link.title}
                        className="relative group flex items-center justify-center pt-3 pb-3 pl-4 pr-4 cursor-pointer hover:bg-[rgba(238,244,255,1)] transition-transform duration-300"
                        onMouseEnter={() => handleMouseEnter(link.title)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Main navigation label */}
                        <Label
                            className='font-bold relative z-10 text-black group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4 transition-colors duration-300 font-normal font-sans'
                        >
                            {link.title}
                        </Label>

                        {/* Submenu */}

                        {/* Submenu */}

                        <div
                            className={`fixed p-8 left-0 w-full top-[103px] bg-white z-[22] ${activeMenu === link.title ? 'block' : 'hidden'} shadow-lg p-4`}
                            onMouseEnter={() => handleMouseEnter(link.title)} // Keep submenu open when hovering
                            onMouseLeave={handleMouseLeave} // Close submenu when leaving
                        >
                            <div className="flex justify-center py-3.75 pr-7.5 pl-11">
                                <div className={`grid ${link.submenu.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-4 w-full`}>
                                    {link.submenu.map((column, index) => (
                                        <div key={index}>
                                            <h3 className="font-semibold text-gray-700 mb-2 hover:bg-blue-50 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px]" style={{ fontFamily: 'sans-serif', letterSpacing: '0.3px' }}>
                                                {column.title}
                                            </h3>
                                            <ul>
                                                {column.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className={`text-gray-600 text-base font-serif transition-colors duration-200 cursor-pointer mb-2 hover:bg-blue-50 pb-0 pt-0 h-[35px] leading-[38px] pl-[9px] hover:text-blue-600 hover:underline`}
                                                        style={{ fontFamily: 'sans-serif' }}
                                                    >
                                                        <span className={item === 'View All' ? 'text-blue-600 font-semibold' : ''}>
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>


                    </li>

                ))}
            </ul>


        </div>

    );
};

export default NavLinks;
