import React, { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for hamburger and close button
import { Label } from '@ui/atoms/Label';

const links = [
    {
        title: 'Shop',
        submenu: [
            { title: 'Daily care', items: ['Best Seller', 'Antioxidants', 'Body treatments', 'Broad spectrum SPF', 'Cleansers & toners', 'Eye, neck, lip', 'Masks', 'Moisturizers', 'Retinols', 'Serums', 'Solution sets'] },
            { title: 'Category 2', items: ['Best Seller', 'Peels', 'Peel alternative', 'Retinoid treatments', 'Therapeutic masks', 'Treatment enhancements', 'Backbar tools', 'By skin type', ''] },
            { title: 'By skin type', items: ['Combination', 'Dry', 'Normal', 'Oily', 'Sensitive', ''] },
            { title: 'By skin concern', items: ['Brightening', 'Acne', 'Aging', 'Discoloration', 'Preventative', 'Sensitive Skin'] },
        ],
    },
    {
        title: 'Academy',
        submenu: [
            { title: 'Courses', items: ['Fundamental courses', 'Certification courses', 'Acne','Aging', 'Hyperpigmentation', ''] },
            { title: 'Learn', items: ['Skin concerns', 'Skin types', 'Skin types'] },
            { title: 'Education memberships', items: ['Course 7', 'Course 8', 'Course 9'] }
            
        ],
    },
    {
        title: 'Events',
        submenu: [
            { title: 'Calendar', items: ['Treatment Tuesdays', 'National Seminars'] },

        ],
    },
    {
        title: 'About',
        submenu: [
            { title: 'About', items: ['Our story', 'Culture', 'Our peel legacy'] },
            { title: 'Customer service', items: ['FAQs', 'Returns & exchanges', 'Shipping terms', 'Contact us', 'Subscriptions'] }

        ],
    },
    {
        title: 'Business tools',
        submenu: [{ title: "Marketing materials", items: ['Content Hub'] }],
    },
    {
        title: 'Student',
        submenu: [{ title: "Student Products", items: ['View All'] },
        { title: "Student courses", items: ['Enhancing Student Curriculum', 'Peel Certification for Students'] },
        { title: "Student Store", items: ['FAQ'] }
        ],
    },
];

const NavLinks: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [_,setActiveMenu] = useState<string | null>(null);

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
                       


                    </li>

                ))}
            </ul>


        </div>
    );
};

export default NavLinks;
