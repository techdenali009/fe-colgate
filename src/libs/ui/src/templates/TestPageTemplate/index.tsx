import React from 'react';
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { SecondaryButton } from "@ui/molecules/SecondaryButton/index";
import { HeaderLabel } from "@ui/molecules/HeaderLabel";
import { SubtitleLabel } from "@ui/molecules/SubTitleLabel/index";
import { ProductCard } from "@ui/molecules/ProductCard/index";  
import { Rating } from "@ui/molecules/Rating";
import { ButtonWithIcon } from "@ui/molecules/ButtonWithIcon/index";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonWithTextAndIcon";
import { LabelButton } from "@ui/molecules/LabelButton/index";
import AccordionItem from "@ui/molecules/AccordianItem/index";

interface ISearchbar {
    submitLabel: string;
    onSubmit: (value: string) => void;
}

export const TestTemplatePage: React.FC<ISearchbar> = ({ onSubmit }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit((e.target as HTMLFormElement)[0].value);
    };

    const handleRatingChange = (newRating: number) => {
        console.log('New Rating:', newRating);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <PrimaryButton>Primary button</PrimaryButton>
                    <SecondaryButton>Secondary button</SecondaryButton>
                    <ButtonWithTextAndIcon children={undefined} />
                    <ButtonWithIcon children={undefined} />
                    <LabelButton label="label" />
                </div>
            </form>

            <HeaderLabel className="m-4">Title component</HeaderLabel>
            <SubtitleLabel className="m-4">Subtitle component</SubtitleLabel>

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
                <Rating totalStars={5} initialRating={3} onRatingChange={handleRatingChange} />
            </div>

            {/* Accordion Section */}
            <div className="mb-4">
                <AccordionItem
                    title="Accordion Item 1"
                    content="This is the content for the first accordion item. It provides more details and can be expanded or collapsed."
                />
            </div>
        </>
    );
};