import React, { useState } from "react";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import StatusBadge from "@ui/molecules/StatusBadges";
import { useDispatch } from 'react-redux';
import { setModalImages } from '../../../../../store/services/Slices/ReviewFormModalSlice';
import { AppDispatch } from '../../../../../store/store';
import { FaCheckCircle } from "react-icons/fa";
import PhotoGuideLines from "../PhotoGuideLinesModal";

const ReviewStarAddImages: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        if (selectedFiles.length + images.length <= 6) {
            const updatedImages = [...images, ...selectedFiles];
            const previews = selectedFiles.map(file => URL.createObjectURL(file));
            setImages(updatedImages);
            setImagePreviews([...imagePreviews, ...previews]);
            dispatch(setModalImages(updatedImages));
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
        setImages(updatedImages);
        setImagePreviews(updatedPreviews);
        dispatch(setModalImages(updatedImages));
    };

    const handleSubmit = () => {
        if (imagePreviews.length === 0) {
            setErrorMessage('Unable to submit the form. Please upload at least one image.'); // Set error message
        } else {
            setErrorMessage(''); // Clear error message if submission is valid
            onSubmit(); // Call the onSubmit prop
        }
    };

    const handleSkip = () => {
        setErrorMessage(''); // Clear error message when skipping
        onSubmit(); // Call the onSubmit prop
    };

    return (
        <div className="p-4 space-y-6">
            <div className="flex items-center space-x-4 pt-7 pl-8">
                <div className="flex items-center justify-center w-6 h-6 border border-green-500 rounded-full">
                    <div className="w-full h-full bg-green-500 flex items-center justify-center rounded-full">
                        <FaCheckCircle className="text-white text-base" />
                    </div>
                </div>
                <h2 className="text-base text-black">Your reviews</h2>
                <div className="pl-96">
                    <StatusBadge Children={'completed'} />
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-4 pt-7 pl-8">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full text-sm font-semibold text-black">
                        2
                    </div>
                    <h2 className="text-base text-black">Add Images</h2>
                    <div className="pl-96">
                        <StatusBadge Children={'In progress'} />
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-HeroNewBold text-black">Add images</h2>
                    <a onClick={openModal} className="text-base text-blue-700 pr-8">Photo guidelines</a>
                    {isModalOpen && <PhotoGuideLines closeModal={closeModal} />}
                </div>
                <div className="flex space-x-2 overflow-x-auto">
                    {Array.from({ length: 6 }).map((_, index) => {
                        if (index < imagePreviews.length) {
                            return (
                                <div key={index} className="relative w-16 h-16 border border-gray-300 rounded-md flex items-center justify-center">
                                    <img src={imagePreviews[index]} alt={`Uploaded ${index}`} className="w-full h-full object-cover rounded-md" />
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 p-1 text-red-600 hover:text-red-800"
                                        aria-label="Remove image"
                                    >
                                        &times; {/* X icon for remove */}
                                    </button>
                                </div>
                            );
                        }
                        return (
                            <label key={index}
                                className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageUpload}
                                    className="hidden" // Hide the default file input
                                />
                                <span className="text-gray-400">+Photo</span>
                            </label>
                        );
                    })}
                </div>
            </div>

            {errorMessage && ( // Conditional rendering of error message
                <div className="text-red-600 mt-2">
                    {errorMessage}
                </div>
            )}

            <div className="flex space-x-4">
                <PrimaryButton onClick={handleSubmit} className="w-full font-bold hover:bg-blue-700">Submit</PrimaryButton>
                <PrimaryButton onClick={handleSkip} className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">Skip</PrimaryButton>
            </div>

            <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">3</div>
                    <div>
                        <h4 className="font-medium">Personal/Product Information</h4>
                        <p className="text-sm">(Optional)</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">4</div>
                    <div>
                        <h4 className="font-medium">Product Rating</h4>
                        <p className="text-sm">(Optional)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewStarAddImages;
