import React from "react";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";

const ReviewStarAddImages: React.FC = () => {
    return (
        <div>
            <div>Your Reviews</div>
            <div>
                <div>2</div>
                <div>Add Images</div>
            </div>
            <div>
                <h2 className='font-HeroNewBold'>Add images</h2>
                <a className='text-blue-600 text-base'>Photo Guidelines</a>
            </div>
            <div>
                <div>
                    <PrimaryButton>Submit</PrimaryButton>
                    <PrimaryButton>Skip</PrimaryButton>
                </div>
            </div>
            <div className="flex flex-col space-y-4 p-6 pl-8">
                <div className="flex items-center border-b border-gray-300 pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                        3
                    </div>
                    <div className="ml-4">
                        <h3 className="">Personal/Product Information</h3>
                        <p className="">(Optional)</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                        4
                    </div>
                    <div className="ml-4">
                        <h3 className="">Product Rating</h3>
                        <p className="">(Optional)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewStarAddImages;
