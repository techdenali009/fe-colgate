import React, { useState } from "react";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { SecondaryButton } from "@ui/molecules/SecondaryButton";
import { HeaderLabel } from "@ui/molecules/HeaderLabel";
import { SubtitleLabel } from "@ui/molecules/SubTitleLabel/index";
import { ProductCard } from "@ui/molecules/ProductCard/index";
import { Rating } from "@ui/molecules/Rating";
import { ButtonWithIcon } from "@ui/molecules/ButtonWithIcon";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonWithTextAndIcon";
import Popover from '@ui/molecules/Popover/Popover';
import { LabelButton } from "@ui/molecules/LabelButton/index";
import AccordionItem from "@ui/molecules/AccordianItem/index";
import GreetRegister from '@ui/organisms/GreetingRegister';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';

interface ISearchbar {
    submitLabel: string;
    onSubmit: (value: string) => void;
}


export const TestTemplatePage: React.FC<ISearchbar> = ({}) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState(false); // State for Checkbox

    const handleMouseEnter = (button: string) => {
        setIsPopoverVisible(button);
    };

    const handleMouseLeave = () => {
        setIsPopoverVisible(null);
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <GreetRegister></GreetRegister>
            <form>
                <div className="flex mb-4">
                    <PrimaryButton className='font-HeroNewBold'>Primary button</PrimaryButton>
                    <SecondaryButton>Secondary button</SecondaryButton>
                    <ButtonWithTextAndIcon children={undefined} />
                    <ButtonWithIcon children={undefined} />
                    <LabelButton>label</LabelButton>
                </div>
                    {/* Checkbox Section */}
                <div className="flex m-10 justify-center bg-slate-300 text-blue-700">  
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        >
                            I agree to the terms and conditions
                    </Checkbox>
                
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
                                <Popover position='absolute'>                                                  {/*Specify the position for the popover if needed */}
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
                            <Popover maxWidth='800px'>                                      {/*Specify the maximum width for the popover if needed */}
                                <h1 className='text-amber-800'>POPOVER WITH THE MAXWIDTH</h1>
                                <p>Hello! I am Button 2 dcdsvhgcvdsghchdsgvcgdsvchdsvgcdvsghcvdsghcvdsghvcdsgcdsvcgdsvgchvdsghcvdsghvhghjjj hcgdscbhjdsgcyhdshvhcbvdsghcgdsvchgdvcdvghcdsvgcvdsghcvdshgvcgdsvcgh </p>
                                <PrimaryButton>Button For Reference</PrimaryButton>
                            </Popover>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <ProductCard
                    name="Stylish Chair"
                    imageSrc="https://imgs.search.brave.com/nBRnq1ceKvzUOyW-11T00_NWvFGZzdx6PNE8t-KY11k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iYW5u/ZXJlbmdpbmVlcmlu/Zy1oLmFzc2V0c2Fk/b2JlLmNvbS9pcy9p/bWFnZS9jb250ZW50/L2RhbS9iYW5uZXIt/ZW5naW5lZXJpbmcv/M2QtcmVuZGVycy9w/cm9kdWN0LWdyb3Vw/L211bHRpX2Rpdmlz/aW9uL0Jhbm5lci1w/cm9kdWN0cy1tdWx0/aS1kaXZpc2lvbi1o/b21lLWhlcnJvLXIz/LmpwZz93aWQ9MjAw/MCZxbHQ9OTAmZm10/PXdlYnA"
                    altText="A stylish chair"
                    className="p-4 border rounded-lg shadow-lg"
                />
            </div>

            <div className="mb-4">
                Rating Component:
                <Rating totalStars={5} initialRating={3} onRatingChange={console.log} />
            </div>

            <div className="mb-4">
                <ProductCard
                    name="Stylish Chair"
                    imageSrc="https://imgs.search.brave.com/5D278NqlZF0MvA_TrFlS9TBVJfYURKoYEw3lWm0v5oY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvYmln/LXNhbGUtYmFubmVy/LXRlbXBsYXRlXzIz/LTIxNDkyMjU3MjEu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                    altText="A stylish chair"
                    className="p-4 border rounded-lg shadow-lg"
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
            


        </>
    );
};