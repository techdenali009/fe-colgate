import React, { ReactNode, useState, useEffect } from 'react';

import CloseSearch from '../../../assets/CloseSearch.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import clearIcon from '../../../assets/clearIcon.svg'; // Add your clear (X) icon here
import './SearchPopOver.scss';
import { HeaderLogo } from '../HeaderLogo';

interface ModalProps {
  isOpen: boolean; // Indicates whether the modal is open or not
  onClose: () => void; // Function to close the modal
  children?: ReactNode; // Optional content to be displayed inside the modal
  className?: string; // Optional className for additional styling
}

const SearchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setRecentSearches((prevSearches) => [searchQuery, ...prevSearches.slice(0, 4)]);
      setSearchQuery('');
    }
  };

  const handleClear = () => {
    setSearchQuery(''); // Clear the input field
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // Timeout to allow slide-out animation
  };

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      // Simulate loading delay
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false); // Simulate loading finished
      }, 1000); // Adjust time as necessary
      return () => clearTimeout(timer); // Clean up timeout
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={`fixed !ml-0 h-[360px] inset-0 flex items-start justify-center z-50 overflow-y-scroll ${closing ? 'animate-slideOut' : 'animate-slideIn'}`}>
          {/* Modal background */}
          <div className="absolute inset-0" onClick={handleClose}></div>

          {/* Modal content (full-width) with scrollable content */}
          <div className={`bg-white w-full h-[24rem] max-h-[119vh] tm:max-h-[114vh] tm:h-[55rem] shadow-lg transform duration-300 ${closing ? 'slide-out' : 'slide-in'}`}>
            {/* Modal header with logo, search bar, and back arrow */}
            <div className="p-4 flex items-center justify-between">
              <div className="tm:hidden">
                <HeaderLogo />
              </div>
              <div className="relative flex-1 pb-[35px] tm:pb-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="lg:w-[45rem] xl:w-[53rem] border-b border-black focus:outline-none focus:border-b focus:border-black border-t-0 border-l-0 border-r-0 w-full py-2 px-4 font-HeroNewRegular tm:w-[90%]"
                  placeholder="Search..."
                />

                {/* Show X button only when there is text */}
                {searchQuery && (
                  <span className="absolute top-2 cursor-pointer" onClick={handleClear}>
                    <img src={clearIcon} alt="Clear Search" className="relative right-[4rem] top-[0.2rem] tm:!right-[3rem]" />
                  </span>
                )}
                <span className="absolute top-2 cursor-pointer tm:unset" onClick={handleSearch}>
                  <img src={searchIcon} alt="searchIcon" className="relative right-[1.75rem]" />
                </span>
              </div>
              <span
                className="lg:mr-10 cursor-pointer hover:bg-[#f2f2f2] lg:rounded-[13rem] pt-[15px] pl-[15px] pr-0 pb-0"
                onClick={handleClose}
              >
                <img
                  src={CloseSearch}
                  alt="Close Search"
                  className="tm:grid tm:relative tm:pr-0 relative "
                />
              </span>
            </div>

            {/* Scrollable content area with grid columns */}
            <div className="overflow-y-auto h-full pt-0 p-4">
              <div className="tm:contents absolute pr-8 mr-0 ml-[19rem] gap-[18rem] grid grid-cols-2 gap-8">
                {/* Popular Searches */}
                <div>
                  <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Popular Searches</h3>
                  {loading ? (
                    <div className="animate-pulse space-y-2">
                      <div className="h-6 bg-gray-300 rounded w-3/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/9"></div>
                    </div>
                  ) : (
                    <ul className="tracking-[0.3px] space-y-2 text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4">
                      <li>peels</li>
                      <li>acne</li>
                      <li>cleanser</li>
                      <li>neck</li>
                    </ul>
                  )}
                </div>

                {/* Recent Searches */}
                <div>
                  {loading ? (
                    <div className="animate-pulse space-y-2">
                      <div className="h-6 bg-gray-300 rounded w-4/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-4/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-4/9"></div>
                      <div className="h-6 bg-gray-300 rounded w-4/9"></div>
                    </div>
                  ) : (
                    <>
                      {recentSearches.length > 0 ? (
                        <>
                          <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Recent Searches</h3>
                          <ul className="space-y-2 tracking-[0.3px] text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4">
                            {recentSearches.map((search, index) => <li key={index}>{search}</li>)}
                          </ul>
                        </>
                      ) : (
                        <p className='space-y-2 text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4'>No recent searches</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
