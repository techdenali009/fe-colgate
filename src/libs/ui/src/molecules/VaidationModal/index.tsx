import React from 'react';


const ValidationModal: React.FC = ({ }) => {
  return (
    <div data-popover id="popover-default" role="tooltip" className="w-[645px] text-black bg-slate-100 absolute z-10 inline-block w-auto text-sm transition-opacity duration-300  border border-gray-200 shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
      <div className="px-3 py-2 bg-slate-100 border-b text-center border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-bold text-xs text-gray-900  dark:text-white">Password Strength : </h3>
      </div>
      <div className="px-7 py-2 text-xs text-center">
        <p>Password must consist atleast 8 characters and 4 of the following. An uppercase letter, a lowercase letter, a number, a special symbol</p>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />

    </div>

  );
};


export default ValidationModal;
