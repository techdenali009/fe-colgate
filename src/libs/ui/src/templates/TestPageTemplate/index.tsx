

import { ButtonWithTextAndIcon } from "@ui/molecules/ButtonTypes/ButtonWithTextAndIcon";
import { PrimaryButton } from "@ui/molecules/ButtonTypes/PrimaryButton"
import { SecondaryButton } from "@ui/molecules/ButtonTypes/SecondaryButton";
interface ISearchbar {
    submitLabel: string,
    onSubmit: (value: string) => void,
}

export const TestTemplatePage: React.FC<ISearchbar> = ({ submitLabel, onSubmit }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(e.target[0].value)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <PrimaryButton>Primary button</PrimaryButton>
                <SecondaryButton>Secondary button</SecondaryButton>
                
            </div>
        </form>
    </>
};