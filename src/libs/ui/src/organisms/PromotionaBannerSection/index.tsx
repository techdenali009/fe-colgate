import React from 'react';
import { promotionBannerText } from '@utils/banner';
import { PromotionBannerList } from '../PromotionBannerList';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { PromotionBannerText } from '../PromotionaBnnarText';

interface PromotionBannerSectionProps {
  banners: Array<{ heading: string; subtext: string; imageUrl: string }>;
}

export const PromotionBannerSection: React.FC<PromotionBannerSectionProps> = ({ banners }) => {
  const {heading, text,paragraph} = promotionBannerText[0];
  return (
    <section className="py-12">
      <PromotionBannerText
        text={text}
        heading={heading}
        paragraph={paragraph}
      />
      <PromotionBannerList banners={banners} />
      <div className="flex justify-center">
        <SecondaryButton 
          onClick={() => alert('Button clicked!')} 
          className="flex items-center border-2 border-blue-700"
        >
          Learn More
          <svg className="h-8 w-8 text-blue-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="15" y1="16" x2="19" y2="12" />
            <line x1="15" y1="8" x2="19" y2="12" />
          </svg>
        </SecondaryButton>
      </div>
    </section>
  );
};
