import Paragraph from '../Paragraph/paragraph';

interface OriginallyPostReviewprops {
  className?: string;

}

const OriginallyPostReview: React.FC<OriginallyPostReviewprops> = ({ className}) => {
  return (
    <div className={`${className} text-base leading-[19.5px] font-sans font-normal text-black flex flex-row w-full my-1.5  `}>
      <Paragraph className="flex items-center rounded border border-gray-400 p-2.5">Originally posted on
        <a href="" className="ml-[5px] text-base leading-[19.5px] font-sans font-normal text-blue-700 underline">Dual Action Redness Relief</a>
      </Paragraph>
    </div>
  )

}

export default OriginallyPostReview;


// import React from 'react';
// import Paragraph from "../Paragraph/paragraph";

// interface OriginallyPostReviewProps {
//   className?: string;
//   linkText: string; // The text that will be displayed for the link
//   href: string; // The URL that the link will navigate to
//   paragraphText?: string; // Optional text before the link, default is "Originally posted on"
// }

// const OriginallyPostReview: React.FC<OriginallyPostReviewProps> = ({
//   className,
//   linkText,
//   href,
//   paragraphText = "Originally posted on", // Default text
// }) => {
//   return (
//     <div className={`${className} text-base leading-[19.5px] font-sans font-normal text-black flex flex-row w-full my-1.5`}>
//       <Paragraph className="flex items-center rounded border border-gray-400 p-2.5">
//         {paragraphText}
//         <a href={href} className="ml-[5px] text-base leading-[19.5px] font-sans font-normal text-blue-700 underline">
//           {linkText}
//         </a>
//       </Paragraph>
//     </div>
//   );
// };

// export default OriginallyPostReview;
