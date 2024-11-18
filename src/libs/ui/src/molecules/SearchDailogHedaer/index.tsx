import React from 'react';

import clearIcon from '../../../assets/clearIcon.svg';
import { HeaderLogo } from '@ui/atoms/HeaderLogo';
import { Image } from '@ui/atoms/Image';
import SearchIcon from '@ui/atoms/SvgAtoms/SearchIcon';
import ReviewCloseSearch from '@ui/atoms/SvgAtoms/ReviewCloseSearch';

interface ModalHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleClear: () => void;
    handleSearch: () => void;
    onClose: () => void;
}

const SearchModalHeader: React.FC<ModalHeaderProps> = ({ searchQuery, setSearchQuery, handleClear, handleSearch, onClose }) => (
  <div className="p-4 flex items-center justify-between">
    <div className="tm:hidden lg:ml-[80px] ml-10">
      <HeaderLogo />
    </div>
    <div className="relative flex-1 pb-[35px] tm:pb-0 lg:ml-12">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="lg:w-[35rem] xl:w-[53rem] border-b border-appTextColor focus:outline-none focus:border-b focus:border-black border-t-0 border-l-0 border-r-0 w-full py-2 px-4 font-HeroNewRegular tm:w-[90%] dark:bg-appModalColor"
        placeholder="Search..."
      />

      {searchQuery && (
        <span className="absolute top-2 cursor-pointer" onClick={handleClear}>
          <Image src={clearIcon} alt="Clear Search" className="relative right-[4rem] top-[0.2rem] tm:!right-[3rem]" />
        </span>
      )}
      <span className="absolute top-2 cursor-pointer tm:unset" onClick={handleSearch}>
        {/* <Image src={searchIcon} alt="searchIcon" className="relative right-[1.75rem]" /> */}
        <SearchIcon></SearchIcon>
      </span>
    </div>
    <span
      className="lg:mr-10 cursor-pointer hover:bg-[#f2f2f2] lg:rounded-[13rem] pt-[15px] pl-[15px] pr-0 pb-0 "
      onClick={onClose}
    >
      <div className="tm:grid tm:relative tm:pr-0 relative left:[3px] top: [2px] w-[40px] h-[40px]">
        <ReviewCloseSearch></ReviewCloseSearch>  
      </div> 
    </span>
        
  </div>
);

export default SearchModalHeader;
