import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { PromotionBannerText } from '../PromotionaBnnarText';
import { AppAssets } from '@utils/constants';


interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; imageUrl: string }>;
}

export const PromotionBannerSection: React.FC<PromotionBannerSectionProps> = ({ banners }) => {
  const { heading, text, paragraph } = promotionBannerText;

  return (
    <div className="lg:py-16 lg:px-16 px-6 py-12">
      <PromotionBannerText text={text} heading={heading} paragraph={paragraph} />
      <PromotionBannerList banners={banners} />
      <div className="flex justify-center lg:pt-4 ">
        <SecondaryButton
          onClick={() => console.log('Button clicked!')}
          className="flex font-HeroNewBold  hover:underline  items-center justify-center text-[#125ce0] border border-[#125ee0] font-bold px-6 py-2.5 hover:!bg-black hover:border-transparent group" 
        >
          Learn More
          <div className="ml-2 flex items-center relative w-4 h-4">

            <img
              src={`${AppAssets}/Arrow-right-blue.495910aa.svg`}
              alt="Arrow icon"
              className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0" 
            />

            <img
              src={`${AppAssets}/Arrow-right.8d33ac71.svg`}
              alt="Arrow hover icon"
              className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100" 
            />
          </div>
        </SecondaryButton>

      </div>
    </div>
  );
};
