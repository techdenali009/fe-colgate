import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { PromotionBannerText } from '../PromotionaBnnarText';
import arrowIcon from 'src/libs/ui/assets/Arrow-right-blue.495910aa.svg';
import hoverArrowIcon from 'src/libs/ui/assets/Arrow-right.8d33ac71.svg';

interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; imageUrl: string }>;
}

export const PromotionBannerSection: React.FC<PromotionBannerSectionProps> = ({
  banners,
}) => {
  const { heading, text, paragraph } = promotionBannerText;

  return (
    <div className="lg:py-16 lg:px-16 px-6 py-12">
      <PromotionBannerText
        text={text}
        heading={heading}
        paragraph={paragraph}
      />
      <PromotionBannerList banners={banners} />
      <div className="flex justify-center lg:pt-4">
        <SecondaryButton
          onClick={() => console.log("Button clicked!")}
          className="flex items-center justify-center font-HeroNewBold hover:underline text-[1rem] !m-0 !text-[#125ce0] border !border-[#125ee0] font-bold px-6 py-2.5 hover:!bg-black hover:!border-transparent group hover:!text-white tracking-[0.3px] leading-6"
        >
          <span className="flex items-center">Learn More</span>

          <div className="relative w-5 h-5 ml-3 flex items-center mt-1">
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0"
            />
            <img
              src={hoverArrowIcon}
              alt="Arrow hover icon"
              className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>
        </SecondaryButton>
      </div>
    </div>
  );
};
