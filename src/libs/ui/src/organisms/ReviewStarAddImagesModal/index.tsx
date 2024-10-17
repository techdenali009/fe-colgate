import React, { useState } from "react";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import StatusBadge from "@ui/molecules/StatusBadges";

const ReviewStarAddImages: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
    const [images, setImages] = useState<File[]>([]); 
    const [imagePreviews, setImagePreviews] = useState<string[]>([]); 

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        if (selectedFiles.length + images.length <= 6) {
            setImages([...images, ...selectedFiles]);

            const previews = selectedFiles.map(file => URL.createObjectURL(file));
            setImagePreviews([...imagePreviews, ...previews]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
        setImages(updatedImages);
        setImagePreviews(updatedPreviews);
    };

    return (
        <div className="p-4 space-y-6">
            {/* Title and Status */}
            <div className="flex items-center mt-2 space-x-2">
                <h2 className="text-base text-black">Your Reviews</h2>
                <StatusBadge Children={'completed'} />
            </div>

            {/* Image Upload Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base text-black">Add images</h3>
                    <a href="#" className="text-base text-blue-600 hover:underline">Photo Guidelines</a>
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

            {/* Buttons */}
            <div className="flex space-x-4">
                <PrimaryButton onClick={onSubmit} className="w-full font-bold hover:bg-blue-700">Submit</PrimaryButton>
                <PrimaryButton className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">Skip</PrimaryButton>
            </div>

            {/* Optional Information Sections */}
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
