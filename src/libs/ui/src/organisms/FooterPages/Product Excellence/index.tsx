import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import React from 'react';
import './productExcellence.styles.scss'
const imageUrl = import.meta.env.VITE_SCROLL_PCA_CMS_URL;

const ProductExcellence: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="mb-6">
        <ProductImage src={`${imageUrl}/846329ca-d3ee-4e69-8e8c-3d558404b6aa.jpg?key=pca-en-us-marketing-header-large`} alt={'Peels'}></ProductImage>
      </div>

      <div className="">
        <Heading className='lg:!text-[2.375rem] !leading-10 !font-HeroNewUltraLight 2xs:text-[1.75rem]'>
          Product Excellence
        </Heading>

        <Heading className='!text-[1.25rem] leading-10 !font-bold !font-HeroNewBold justify-center items-center mb-6 !tracking-normal'>
          Trusted for efficacy
        </Heading>
        <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
          <Paragraph className='excellenceParagraph'>
            PCA SKIN<sup>®</sup>, the originator of advanced blended professional peels, has been and continues to be a trusted industry leader in the development of effective treatments for professional use and products for patient use for over 30 years. Our vision is to improve people’s lives; we do so on a daily basis by partnering with physicians and clinicians to provide a proven process of aesthetic science for healthy, beautiful skin. We set the bar high when it comes to skin care, having some of the highest standards in the industry for quality and efficacy.          
          </Paragraph>
        </div>
      </div>
      <PrimaryButton className='font-HeroNewBold text-center font-bold leading-6 tracking-[0.3px] py-[0.625rem] px-6 bg-appTheme mb-6 text-white hover:!underline hover:!bg-appTheme'>Contact Us</PrimaryButton>

    </div>
  );
};

export default ProductExcellence;
