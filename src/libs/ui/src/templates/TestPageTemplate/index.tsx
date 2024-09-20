import React, { useState } from 'react';
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { SecondaryButton } from "@ui/molecules/SecondaryButton";
import { HeaderLabel } from "@ui/molecules/HeaderLabel";
import { SubtitleLabel } from "@ui/molecules/SubTitleLabel";
import { ProductCard } from "@ui/molecules/ProductCard";  
import { Rating } from "@ui/molecules/Rating";
import { ButtonWithIcon } from "@ui/molecules/ButtonWithIcon";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonWithTextAndIcon";
import { LabelButton } from "@ui/molecules/LabelButton";
import AccordionItem from '@ui/molecules/AccordianItem';
import Popover from '@ui/molecules/Popover/Popover';

interface ISearchbar {
    submitLabel: string;
    onSubmit: (value: string) => void;
}

export const TestTemplatePage: React.FC<ISearchbar> = ({ onSubmit }) => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const handleMouseEnter = (button: string) => {
        setHoveredButton(button);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <>
            <form>
                <div className="flex mb-4">
                    <PrimaryButton>Primary button</PrimaryButton>
                    <SecondaryButton>Secondary button</SecondaryButton>
                    <ButtonWithTextAndIcon children={undefined} />
                    <ButtonWithIcon children={undefined} />
                    <LabelButton>label</LabelButton>
                </div>
            </form>

            <HeaderLabel className="m-4">Title component</HeaderLabel>
            <SubtitleLabel className="m-4">Subtitle component</SubtitleLabel>

            {/* Popover buttons */}
            <div className="flex mb-4 space-x-4 justify-center">
      {/* Button 1 */}
      <div className="relative">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onMouseEnter={() => handleMouseEnter('button1')}
          onMouseLeave={handleMouseLeave}
        >
          Button 1
        </button>
        {hoveredButton === 'button1' && (
          <Popover position="top-12">
            <p>Hello World! I am Button 1 Popover</p>
            <SecondaryButton>Secondary Button</SecondaryButton>
          </Popover>
        )}
      </div>

      {/* Button 2 */}
      <div className="relative">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onMouseEnter={() => handleMouseEnter('button2')}
          onMouseLeave={handleMouseLeave}
        >
          Button 2
        </button>
        {hoveredButton === 'button2' && (
          <Popover position="top-12">
            <p>Hello! I am Button 2 Popover</p>
            <PrimaryButton>Button For Reference</PrimaryButton>
          </Popover>
        )}
      </div>
    </div>

            <div className="mb-4">
                <ProductCard
                    name="Stylish Chair"
                    imageSrc="https://dribbble.com/shots/24594692-Supplement-Product-Card-Design"
                    altText="A stylish chair"
                    className="p-4 border rounded-lg shadow-lg"
                />
            </div>

            <div className="mb-4">
                Rating Component:
                <Rating totalStars={5} initialRating={3} onRatingChange={console.log} />
            </div>

            <div className="mb-4">
                <AccordionItem
                    title="Accordion Item 1"
                    content="This is the content for the first accordion item. It provides more details and can be expanded or collapsed."
                />
            </div>
        </>
    );
};
