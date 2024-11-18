// import React, { useState } from 'react';
// import Modal from '@ui/atoms/Modal';
// import ModalHeader from '@ui/atoms/ModalHeader';
// import ModalBody from '@ui/atoms/ModalBody';
// import ModalFooter from '@ui/atoms/ModalFooter';
// import StarRating from '@ui/molecules/HoveringRatingStar';
// import { PrimaryButton } from '@ui/molecules/PrimaryButton';
// import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
// import { InputField } from '@ui/molecules/FormField';


// interface ReviewBarModalProps {
//     closeModal: () => void;
// }

// const ReviewBarModal: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setIsChecked(event.target.checked);
//   };
//   return (
//     <Modal onClose={closeModal}>
//       <ModalHeader onClose={closeModal}>
//         <h1>My Review</h1>
//       </ModalHeader>
//       <ModalBody title="">
//         <h1>Required fields are marked with *</h1>
//         <div>1 Your reviews</div>
//         <div className="p-6">
//           <StarRating totalStars={5} initialRating={4} />
//         </div>
//         <p>Please provide your feedback.</p>
//         <div>
//           <br />
//           <h1>Review</h1>
//           <InputField
//             className=""
//             type="text"
//             placeholder="review"

//           />
//           <br />
//           <h1>Review Title</h1>
//           <InputField
//             className=""
//             type="text"
//             placeholder="review title"

//           />
//           <br />
//           <h1>Nickname</h1>
//           <InputField
//             className=""
//             type="text"
//             placeholder="nickname"

//           />
//           <br />
//           <h1>Email</h1>
//           <InputField
//             className=""
//             type="email"
//             placeholder="Email"

//           />
//         </div>
//       </ModalBody>
//       <ModalFooter>
//         <div className="flex m-10 justify-center bg-slate-300 text-blue-700">
//           <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
//                         I agree to the terms and conditions
//           </Checkbox>
//         </div>
//         <PrimaryButton onClick={closeModal}>Submit</PrimaryButton>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default ReviewBarModal;

import React from 'react';
import StarRating from '@ui/atoms/StarRating';
import { Reviewproducts } from '@utils/test';

interface ReviewModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <button onClick={onClose} className="text-right text-lg font-bold">X</button>
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        
        {Reviewproducts.map((review) => (
          <div key={review.id} className="mb-6 border-b pb-4">
            <h3 className="font-semibold">{review.reviewerName} - {review.location}</h3>
            <p className="text-sm text-gray-500">Rating: {review.rating}</p>
            <StarRating rating={review.rating} className="!w-4 !h-4" />
            <p className="font-bold mt-2">{review.reviewTitle}</p>
            <p className="text-gray-700">{review.reviewContent}</p>
            {review.PCA_Responses && (
              <div className="bg-gray-100 p-2 rounded mt-2">
                <p className="text-sm text-gray-500">PCA Response:</p>
                <p>{review.PCA_Responses.response}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewModal;

