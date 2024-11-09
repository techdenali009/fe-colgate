import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { PromotionBannerText } from '../PromotionaBnnarText';

import RightArrow from '@ui/atoms/SvgAtoms/RightArrow';

interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; }>;
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
          onClick={() => console.log('Button clicked!')}
          className="flex items-center justify-center font-HeroNewBold hover:underline text-[1rem] !m-0 !text-appTheme border !border-appTheme font-bold px-6 py-2.5 hover:!bg-black hover:!border-transparent group hover:!text-white tracking-[0.3px] leading-6 dark:bg-appdarkcolor dark:hover:!border-appTextColor "
        >
          <span className="flex items-center">Learn More</span>

          <div className="relative w-5 h-5 ml-3 flex items-center mt-1">
            <div  className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0">
              <RightArrow></RightArrow>
            </div>
            <div  className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100">
              <RightArrow fillColor='rgb(var(--app-White))'></RightArrow>

            </div>
          </div>
        </SecondaryButton>
      </div>
    </div>
  );
};
