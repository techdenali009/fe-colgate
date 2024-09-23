import React, { useState } from 'react';
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { SecondaryButton } from "@ui/molecules/SecondaryButton";
import { HeaderLabel } from "@ui/molecules/HeaderLabel";
import { SubtitleLabel } from "@ui/molecules/SubTitleLabel/index";
import { ProductCard } from "@ui/molecules/ProductCard/index";
import { Rating } from "@ui/molecules/Rating";
import { ButtonWithIcon } from "@ui/molecules/ButtonWithIcon";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonWithTextAndIcon";
import { LabelButton } from "@ui/molecules/LabelButton";
import AccordionItem from '@ui/molecules/AccordianItem';
import Popover from '@ui/molecules/Popover/Popover';
import Skeleton from '@ui/molecules/SkeletonCard';
interface ISearchbar {
    submitLabel: string;
    onSubmit: (value: string) => void;
}

export const TestTemplatePage: React.FC<ISearchbar> = ({ onSubmit }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState<string | null>(null);

    const handleMouseEnter = (button: string) => {
        setIsPopoverVisible(button);
    };

    const handleMouseLeave = () => {
        setIsPopoverVisible(null);
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
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter('button1')}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Popover Button 1
                    </button>
                    {isPopoverVisible === 'button1' && (
                        <div
                            onMouseEnter={() => setIsPopoverVisible('button1')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Popover>
                                <h1 className='text-amber-800'>TITLE FOR POPOVER</h1>
                                <p>Hello World! I am Button 1 Popover</p>
                                <SecondaryButton>Secondary Button</SecondaryButton>
                            </Popover>
                        </div>
                    )}
                </div>

                {/* Button 2 */}
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter('button2')}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Hover Me
                    </button>
                    {isPopoverVisible === 'button2' && (
                        <div
                            onMouseEnter={() => setIsPopoverVisible('button2')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Popover>
                                <p>Hello! I am Button 2 Popover</p>
                                <PrimaryButton>Button For Reference</PrimaryButton>
                            </Popover>
                        </div>
                    )}
                </div>
            </div>



            <div className="mb-4">
                Rating Component:
                <Rating totalStars={5} initialRating={3} onRatingChange={console.log} />
            </div>

            <div className="mb-4 mt-52">
                <ProductCard
                    name="Stylish Chair"
                    imageSrc="https://dribbble.com/shots/24594692-Supplement-Product-Card-Design"
                    altText="A stylish chair"
                    className="p-4 border rounded-lg shadow-lg"
                    isBestSeller={true}
                />

            </div>

            <div className="mb-4">
                <AccordionItem
                    title="Product Category"
                    titleClassName="text-lg font-bold text-blue-500" // Custom title class
                    containerClassName="border-t border-blue-300"    // Custom container class
                    contentClassName="p-6 bg-white"                 // Custom content class
                >
                    {/* Pass children dynamically */}
                    <div>
                        <p>This is the content for the product category accordion item.</p>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </AccordionItem>

            </div>

            <div className="flex space-x-4">   
                <Skeleton width="100%" height="200px" /> 
            </div>
        </>
    );
};
