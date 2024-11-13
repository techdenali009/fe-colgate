import Paragraph from '../Paragraph/paragraph';

interface OriginallyPostReviewprops {
  className?: string;
}

const OriginallyPostReview: React.FC<OriginallyPostReviewprops> = ({ className}) => {
  return (
    <div className={`${className} text-base leading-[19.5px] font-SansSerif font-normal text-black flex flex-row w-full my-1.5  `}>
      <Paragraph className="flex items-center rounded border  border-gray-400 p-2.5 2xs:!text-[13px] 2xs:font-SansSerif">Originally posted on
        <a href="" className="ml-[5px] text-base leading-[19.5px]  font-normal text-appTheme underline">Dual Action Redness Relief</a>
      </Paragraph>
    </div>
  )

}

export default OriginallyPostReview;


