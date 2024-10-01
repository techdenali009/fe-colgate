import React from 'react';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';

interface PDPage {
    submitLabel: string;
    onSubmit: (value: string) => void;
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
    return (
        <>
            <div>
                <TwoCardsComponent />
            </div>

            <div>
                <h3 className="font-semibold mb-4">Skin Types</h3>
                <div className="flex flex-wrap space-x-2">
                    <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
                    <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
                </div>
            </div>
        </>
    );
};
