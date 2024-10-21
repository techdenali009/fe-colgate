import Modal from "@ui/atoms/Modal";
import React from 'react';
import CloseModal from '../../../assets/CloseModal.svg';

interface ReviewBarModalProps {
    closeModal: () => void;
}

const ReviewGuideLines: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
    return (
        <Modal onClose={closeModal} className="bg-white rounded-lg shadow-lg relative !p-6">
            <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Writing Guidelines</h2>
                <button onClick={closeModal} aria-label="Close Modal" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <img src={CloseModal} alt="Close" className="h-6 w-6" />
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-700">We want to publish your review, so please:</p>
                <ul className="list-disc list-inside pl-5 text-gray-700 mt-2">
                    <li>Keep your review focused on the product.</li>
                    <li>Avoid writing about customer service; contact us instead if you have issues requiring immediate attention.</li>
                    <li>Refrain from mentioning competitors or the specific price you paid for the product.</li>
                    <li>Do not include any personally identifiable information, such as full names.</li>
                </ul>
            </div>
        </Modal>
    );
};

export default ReviewGuideLines;
