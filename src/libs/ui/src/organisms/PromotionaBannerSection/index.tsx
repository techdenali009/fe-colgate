import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { Icon } from '@ui/atoms/Icons';
import { PromotionBannerText } from '../PromotionaBnnarText';
import arrowIcon from 'src/libs/ui/assests/Arrow-right-blue.495910aa.svg';


interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; imageUrl: string }>;
}

export const PromotionBannerSection: React.FC<PromotionBannerSectionProps> = ({ banners }) => {
  const { heading, text, paragraph } = promotionBannerText;
  return (
    <div className="py-16 px-16">
      <PromotionBannerText text={text} heading={heading} paragraph={paragraph} />
      <PromotionBannerList banners={banners} />
      <div className="flex justify-center pt-10 lg:pt-4 ">
        <SecondaryButton 
          onClick={() => console.log('Button clicked!')} 
          className="flex font-HeroNewBold  hover:border-transparent hover:!bg-black bg-[url(src\libs\ui\assests\Arrow-right-blue.495910aa.svg)] hover:bg-[url(src\libs\ui\assests\Right-Icon.e85181bb.svg)] items-center justify-center text-blue-400 border border-blue-500 font-bold px-6 py-2.5 "
        >
              Learn More 
          <div className="ml-2 flex items-center">
            <Icon icon={arrowIcon} className="h-4 w-4" />
          </div>
        </SecondaryButton>
      </div>
    </div >
  );
};
