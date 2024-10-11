import React from 'react';
import sell from '../../../assets/sell.svg';

interface TopTextProps {
  text: string; // The dynamic text to be rendered in the <p> tag
}

const TopText: React.FC<TopTextProps> = ({ text }) => {
  return (
    <div className='top_header   bg-black text-white flex  h-10 items-center justify-end  tm:justify-center w-full '>
      <img src={sell} alt="sell Logo" className="p-5 mr-5.5" height="30" />
      <p className='text font-sans font-HeroNewLight text-xs tm:mr-[2rem] lg:mr-[3rem] xl:mr-[6rem]'>
        {text}
      </p>
    </div>

  );
}

export default TopText;
