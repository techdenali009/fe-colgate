import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import React from 'react';
import './skinInternational.styles.scss'
const imageUrl = import.meta.env.VITE_SCROLL_PCA_CMS_URL;

const PCAskinInternational: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="mb-6">
        <ProductImage src={`${imageUrl}/51256110-e59e-4407-a149-488123bd05e7.jpg?key=pca-en-us-marketing-header-large`} alt={'Peels'}></ProductImage>
      </div>
          
      <div className="">
        <Heading className='!text-[2.375rem] !leading-10 !font-HeroNewUltraLight'>
        PCA SKIN® around the world
        </Heading>

        <Heading className='!text-[1.25rem] leading-10 !font-bold !font-HeroNewBold justify-center items-center mb-6 !tracking-normal'>
        Expanding our global reach
        </Heading>
        <div className='lg:max-w-3xl max-w-full text-base font-HeroNewRegular mb-6'>
          <Paragraph className='paragraph'>
          In 1998, PCA SKIN® gained partnership with our first international distributor in Canada. We continue to work closely with our Canadian distributorship and share a successful and longstanding partnership. We have since cultivated global partnerships in more than 50 countries on five of the seven continents and continue to grow.
          </Paragraph>

          <Paragraph className='paragraph'>
          To find PCA SKIN® daily care products internationally or learn more about becoming a distributor, email us at <span className='skinInternationalLink'>international@pcaskin.com </span>  or call 480-946-7221.         
          </Paragraph>

        </div>
      </div>

    </div>
  );
};

export default PCAskinInternational;
