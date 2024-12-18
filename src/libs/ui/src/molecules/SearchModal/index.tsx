import React, { ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import ModalHeader from '../SearchDailogHedaer';
import ModalBackground from '../SearchDailogContent';
import SearchResults from '../SearchDailogModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
}

const SearchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(''); // Store user input
  const [loading, setLoading] = useState(true); // Loading state for the search
  const navigate = useNavigate(); // For navigation

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setRecentSearches((prevSearches) => [searchQuery, ...prevSearches.slice(0, 4)]);
      setSearchQuery('');
      navigate(`/products?searchkeyword=${searchQuery}`); // Redirect to search results page
    }
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false); // Simulate loading finished
      }, 1000); // Adjust this as per your need
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed h-[360px] inset-0 flex items-start justify-center z-50 overflow-y-scroll">
          <ModalBackground onClick={onClose} />
          <div className="bg-white w-full h-[24rem] max-h-[119vh] tm:max-h-[114vh] shadow-lg transform duration-300 dark:bg-appModalColor">
            <ModalHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleClear={handleClear}
              handleSearch={handleSearch}
              onClose={onClose}
            />
            <SearchResults loading={loading} recentSearches={recentSearches} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
