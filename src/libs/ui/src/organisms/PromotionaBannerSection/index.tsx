import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { Icon } from '@ui/atoms/Icons';
import { PromotionBannerText } from '../PromotionaBnnarText';
import arrowIcon from "src/libs/ui/assests/Arrow-right-blue.495910aa.svg";


interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; imageUrl: string }>;
}

export const PromotionBannerSection: React.FC<PromotionBannerSectionProps> = ({ banners }) => {
  const { heading, text, paragraph } = promotionBannerText;
  return (
    <section className="py-12">
      <PromotionBannerText text={text} heading={heading} paragraph={paragraph} />
      <PromotionBannerList banners={banners} />
      <div className="flex justify-center">
        <SecondaryButton 
          onClick={() => console.log('Button clicked!')} 
          className="flex font-HeroNewBold hover:bg-black bg-[url(src\libs\ui\assets\Arrow-right-blue.495910aa.svg)] hover:bg-[url(src\libs\ui\assets\Right-Icon.e85181bb.svg)] items-center justify-center text-blue-400  border border-blue-700 font-bold px-6 py-3 "
        >
          Learn More 
          <div className="ml-2 flex items-center">
            <Icon icon={arrowIcon} className="h-4 w-4" />
          </div>
        </SecondaryButton>
      </div>
    </section>
  );
};
