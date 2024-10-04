import React from 'react';
import CloseSearch from '../../../assets/CloseSearch.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import clearIcon from '../../../assets/clearIcon.svg';
import { HeaderLogo } from '@ui/atoms/HeaderLogo';
import { Image } from '@ui/atoms/Image';

interface ModalHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleClear: () => void;
    handleSearch: () => void;
    onClose: () => void;
}

const SearchModalHeader: React.FC<ModalHeaderProps> = ({ searchQuery, setSearchQuery, handleClear, handleSearch, onClose }) => (
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

      {searchQuery && (
        <span className="absolute top-2 cursor-pointer" onClick={handleClear}>
          <Image src={clearIcon} alt="Clear Search" className="relative right-[4rem] top-[0.2rem] tm:!right-[3rem]" />
        </span>
      )}
      <span className="absolute top-2 cursor-pointer tm:unset" onClick={handleSearch}>
        <Image src={searchIcon} alt="searchIcon" className="relative right-[1.75rem]" />
      </span>
    </div>
    <span
      className="lg:mr-10 cursor-pointer hover:bg-[#f2f2f2] lg:rounded-[13rem] pt-[15px] pl-[15px] pr-0 pb-0"
      onClick={onClose}
    >
      <Image
        src={CloseSearch}
        alt="Close Search"
        className="tm:grid tm:relative tm:pr-0 relative"
      />
            
    </span>
        
  </div>
);

export default SearchModalHeader;
