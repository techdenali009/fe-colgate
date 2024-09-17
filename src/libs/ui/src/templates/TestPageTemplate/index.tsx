import { PrimaryButton } from "@ui/molecules/ButtonTypes/PrimaryButton"
import { SecondaryButton } from "@ui/molecules/ButtonTypes/SecondaryButton";
import { HeaderLabel } from "@ui/molecules/LabelTypes/HeaderLabel"
import { SubtitleLabel } from "@ui/molecules/LabelTypes/SubTitleLabel"
import { FormFieldWithLabel } from "@ui/molecules/FormFieldLabel/FormFieldWithLabel";
import { FormFieldWithoutLabel } from "@ui/molecules/FormFieldLabel/FormFieldWithoutLabel";
import { ButtonWithIcon } from "@ui/molecules/ButtonTypes/ButtonWithIcon";
import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonTypes/ButtonWithTextAndIcon";
import { LabelButton } from "@ui/molecules/ButtonTypes/LabelButtons";

interface ISearchbar {
    submitLabel: string,
    onSubmit: (value: string) => void,
}

export const TestTemplatePage: React.FC<ISearchbar> = ({ onSubmit }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(e.target[0].value)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <PrimaryButton>Primary button</PrimaryButton>
                <SecondaryButton>Secondary button</SecondaryButton>
                <ButtonWithTextAndIcon text={"ButtonWithTextAndIcon"} icon={undefined}></ButtonWithTextAndIcon>
                <ButtonWithIcon icon={undefined}></ButtonWithIcon>
                <LabelButton label={"label"}></LabelButton>

            </div>
        </form>
        <HeaderLabel text="Title component" className="mb-4" />
        <SubtitleLabel text="Subtitle component" className="mb-4" />
        <div className="mb-4">
            <FormFieldWithLabel
                label="Your Name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => console.log('Name:', e.target.value)}
            />
        </div>
        <div className="mb-4">
            <FormFieldWithoutLabel
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => console.log('Email:', e.target.value)}
            />
        </div>
    </>
};