// import React from 'react';
// import Modal from '@ui/atoms/Modal';
// import { Review } from '@utils/ReviewTypes';
// import StarRating from '@ui/atoms/StarRating';
// import ReviewRatings from '../QuantityValueScent';
// import ModalBody from '@ui/atoms/ModalBody';
// import LikeAndReport from '../LikeAndReport';
// import { formatTimeAgo } from '@utils/appFunctions';
// import ResponseCard from '../ResponsePCASkin';
// import NoImage from '@ui/atoms/SvgAtoms/NoImage';
// import ReviewCloseSearch from '@ui/atoms/SvgAtoms/ReviewCloseSearch';

// interface ReviewModalProps {
//   onClose: () => void;
//   review: Review;
//   like: number;
//   dislike: number;
//   reviewId: number;
// }

// const CustomerImageModal: React.FC<ReviewModalProps> = ({ onClose, review, like, dislike, reviewId }) => {
//   const handleReport = () => {
//     console.log(`Reported review: ID ${reviewId}`);
//   };

//   return (
//     <Modal onClose={onClose} className="lg:!w-[882px] lg:!h-[620px] !mt-0 lg:!p-0" >
//       <ModalBody title={''} className='lg:!mt-0'>
//         {review && (
//           <div className="">

//             <div className="flex flex-col lg:flex-row lg:space-x-4 lg:w-[882px] lg:h-[612px]  ">
//               {/* Image Section */}
//               <div className="flex-shrink-0 lg:w-[462px] lg:!h-[620px] bg-black flex justify-center items-center">
//                 {review.Customimages && review.Customimages.length > 0 ? (
//                   <div className="flex flex-wrap gap-2">
//                     {review.Customimages.map((image) => (
//                       <img
//                         key={image.id}
//                         src={image.url}
//                         alt={image.alt}
//                         className="w-[105px] h-[105px] lg:w-[155px] lg:h-[155px] object-cover"
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="w-[105px] h-[105px] lg:w-[155px] lg:h-[155px] flex items-center justify-center bg-gray-200">
//                     <NoImage className="w-10 h-10" />
//                   </div>
//                 )}
//               </div>

//               {/* Review Data Section */}
//               <div className="flex-1 space-y-2 w-[378px] p-5 !ml-0">
//                 <button
//                   onClick={onClose}
//                   className=" w-[378px] h-6 grid justify-items-end "
//                 >
//                   <ReviewCloseSearch></ReviewCloseSearch>
//                 </button>
//                 <div className='!my-5 mx-[10px]'>
//                   <StarRating rating={review.rating} className="text-lg" />
//                   <p className="text-base text-gray-500 mb-[10px]">{review.reviewTitle}</p>
//                   <h2 className="text-[22px]  font-normal my-1 ">{review.name}</h2>
//                   <p className="text-sm text-black my-[10px]">{formatTimeAgo(review.timeAgo)}</p>
//                   <p className="text-sm mb-[5px]">{review.reviewContent}</p>

//                   {review.PCA_Responses && (
//                   <ResponseCard
//                     containerClassName="w-full "
//                     title="Response from PCA SKIN"
//                     reviewId={reviewId}
//                     pcaTimeAgo={formatTimeAgo(review.PCA_Responses.date)}
//                     iconSrc="responsePCASkin"
//                     consumerAffairsText={review.PCA_Responses.response}
//                   />
//                 )}

//                   <ReviewRatings
//                     ratings={{
//                       quality: review.ratings?.quality,
//                       value: review.ratings?.value,
//                       scent: review.ratings?.scent,
//                     }}
//                     barClassName=""
//                   />

//                   <LikeAndReport
//                     className="hidden lg:flex text-sm mt-4"
//                     initialLikeCount={like}
//                     initialDislikeCount={dislike}
//                     reviewId={reviewId}
//                     onReport={handleReport}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </ModalBody>
//     </Modal>
//   );
// };

// export default CustomerImageModal;
