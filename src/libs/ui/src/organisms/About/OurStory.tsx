import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading/Heading';
import { Paragraph } from '@ui/molecules/Paragraph/Paragraph';
import { StrongText } from '@ui/molecules/StrongText/StrongText';
import React from 'react';


const OurStory: React.FC = () => {
  return (
    <>
      <div className="bg-white max-w-screen-md mx-auto mb-7">
        <ProductImage src={'https://www.pcaskinpro.com/cms/assets/266fbe2f-f27b-494a-8901-d4c371ce1eed.png?key=pca-en-us-marketing-header-large'} alt={'Peels'}></ProductImage>
      </div>
          
      <div className="bg-white max-w-screen-md mx-auto">
        <Heading>
              Our journey of improving people’s lives
        </Heading>

        <Heading className='lg:text-base font-black'>
          <StrongText className='lg:text-base text-blue-600'>Improving skin, improving lives since 1990</StrongText>
        </Heading>

        <StrongText>About PCA SKIN</StrongText>

        <Paragraph className='mt-7 text-xs'>For over 30 years, <StrongText>PCA SKIN</StrongText> has pioneered and perfected the science of skin health. We are founded in  the belief that delivering transformative solutions backed by science can improve not only skin, but lives also. PCA SKIN continues to be a trusted innovator in the development of highly effective professional treatments and daily care products that offer individualized solutions to deliver dramatic, visible results. </Paragraph>
        <Paragraph  className='text-xs'>Whether experienced through a licensed skin health professional trained and certified by <StrongText>PCA SKIN</StrongText>, or as a part of daily care routine at home, we know skin health is personal, so we put our best into helping customers feel their best.</Paragraph>
        <StrongText>Innovators in healthy skin</StrongText>
        <Paragraph className='text-xs mt-7'><StrongText>PCA SKIN</StrongText> was founded in 1990 by aesthetician Margaret Ancira and developed by dermatologist Jennifer Linder M.D. Since our founding, professional partnerships have been an integral part of our identity. Our formulas are researched, designed, and executed by our expert Research and Development team to address the evolving needs of the skin health industry and patients. </Paragraph>
        <Paragraph className='text-xs'>Each of your clients is unique, so our products are, too. Through extensive research and development, we can provide clients with a wide array of professional and daily care solutions to choose from – this empowers PCA SKIN professionals to customize and build the right treatment plan for each and every individual. </Paragraph>
        <Paragraph className='text-xs'><StrongText>PCA SKIN</StrongText>is the leader in peel innovation with more than 30 years formulating the best and most innovative professional treatments in the industry. More than one million <StrongText>PCA SKIN</StrongText> peels are performed around the world each year. With formulations for all skin types – even those with sensitive skin – PCA SKIN peels are clinically proven to improve acne, hyperpigmentation, and aging.</Paragraph>
        <Paragraph className='text-xs'>As the first company to develop and market the modified and enhanced Jessner’s peel (a solution that combines Lactic Acid, Salicylic Acid, Kojic Acid, Citric Acid, and Resorcinol), we started a revolution for a safer and more comfortable treatment with increased skin benefits. Today, our line of peels have expanded to include TCA and lactic blended peels, retinoid peels and boosters, as well as professional peel alternatives. The professional line of treatment products is sold exclusively to <StrongText>PCA SKIN Certified Professionals</StrongText></Paragraph>
        <StrongText>Cultivating partnerships with professionals </StrongText>
        <Paragraph className='text-xs mt-7'>We take a bold approach to customer service that is unmatched in the clinical skincare industry. PCA SKIN Certified Professionals are an extension of our mission to deliver the best patient results. That’s why we work closely with professionals to help them build their own successful practices and wealth of knowledge. We equip our partners with resources like continued education, 1:1 business development support, exclusive wholesale pricing, marketing and promotional support. With the help from professionals like you, we can continue to innovate industry-leading products and foster wonderful partnerships around the globe.</Paragraph>
      </div>
    </>
  );
};

export default OurStory;
