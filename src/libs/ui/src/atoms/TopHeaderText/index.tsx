import React from 'react';
import sell from "../../../assests/sell.svg";
// Define the props interface for TopText component
interface TopTextProps {
  text: string; // The dynamic text to be rendered in the <p> tag
}

// Use React.FC with TopTextProps to type the functional component
const TopText: React.FC<TopTextProps> = ({ text }) => {
  return (
    <div className='bg-black text-white flex w-full h-10 items-center justify-end w-full  lg:w-[100%] w-full '>
      <img src={sell} alt="sell Logo" className="p-5 mr-5.5" height="30" />
      <p className='text font-sans text-[13px] mr-20 lg:mr-[6rem] '>
        {text}
      </p>
    </div>

  );
}

export default TopText;
