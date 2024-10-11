import React, { useState } from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import ModalFooter from '@ui/atoms/ModalFooter';
import StarRating from '@ui/molecules/HoveringRatingStar';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { InputField } from '@ui/molecules/FormField';


interface ReviewBarModalProps {
    closeModal: () => void;
}

const ReviewBarModal: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    return (
        <Modal onClose={closeModal}>
            <ModalHeader onClose={closeModal}>
                <h1>My Review</h1>
            </ModalHeader>
            <ModalBody title="">
                <h1>Required fields are marked with *</h1>
                <div>1 Your reviews</div>
                <div className="p-6">
                    <StarRating totalStars={5} initialRating={4} />
                </div>
                <p>Please provide your feedback.</p>
                <div>
                    <br />
                    <h1>Review</h1>
                    <InputField
                        className=""
                        type="text"
                        placeholder="review"

                    />
                    <br />
                    <h1>Review Title</h1>
                    <InputField
                        className=""
                        type="text"
                        placeholder="review title"

                    />
                    <br />
                    <h1>Nickname</h1>
                    <InputField
                        className=""
                        type="text"
                        placeholder="nickname"

                    />
                    <br />
                    <h1>Email</h1>
                    <InputField
                        className=""
                        type="email"
                        placeholder="Email"

                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="flex m-10 justify-center bg-slate-300 text-blue-700">
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
                        I agree to the terms and conditions
                    </Checkbox>
                </div>
                <PrimaryButton onClick={closeModal}>Submit</PrimaryButton>
            </ModalFooter>
        </Modal>
    );
};

export default ReviewBarModal;


