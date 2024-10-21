import React from "react";
import StatusBadge from '@ui/molecules/StatusBadges';
import { Controller, useForm } from "react-hook-form";
import StarRating from "@ui/molecules/HoveringRatingStar";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { useDispatch } from 'react-redux';
import { setRatingData } from '../../../../../store/services/Slices/ReviewFormModalSlice';
import { AppDispatch } from '../../../../../store/store'; 

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
            <div>
                <div className="pl-96">
                    <StatusBadge Children={'In progress'} />
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
                <PrimaryButton className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">Skip</PrimaryButton>
            </div>
        </div>
    );
};

export default ProductRating;
