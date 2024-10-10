import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading/Heading';
import { Paragraph } from '@ui/molecules/Paragraph/Paragraph';
import { StrongText } from '@ui/molecules/StrongText/StrongText';
import React from 'react';


const PeelLegacy: React.FC = () => {
  return (
    <>
      <div className="bg-white max-w-screen-md mx-auto mb-7">
        <ProductImage src={'https://www.pcaskinpro.com/cms/assets/dd4dd9af-13f4-412f-9d4d-f0f7c2da9193.png?key=pca-en-us-marketing-header-large'} alt={'Peels'}></ProductImage>
      </div>
          
      <div className="bg-white max-w-screen-sm mx-auto">
        <Heading>
                  Your Chemical Peel Authority
        </Heading>

        <Heading className='lg:text-base font-black'>
          <StrongText className='lg:text-base text-appTheme'>Revolutionizing professional treatments</StrongText>
        </Heading>

        <Paragraph>
                  Expertly formulated chemical peels are a driving force in helping you achieve your skincare goals. <StrongText>PCA SKIN®</StrongText> is the leader in chemical peels with more than 25 years formulating the best and most innovative professional treatments in the industry. More than one million PCA SKIN peels are performed globally each year.
        </Paragraph>

        <Paragraph>There are a myriad of benefits from regular chemical peel treatments. With formulations for all skin types – even those with sensitive skin – <StrongText>PCA SKIN</StrongText> peels improve skin concerns: acne, hyperpigmentation and aging. These challenging skin concerns are improved with our perfected formulas by increasing the skin’s cell turnover rate, bringing new skin cells to the surface, reducing signs of fine lines, wrinkles, dark spots and clearing breakouts.</Paragraph>
        <Paragraph>
          <StrongText>PCA SKIN</StrongText> was the first company to develop and market the modified and enhanced Jessner’s peel, a solution that combines lactic acid, salicylic acid, kojic acid, citric acid and resorcinol. This revolutionary reformulation provides safer application, a more comfortable treatment and increased skin benefits. The <StrongText>PCA Peel®</StrongText> line of modified and enhanced Jessner’s peels is in medical and aesthetic offices all over the world. <StrongText>PCA SKIN</StrongText> line of peels has since expanded to include TCA and lactic blended peels, retinoid peels and boosters, and chemical peel alternatives.
        </Paragraph>
        <Paragraph>The professional line of treatment products is sold exclusively to <StrongText>PCA SKIN Certified Professionals</StrongText>, ensuring safe and effective application every time.</Paragraph>
      </div>
    </>
  );
};

export default PeelLegacy;
