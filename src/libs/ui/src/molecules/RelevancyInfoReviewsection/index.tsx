import React from 'react';
import CustomPopover from '../CustomPopover';
import './CustomPopover.scss';

const RelevancyInfo: React.FC = () => {
  return (
    <CustomPopover
      trigger={
        <div className="flex items-center cursor-pointer lg:float-right lg:mr-[0px] lg:!mb-3 2xs:justify-end 2xs:mb-0 !2xs:-mr-5 md:mr-[321px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="#3D76BF" fillRule="evenodd">
              <g fill="#3D76BF" fillRule="nonzero">
                <path d="M8.025 15.767a7.745 7.745 0 117.742-7.742 7.753 7.753 0 01-7.742 7.742zm0-14.363a6.622 6.622 0 10-.005 13.243 6.622 6.622 0 00.005-13.243z"></path>
                <circle cx="8.025" cy="5.387" r="1"></circle>
                <path d="M7.326 6.975h1.392v4.584H7.326z"></path>
              </g>
            </g>
          </svg>
          <p className=" 2xs:ml-[5px] text-appTheme text-xs ">Relevancy Info</p>
        </div>
      }
      content={
        <div className="text-[12px] popover-content">
          <strong>Relevancy sort:</strong> Puts the best reviews at the top. We look at things like helpfulness votes, latest reviews, pictures, and other traits that readers look for in their reviews.
        </div>
      }
      positions={['bottom']}
      align="center"
    />
  );
};

export default RelevancyInfo;
