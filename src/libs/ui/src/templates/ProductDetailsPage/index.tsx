import React from 'react';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import ReviewSection from '@ui/organisms/ReviewSection';

interface PDPage {
    submitLabel: string;
    onSubmit: (value: string) => void;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    productReviews: Array<any>; // Accept product reviews as prop
}
export const ProductDetailsPage: React.FC<PDPage> = ({ productReviews }) => {


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
      
      <div>
        <ReviewSection productReviews={productReviews}></ReviewSection>
      </div>
    </>
  );
};
