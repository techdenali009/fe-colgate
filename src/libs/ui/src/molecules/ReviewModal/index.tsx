import React from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import { IoLocationSharp } from 'react-icons/io5';
import { Review } from '@utils/ReviewTypes';// Ensure correct import path
import StarRating from '@ui/atoms/StarRating';
import ReviewRatings from '../QuantityValueScent';
import ModalBody from '@ui/atoms/ModalBody';
import LikeAndReport from '../LikeAndReport';
import { formatTimeAgo } from '@utils/appFunctions';
import ResponseCard from '../ResponsePCASkin';
import NoImage from '@ui/atoms/SvgAtoms/NoImage';

interface ReviewModalProps {
  onClose: () => void;
  review: Review;
  like: number;
  dislike: number;
  reviewId: number;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose, review, like, dislike, reviewId }) => {
  const handleReport = () => {
    console.log(`Reported review: ID ${reviewId}`);
  };

  return (
    <Modal onClose={onClose} className="w-full h-full !p-0  lg:h-[550px] lg:!w-[865px] 2xs:!p-0 !m-0 2xs:w-full">
      <ModalHeader onClose={onClose} className="2xs:!w-[327px] lg:mb-4" closebuttonclasName='' TfiCloseclassName='m-4'>
        {review && (
          <div className="flex flex-col items-center space-x-2 relative lg:!right-[651px] 2xs:right-[246px] lg:py-[15px] lg:pl-[20px] md:!right-[592px] ">
            <h2 className="text-[22px]  font-normal ">{review.name}</h2>
            <div className="flex ">
              <IoLocationSharp className="text-neutral-500" />
              <span className="ml-1 font-normal -mr-[24px]">{review.location}</span>
            </div>
          </div>
        )}
      </ModalHeader>

      {/* Modal Body Content */}
      <ModalBody title={''}>
        {review && (
          <div className="p-4 2XS:w-[425px]  lg:!w-[848px]">
            <div className="bg-[rgb(245,247,249)] p-[10px_20px] m-[10px_0px]">
              <p className="flex items-center space-x-2">
                <strong className="text-[14px] mb-1">Age</strong>
              </p>
              <h3 className="text-[14px]">
                <span>{review.ageGroup}</span>
              </h3>
            </div>

            {/* New Structure with SVG and Remaining Content */}
            <div className="flex mt-4 space-x-4">
              {/* Left Div with SVG */}
              <div className="flex-shrink-0 lg:!w-[151px] !text-center mt-[10px] flex lg:!justify-center  ">
                <NoImage></NoImage>

              </div>

              {/* Right Div with Remaining Elements */}
              <div className="flex-1 p-[10px] lg:!m-0 font-SansSerif w-[328px] lg:!w-[668px]">
                <StarRating rating={review.rating} className="!w-[20px]" starclassName="gap-1" />
                <p className=" mb-2 text-[18px] text-[#707372] ">{review.reviewTitle}</p>
                <p className="text-[16px]  text-[#747474] py-[10px]">{formatTimeAgo(review.timeAgo)}</p>
                <p className="lg:mb-[5px] lg:!w-[645px] md:!w-[645px] 2xs:w-[300px] ">{review.reviewContent}</p>


                {/* Render Custom images if available */}

                {review.Customimages && review.Customimages.length > 0 && (
                  <div className="flex lg:flex-wrap lg:space-x-2 lg:!w-[585px] 2xs:w-[308px] gap-1">
                    {review.Customimages.map((image) => (
                      <img
                        key={image.id}
                        src={image.url}
                        alt={image.alt}
                        className="lg:!w-[155px] lg:!h-[155px]  md:!w-[155px] md:!h-[155px] object-cover  2xs:w-[105px] 2xs:h-[105px]"
                      />
                    ))}
                  </div>
                )}

                {/* Additional review information */}
                <div className="my-4 space-y-2">
                  {/* Render PCA Response if available */}
                  {review.PCA_Responses && (
                    <ResponseCard
                      containerClassName='2xs:w-[327px] md:!w-[625px] lg:!w-[625px]'
                      title="Response from PCA SKIN"
                      reviewId={reviewId}
                      pcaTimeAgo={formatTimeAgo(review.PCA_Responses.date)}
                      iconSrc="responsePCASkin"
                      consumerAffairsText={review.PCA_Responses.response}
                    />
                  )}
                </div>



                {/* Render ratings breakdown */}
                <ReviewRatings
                  ratings={{
                    quality: review.ratings?.quality,
                    value: review.ratings?.value,
                    scent: review.ratings?.scent,
                  }}
                  barClassName="lg:!w-[84px] lg:!h-[13px] 2xs:w-[55px] lg:h-[13px] md:!w-[84px] md:!h-[13px] "
                  className=""
                  partialClassName="lg:!w-[84px] lg:!h-[13px] 2xs:w-[55px] lg:h-[13px] md:!w-[84px] md:!h-[13px]"
                  EmptyClassName="lg:!w-[84px] lg:!h-[13px] 2xs:w-[55px] lg:h-[13px] md:!w-[84px] md:!h-[13px] "
                  halfpartialClassName='lg:!w-[84px] lg:!h-[13px] 2xs:w-[55px] lg:h-[13px] md:!w-[84px] md:!h-[13px] '
                />

                <LikeAndReport
                  className="hidden lg:flex lg:text-[16px] 2xs:!py-[0px]"
                  initialLikeCount={like}
                  initialDislikeCount={dislike}
                  reviewId={reviewId}
                  onReport={handleReport}
                />
              </div>
            </div>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ReviewModal;
