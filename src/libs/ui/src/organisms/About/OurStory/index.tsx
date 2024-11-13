import { ProductImage } from '@ui/atoms/ProductImage';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';
import './ourStrory.styles.scss'
const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col items-center " >
      <div className=" mb-6">
        <ProductImage
          src={
            'https://www.pcaskinpro.com/cms/assets/266fbe2f-f27b-494a-8901-d4c371ce1eed.png?key=pca-en-us-marketing-header-large'
          }
          alt={'Peels'}
          className="!w-full !h-auto !object-contain"
          width={200}
          height={200}
        >
        </ProductImage>
      </div>

      <div className=" mb-6 ">
        <Heading className="lg:!text-[2.375rem] text-appTheme leading-10 font-extralight !text-[1.75rem] font-HeroNewUltraLight text-center items-center w-full mb-6">
          Our journey of improving people’s lives
        </Heading>

        <Heading className="lg:text-[1.25rem] text-appTheme leading-10 !font-bold !font-HeroNewBold justify-center mb-6">
          Improving skin, improving lives since 1990
        </Heading>
        <div className="lg:max-w-[48rem]   max-w-full ">
          <StrongText className="heading  text-appTextColor">About PCA SKIN&nbsp;</StrongText>
          <p>&nbsp;</p>

          <Paragraph className="paragraph">
            For over 30 years,&nbsp;<StrongText className="strong">PCA SKIN</StrongText>&nbsp;has pioneered
            and perfected the science of skin health. We are founded in &nbsp;the belief that delivering transformative solutions backed by science
            can improve not only skin, but lives also.&nbsp;
            <StrongText className="strong">PCA SKIN</StrongText>&nbsp;continues to be a trusted
            innovator in the development of highly effective professional
            treatments and daily care products that offer individualized
            solutions to deliver dramatic, visible results.&nbsp;
          </Paragraph>
          <p>&nbsp;</p>
          <Paragraph className="paragraph">
            Whether experienced through a licensed skin health professional
            trained and certified by <StrongText className="strong">PCA SKIN</StrongText>, or as a
            part of daily care routine at home, we know skin health is personal,
            so we put our best into helping customers feel their best.
          </Paragraph>
          <p>&nbsp;</p>
          <StrongText className="heading">Innovators in healthy skin</StrongText>
          <p>&nbsp;</p>
          <Paragraph className="paragraph">
            <StrongText className="strong">PCA SKIN</StrongText> was founded in 1990 by
            aesthetician Margaret Ancira and developed by dermatologist Jennifer
            Linder M.D. Since our founding, professional partnerships have been
            an integral part of our identity. Our formulas are researched,
            designed, and executed by our expert Research and Development team
            to address the evolving needs of the skin health industry and
            patients.{' '}
          </Paragraph>
          <p>&nbsp;</p>
          <Paragraph className="paragraph">
            Each of your clients is unique, so our products are, too. Through
            extensive research and development, we can provide clients with a
            wide array of professional and daily care solutions to choose from –
            this empowers PCA SKIN professionals to customize and build the
            right treatment plan for each and every individual.{' '}
          </Paragraph>
          <p>&nbsp;</p>

          <Paragraph className="paragraph">
            <StrongText className="strong">PCA SKIN</StrongText>&nbsp;is the leader in peel innovation
            with more than 30 years formulating the best and most innovative
            professional treatments in the industry. More than one million&nbsp;
            <StrongText className="strong">PCA SKIN</StrongText>&nbsp;peels are performed around the
            world each year. With formulations for all skin types – even those
            with sensitive skin – PCA SKIN peels are clinically proven to
            improve acne, hyperpigmentation, and aging.&nbsp;
          </Paragraph>
          <p>&nbsp;</p>

          <Paragraph className="paragraph">
            As the first company to develop and market the modified and enhanced
            Jessner’s peel (a solution that combines Lactic Acid, Salicylic
            Acid, Kojic Acid, Citric Acid, and Resorcinol), we started a
            revolution for a safer and more comfortable treatment with increased
            skin benefits. Today, our line of peels have expanded to include TCA
            and lactic blended peels, retinoid peels and boosters, as well as
            professional peel alternatives. The professional line of treatment
            products is sold exclusively to{' '}
            <StrongText className="strong">PCA SKIN Certified Professionals</StrongText>
          </Paragraph>
          <p>&nbsp;</p>

          <StrongText className="heading">Cultivating partnerships with professionals </StrongText>
          <p>&nbsp;</p>

          <Paragraph className="paragraph">
            We take a bold approach to customer service that is unmatched in the
            clinical skincare industry. PCA SKIN Certified Professionals are an
            extension of our mission to deliver the best patient results. That’s
            why we work closely with professionals to help them build their own
            successful practices and wealth of knowledge. We equip our partners
            with resources like continued education, 1:1 business development
            support, exclusive wholesale pricing, marketing and promotional
            support. With the help from professionals like you, we can continue
            to innovate industry-leading products and foster wonderful
            partnerships around the globe.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
