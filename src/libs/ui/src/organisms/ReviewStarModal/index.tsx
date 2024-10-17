import React, { useState } from 'react';
import Modal from '@ui/atoms/Modal';
import ReviewStarAddImages from '../ReviewStarAddImagesModal';
import ReviewStarSubmit from '../ReviewStarSubmitModal';
import { Image } from '@ui/atoms/Image';
import CloseModal from '../../../assets/CloseModal.svg';
import responseProfile from '../../../assets/responsiveProfile.svg';
interface ReviewBarModalProps {
  closeModal: () => void;
}

const ReviewBarModal: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    setIsFormSubmitted(true);
  };

  return (
    <Modal onClose={closeModal} className=" bg-white rounded-lg shadow-lg relative h-full lg:!w-[780px] !p-0">
       <div className="flex items-center my-1.5 mx-1">
          <button
            role="button"
            aria-label="Close My review modal."
            onClick={closeModal}
            className="absolute right-4"
          >
            <Image src={CloseModal} alt="Close modal" className="w-6 h-6" />
          </button>
          <div className="flex items-center border-b border-gray-400 w-full ">
            <div className={`border-2 border-gray-300 px-3 pb-10 mr-1 flex items-start pt-2`}>
              <Image src={responseProfile} alt="" className="mr-3 w-10 h-10" />
            </div>
            <h1 className="text-lg font-bold text-black font-sans">My Review</h1>
          </div>
        </div>
      <div title="Your Review" className="h-[500px] mb-4">
        {isFormSubmitted ? (
          <ReviewStarAddImages />
        ) : (
          <ReviewStarSubmit onSubmit={onSubmit} />
        )}
      </div>
    </Modal>
  );
};

export default ReviewBarModal;
