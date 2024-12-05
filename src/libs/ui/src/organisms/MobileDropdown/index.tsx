import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { profileMenuItems } from '@ui/molecules/AccountMenu';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleItemClick = (item: { title: any; href?: string; icon?: string; }) => {
    setSelectedItem(item.title); // Set the selected item
    setIsOpen(false); // Close the dropdown when an item is clicked
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-[9rem] bg-[#f2f2f2] border border-black text-gray-700 hover:bg-gray-50"
      >
        {/* Display the selected item text or default "Orders" */}
        <span className="text-xl font-HeroNewExtraBold">
          {selectedItem ? selectedItem : 'Orders'}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-0 w-full mt-1  font-HeroNewExtraBold bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {profileMenuItems.map((item, index) => (
            <a
              key={item.title}
              onClick={() => handleItemClick(item)} // Close dropdown on click
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                ${index === 0 ? 'rounded-t-lg' : ''} 
                ${selectedItem === item.title ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
