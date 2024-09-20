import React, { useState } from 'react';
import { HeaderLabel } from '@ui/molecules/HeaderLabel/index';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for hamburger and close button

const NavLinks: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const links = ['Shop', 'Academy', 'Events', 'About', 'Business tools', 'Student'];

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
                {links.map((item) => (
                    <li
                        key={item}
                        className='relative group flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-[rgba(238,244,255,1)] group-hover:scale-110 transition-transform duration-300'
                    >
                        <HeaderLabel
                            className='relative z-10 text-black group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4 transition-colors duration-300 font-normal font-sans'
                        >
                            {item}
                        </HeaderLabel>
                    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;
