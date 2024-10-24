import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';
import './ourPeelLegacy.styles.scss'

const PeelLegacy: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="mb-6">
        <ProductImage src={'https://www.pcaskinpro.com/cms/assets/dd4dd9af-13f4-412f-9d4d-f0f7c2da9193.png?key=pca-en-us-marketing-header-large'} alt={'Peels'}></ProductImage>
      </div>
          
      <div className="">
        <Heading className='!text-[2.375rem] !leading-10 !font-HeroNewUltraLight'>
                  Your Chemical Peel Authority
        </Heading>

        <Heading className='!text-[1.25rem] leading-10 !font-bold !font-HeroNewBold justify-center items-center mb-6 !tracking-normal'>
         Revolutionizing professional treatments
        </Heading>
        <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
          <Paragraph className='paragraph'>
                  Expertly formulated chemical peels are a driving force in helping you achieve your skincare goals. <StrongText className='strong'>PCA SKIN<sup>®</sup></StrongText> is the leader in chemical peels with more than 25 years formulating the best and most innovative professional treatments in the industry. More than one million <StrongText className='strong'>PCA SKIN</StrongText> peels are performed globally each year.
          </Paragraph>
          <p>&nbsp;</p>
          <Paragraph className='paragraph'>There are a myriad of benefits from regular chemical peel treatments. With formulations for all skin types – even those with sensitive skin – <StrongText className='strong'>PCA SKIN</StrongText> peels improve skin concerns: acne, hyperpigmentation and aging. These challenging skin concerns are improved with our perfected formulas by increasing the skin’s cell turnover rate, bringing new skin cells to the surface, reducing signs of fine lines, wrinkles, dark spots and clearing breakouts.</Paragraph>
          <p>&nbsp;</p>
          <Paragraph className='paragraph'>
            <StrongText className='strong'>PCA SKIN</StrongText> was the first company to develop and market the modified and enhanced Jessner’s peel, a solution that combines lactic acid, salicylic acid, kojic acid, citric acid and resorcinol. This revolutionary reformulation provides safer application, a more comfortable treatment and increased skin benefits. The <StrongText className='strong'>PCA Peel<sup>®</sup></StrongText> line of modified and enhanced Jessner’s peels is in medical and aesthetic offices all over the world. <StrongText className='strong'>PCA SKIN</StrongText> line of peels has since expanded to include TCA and lactic blended peels, retinoid peels and boosters, and chemical peel alternatives.
          </Paragraph>
          <p>&nbsp;</p>
          <Paragraph className='paragraph'>The professional line of treatment products is sold exclusively to <StrongText className='strong'>PCA SKIN Certified Professionals</StrongText>, ensuring safe and effective application every time.</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default PeelLegacy;
