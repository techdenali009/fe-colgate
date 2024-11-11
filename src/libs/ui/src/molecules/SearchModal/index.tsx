import React, { ReactNode, useState, useEffect } from 'react';
import ModalHeader from '../SearchDailogHedaer';
import ModalBackground from '../SearchDailogContent';
import SearchResults from '../SearchDailogModal';

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
          <ModalBackground onClick={handleClose} />
          <div className={`bg-white w-full h-[24rem] max-h-[119vh] tm:max-h-[114vh] tm:h-[55rem] shadow-lg transform duration-300 dark:bg-appModalColor ${closing ? 'slide-out' : 'slide-in'}`}>
            <ModalHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleClear={handleClear}
              handleSearch={handleSearch}
              onClose={handleClose}
            />
            <SearchResults loading={loading} recentSearches={recentSearches} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
