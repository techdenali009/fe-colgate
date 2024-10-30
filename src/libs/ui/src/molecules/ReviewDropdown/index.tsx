import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';
import ArrowIcon from '../ReviewArrowIcon';

interface DropdownProps {
  label: string;
  items: string[]; // Expect items in the format like "1 Star", "2 Stars", etc.
  selectedItems: string[];
  onItemClick: (item: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  labelclassName?: string;
  selectdropclassName?: string;
  FaCheckCircleclassName?: string;
  IoMdAddCircleOutlineclassName?: string;
  isRatingDropdown?: boolean; // New prop to indicate if this is a rating dropdown
}

const ReviewDropdown: React.FC<DropdownProps> = ({
  label,
  items,
  selectedItems,
  onItemClick,
  isOpen,
  setIsOpen,
  className,
  labelclassName,
  selectdropclassName,
  FaCheckCircleclassName,
  IoMdAddCircleOutlineclassName,
  isRatingDropdown = false, // Default to false if not provided
}) => {
  return (
    <div
      className={`relative group w-[139px] ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`rounded px-4 py-2.5 cursor-pointer flex flex-col border-solid border-[rgba(91,89,89,0.6)] border-[1px] ${className}`}>
        <div className={`flex items-center justify-between ${labelclassName}`}>
          <span className="text-black">{label}</span>
          <div className='mr-[-11px]'>
            <ArrowIcon isOpen={isOpen} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute  z-10 bg-white rounded-lg shadow-xl border border-gray-300 ">
          {items.map((item, index) => {
            // Extract the star count from the item string
            const starCount = parseInt(item, 10); // Assume item is in format "1 Star" or "2 Stars"
            const displayText = isRatingDropdown && starCount === 1 ? 'star' : 'stars'; // Determine if it's singular or plural

            return (
              <div
                key={index}
                className={`flex items-center hover:bg-[#2f42d2] hover:text-white cursor-pointer p-2 w-[145px] font-SansSerif ${selectdropclassName}`}
                onMouseDown={() => onItemClick(item)}
              >
                {selectedItems.includes(item) ? (
                  <FaCheckCircle className={`mr-2 w-5 h-5 ${FaCheckCircleclassName}`} /> 
                ) : (
                  <IoMdAddCircleOutline className={`mr-2 w-[22px] h-[22px] ${IoMdAddCircleOutlineclassName}`} />
                )}
                {/* Display star or stars based on count */}
                {isRatingDropdown ? `${starCount} ${displayText}` : item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReviewDropdown;
