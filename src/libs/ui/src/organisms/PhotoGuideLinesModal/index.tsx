import Modal from "@ui/atoms/Modal";
import React from 'react';
import CloseModal from '../../../assets/CloseModal.svg';
import { PrimaryButton } from "@ui/molecules/PrimaryButton";

interface ReviewBarModalProps {
    closeModal: () => void;
}

const PhotoGuideLines: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
    return (
        <Modal onClose={closeModal} className="bg-white rounded-lg shadow-lg relative !p-6">
            <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Photo guidelines</h2>
                <button onClick={closeModal} aria-label="Close Modal" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <img src={CloseModal} alt="Close" className="h-6 w-6" />
                </button>
            </div>
            <div className="mt-4">
                <p className="text-black">When submitting images, please follow these guidelines:</p>
                <ul className="list-disc list-inside pl-5 text-black mt-2">
                    <li>Images must be in JPG, JPEG, PNG, GIF, TIF, TIFF, HEIC, or HEIF format.</li>
                    <li>File size must be 10 MB or less.</li>
                    <li>Image must be at least 100 pixels tall.</li>
                    <li>Image must be at least 100 pixels wide.</li>
                    <li>If you are not the copyright holder, you may not submit copyrighted images.</li>
                    <li>Objectionable images will be rejected.</li>
                    <li>Uploaded images become the property of the Company.</li>
                </ul>
            </div>
            <PrimaryButton onClick={closeModal} className="px-6 py-2 font-bold bg-blue-600 text-white hover:bg-blue-700 transition w-48 h-12">Close</PrimaryButton>
        </Modal>
    );
};

export default PhotoGuideLines;
