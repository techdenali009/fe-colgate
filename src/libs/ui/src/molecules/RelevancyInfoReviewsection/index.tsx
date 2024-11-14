import React from 'react';
import CustomPopover from '../CustomPopover';
import './CustomPopover.scss';
import RelevantInfo from '@ui/atoms/SvgAtoms/RelevantInfo';

const RelevancyInfo: React.FC = () => {
  return (
    <CustomPopover
      trigger={
        <div className="flex items-center cursor-pointer lg:float-right lg:mr-[0px] lg:!mb-3 2xs:justify-end 2xs:mb-0 !2xs:-mr-5 md:mr-[321px] ">
          <RelevantInfo></RelevantInfo> 
          <p className=" 2xs:ml-[5px] text-appTheme text-xs ">Relevancy Info</p>
        </div>
      }
      content={
        <div className='popover'>
          <div className="text-[12px]  popover-content ">
            <strong>Relevancy sort:</strong> Puts the best reviews at the top. We look at things like helpfulness votes, latest reviews, pictures, and other traits that readers look for in their reviews.
          </div>
        </div>
      }
      positions={['bottom']}
      align="end"
    />
  );
};

export default RelevancyInfo;
