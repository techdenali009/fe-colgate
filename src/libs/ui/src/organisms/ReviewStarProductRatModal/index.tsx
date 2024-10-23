import React from "react";
import StatusBadge from '@ui/molecules/StatusBadges';
import { Controller, useForm } from "react-hook-form";
import StarRating from "@ui/molecules/HoveringRatingStar";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { useDispatch } from 'react-redux';
import { setRatingData } from '../../../../../store/services/Slices/ReviewFormModalSlice';
import { AppDispatch } from '../../../../../store/store';
import { FaCheckCircle } from "react-icons/fa";

interface FormValues {
    quantity: number;
    scent: number;
    value: number;
}

const ProductRating: React.FC<{ onSubmit: (data: FormValues) => void }> = ({ onSubmit }) => {
    const dispatch: AppDispatch = useDispatch();
    const { control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            quantity: 0,
            scent: 0,
            value: 0
        },
        mode: 'onChange',
    });

    const handleFormSubmit = (data: FormValues) => {
        dispatch(setRatingData(data));
        onSubmit(data);
    };

    return (
        <div className="p-4 space-y-4">
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
            <div className="flex flex-col space-y-4 p-6 pl-8">
                <div className="flex items-center border-b border-gray-300 pb-4 w-full">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                        2
                    </div>
                    <div className="ml-4">
                        <h3 className="">Add images</h3>
                        <p className="">(Optional)</p>
                        <StatusBadge Children={'completed'} />
                    </div>
                </div>
                <div className="flex items-center border-b border-gray-300 pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                        3
                    </div>
                    <div className="ml-4">
                        <h3 className="">Personal/Product Information</h3>
                        <p className="">(Optional)</p>
                        <StatusBadge Children={'skipped'} />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full border border-black">
                        4
                    </div>
                    <div className="ml-4">
                        <h3 className="">Product Rating</h3>
                        <p className="">(Optional)</p>
                        <StatusBadge Children={'In progress'} />
                    </div>
                </div>

            </div>
            <h2 className="text-lg font-bold">Rate the Product</h2>

            {/* Quantity Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Quantity</div>
                <div className="pt-5">
                    <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => (
                            <StarRating
                                totalStars={5}
                                initialRating={field.value}
                                width={35}
                                height={35}
                                className="bg-gray-300"
                                onChange={field.onChange}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Scent Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">value</div>
                <div className="pt-5">
                    <Controller
                        name="value"
                        control={control}
                        render={({ field }) => (
                            <StarRating
                                totalStars={5}
                                initialRating={field.value}
                                width={35}
                                height={35}
                                className="bg-gray-300"
                                onChange={field.onChange} // Pass the onChange prop
                            />
                        )}
                    />
                </div>
            </div>

            {/* Scent Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Scent</div>
                <div className="pt-5">
                    <Controller
                        name="scent"
                        control={control}
                        render={({ field }) => (
                            <StarRating
                                totalStars={5}
                                initialRating={field.value}
                                width={35}
                                height={35}
                                className="bg-gray-300"
                                onChange={field.onChange} // Pass the onChange prop
                            />
                        )}
                    />
                </div>
            </div>

            <div className="flex space-x-4">
                <PrimaryButton onClick={handleSubmit(handleFormSubmit)} className="w-full font-bold hover:bg-blue-700">Submit</PrimaryButton>
                <PrimaryButton onClick={handleSubmit(handleFormSubmit)} className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">Skip</PrimaryButton>
            </div>
        </div>
    );
};

export default ProductRating;
