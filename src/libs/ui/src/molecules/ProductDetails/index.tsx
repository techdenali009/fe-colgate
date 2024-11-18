import Paragraph from '@ui/atoms/Paragraph/paragraph';
import BusinessSidebar from '@ui/organisms/BusinessSidebar/BusinessSidebar';
import { ProductDescription } from '@utils/CoursesData';
import React, { useState } from 'react';
import AccordionItem from '../AccordianItem';
import './ProductDetails.styles.scss'


const ProductDetails: React.FC = () => {
  const [visibleParagraph, setVisibleParagraph] = useState<'How to Apply' | 'Regimen Information'>('How to Apply');
  const [selectedCategory, setSelectedCategory] = useState<string | null>('How to Apply');
  const [activeTitle, setActiveTitle] = useState<string | null>('How to Apply');
  const [preventClose, setPreventClose] = useState(false); // Parent manages preventClose

  const handleAccordionStatus = (title: string) => {
    // Only set a new active accordion if it's not already the active one
    if (activeTitle !== title) {
      setActiveTitle(title);
      setPreventClose(true); // Activate prevent close
    } else {
      setPreventClose(false); // Allow closing if clicked again
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setVisibleParagraph(category as 'How to Apply' | 'Regimen Information');
  };

 

  return (
    <div className="pt-[37px] pb-[64px]">
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-4 gap-[9rem] ">
        <div className="col-span-1 flex flex-col w-[236px] h-[136px]">
          <BusinessSidebar
            categories={ProductDescription.ProductDescription}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            buttonClassName="pt-[1.25rem] pb-[1.25rem] !pl-[1.5rem] !pr-[3rem] !text-[16px] hover:!text-black hover:!font-thin"
            liClassName="w-[248px] h-[67px]"
            selectedClassName="!font-HeroNewBold !text-black"
          />
        </div>

        <div className="col-span-2 content-center pl-[30px]">
          {visibleParagraph === 'How to Apply' && (
            <Paragraph className="w-[660px] font-HeroNewLight text-darkGray text-[16.5]">
               After cleansing, apply to the entire face and neck in the morning and evening for barrier repair and redness reduction. Follow with the appropriate  <span className="font-HeroNewBold">PCA SKIN</span> broad spectrum SPF product in the daytime and moisturizer in the evening.
            </Paragraph>
          )}
          {visibleParagraph === 'Regimen Information' && (
            <Paragraph className="font-HeroNewLight text-darkGray">
              Morning & Night:
              <ol className="list-decimal ml-[40px]">
                <li>Cleanse</li>
                <li><span className="font-HeroNewBold">Correct</span></li>
                <li>Hydrate</li>
                <li>Protect</li>
              </ol>
            </Paragraph>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden p-[10px]">
      
        <AccordionItem 
          className="2xs:!pb-0  "
          accordianStatus={handleAccordionStatus} 
          containerClassName="container w-full"
          titleClassName={activeTitle === 'How to Apply' ? 'text-appTheme text-[20px] font-HeroNewExtraBold ' : 'text-[20px] text-[#555555] 2xs:pb-[32px] font-HeroNewExtraBold'} 
          title="How to Apply" 
          isActive={activeTitle === 'How to Apply'} // Pass active state
          preventClose={preventClose}
       
        >
          <Paragraph className="font-HeroNewLight text-darkGray text-[16.5px] md:!mr-[83px] 2xs:!pb-[12px]">
        After cleansing, apply to the entire face and neck in the morning and evening for barrier repair and redness reduction. Follow with the appropriate  <span className="font-HeroNewBold">PCA SKIN</span> broad spectrum SPF product in the daytime and moisturizer in the evening.
          </Paragraph>
        </AccordionItem>

        <AccordionItem 
          title="Regimen Information"
          className="2xs:!pb-0 border:0 "
          containerClassName="container !w-full border:0"
          accordianStatus={handleAccordionStatus} 
          titleClassName={activeTitle === 'Regimen Information' ? 'text-appTheme text-[20px] font-HeroNewExtraBold' : 'text-[20px] text-[#555555] 2xs:pb-[32px]  font-HeroNewExtraBold'} 
          isActive={activeTitle === 'Regimen Information'} // Pass active state
          preventClose={preventClose}
          svgIconClass="!text-blue-600"
        >
          <Paragraph className="font-HeroNewLight text-darkGray">
          Morning & Night:
            <ol className="list-decimal ml-[40px]">
              <li>Cleanse</li>
              <li><span className="font-HeroNewBold">Correct</span></li>
              <li>Hydrate</li>
              <li>Protect</li>
            </ol>
          </Paragraph>
        </AccordionItem>
      </div>
    </div>
  );
};

export default ProductDetails;
