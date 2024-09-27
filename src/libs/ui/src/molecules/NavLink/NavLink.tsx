// NavLinks.tsx
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Label } from '@ui/atoms/Label';
import { links } from '@utils/NavLinksConstants';


interface NavLinksProps {
    onNavLinkActive: (isActive: boolean, submenuData: any) => void; // Updated prop type
}

const NavLinks: React.FC<NavLinksProps> = ({ onNavLinkActive }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (title: string, submenu: any) => {
        setActiveMenu(title);
        onNavLinkActive(true, submenu); // Notify the parent with submenu data
    };

    // const handleMouseLeave = () => {
    //     setActiveMenu(null);
    //     onNavLinkActive(true, submenu); // Notify the parent that no link is active
    // };

    return (
        <div className="relative">
            <button
                className="lg:hidden p-2 text-black hover:text-blue-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            <ul
                className={`fixed top-0 left-0 w-full bg-white lg:static lg:flex lg:gap-[0.6rem] text-nowrap lg:p-0 p-4 transform lg:transform-none transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {links.map((link) => (
                    <li
                        key={link.title}
                        className="relative group flex items-center justify-center pt-3 pb-3 pl-4 pr-4 cursor-pointer hover:bg-[rgba(238,244,255,1)] transition-transform duration-300"
                        onMouseEnter={() => handleMouseEnter(link.title, link.submenu)} // Pass submenu data

                    >
                        <Label className=" font-bold relative z-10 text-black group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4 transition-colors duration-300 font-normal font-sans">
                            {link.title}
                        </Label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;
