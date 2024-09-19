import React from 'react';
import { PrimaryButton } from "@ui/molecules/ButtonTypes/PrimaryButton";
import { SecondaryButton } from "@ui/molecules/ButtonTypes/SecondaryButton";
import { HeaderLabel } from "@ui/molecules/LabelTypes/HeaderLabel";
import { SubtitleLabel } from "@ui/molecules/LabelTypes/SubTitleLabel";
import { FormFieldWithLabel } from "@ui/molecules/FormFieldLabel/FormFieldWithLabel";
import { FormFieldWithoutLabel } from "@ui/molecules/FormFieldLabel/FormFieldWithoutLabel";
import { ProductCard } from "@ui/molecules/ProductTypes/ProductCard";  
import { Rating } from "@ui/molecules/RatingStarProduct/RatingStarProduct";
import { ButtonWithIcon } from "@ui/molecules/ButtonTypes/ButtonWithIcon";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonTypes/ButtonWithTextAndIcon";
import { LabelButton } from "@ui/molecules/ButtonTypes/LabelButtons";
import AccordionItem from "@ui/molecules/AccordianItemComponent/AccordionItem";
import Footer from "@ui/organisms/Footer";
import GreetRegister from '@ui/organisms/GreetingRegister/greetRegister';

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


    function searchUsers(value: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <PrimaryButton>Primary button</PrimaryButton>
                    <SecondaryButton>Secondary button</SecondaryButton>
                    <ButtonWithTextAndIcon text="ButtonWithTextAndIcon" icon={undefined} />
                    <ButtonWithIcon icon={undefined} />
                    <LabelButton label="label" />
                </div>
            </form>

             <HeaderLabel text="Title component" className="m-4" />
            <SubtitleLabel text="Subtitle component" className="m-4" /> 

            

            <div className="mb-4">
                <FormFieldWithLabel
                    label="Your Name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => console.log('Name:', e.target.value)}
                />
            </div>

            <div className="mb-4 ">
                <FormFieldWithoutLabel
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => console.log('Email:', e.target.value)}
                />
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
                <Rating totalStars={5} initialRating={3} onRatingChange={handleRatingChange} />
            </div>

            {/* Accordion Section */}
            <div className="mb-4">
                <AccordionItem
                    title="Accordion Item 1"
                    content="This is the content for the first accordion item. It provides more details and can be expanded or collapsed."
                />
            </div>

            <GreetRegister></GreetRegister>
           
        </>
    );
};