
import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';
import ReviewArrowIcon from '@ui/atoms/SvgAtoms/ReviewArrowIcon';
import SortReviewTick from '@ui/atoms/SvgAtoms/SortReviewTick';

interface DropdownProps {
  label: string;
  items: string[];
  selectedItems: string[];
  onItemClick: (item: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  labelclassName?: string;
  selectdropclassName?: string;
  isOpenArrowclassName?: string;
  FaCheckCircleclassName?: string;
  IoMdAddCircleOutlineclassName?: string;
  sortdropclassName?: string;
  dropclassName?: string;
  isRatingDropdown?: boolean;
}

const ReviewDropdown: React.FC<DropdownProps> = ({
  label,
  items,
  selectedItems,
  onItemClick,
  isOpen,
  setIsOpen,
  className,
  isOpenArrowclassName,
  labelclassName,
  selectdropclassName,
  FaCheckCircleclassName,
  IoMdAddCircleOutlineclassName,
  sortdropclassName,
  dropclassName,
  isRatingDropdown = false,
}) => {
  const [isSortTickVisible, setIsSortTickVisible] = useState(false); // Manage visibility state

  return (
    <div
      className={`relative group w-[139px] ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`rounded px-4 py-2.5 cursor-pointer flex flex-col border-solid border-[rgba(91,89,89,0.6)] border-[1px] ${className}`}
      >
        <div className={`flex items-center justify-between ${labelclassName}`}>
          <span className="text-black">{label}</span>
          <div className={`lg:mr-[-11px] ${isOpenArrowclassName}`}>
            <ReviewArrowIcon isOpen={isOpen} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 bg-white rounded-lg shadow-xl border border-gray-300 ${selectdropclassName}`}
        >
          {items.map((item, index) => {
            const starCount = parseInt(item, 10);
            const displayText =
              isRatingDropdown && starCount === 1 ? 'star' : 'stars';

            return (
              <div
                key={index}
                className={`flex items-center cursor-pointer p-2 font-SansSerif ${dropclassName} 
                            hover:!text-white 
                            hover:bg-[#ade1f5] 
                            sm:hover:bg-[#ade1f5] 
                            lg:hover:bg-appTheme`}
                onMouseDown={() => onItemClick(item)}
                onMouseEnter={() => setIsSortTickVisible(true)} // Show tick on hover
                onMouseLeave={() => setIsSortTickVisible(false)} // Hide tick on leave
              >
                {selectedItems.includes(item) ? (
                  <>
                    {isRatingDropdown ? (
                      <FaCheckCircle
                        className={`mr-2 w-5 h-5 text-formFieldBorder  ${FaCheckCircleclassName}`}
                      />
                    ) : (

                      <div className={`${sortdropclassName} relative`}>
                        {isSortTickVisible && (
                          <div className="absolute right-[5px] -top-[6px]">
                            <SortReviewTick />
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <IoMdAddCircleOutline
                    className={`mr-2 w-[22px] h-[22px] text-formFieldBorder   ${IoMdAddCircleOutlineclassName}`}
                  />
                )}
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
