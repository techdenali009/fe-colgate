import React from "react";
import StatusBadge from '@ui/molecules/StatusBadges';
import { Controller, useForm } from "react-hook-form";
import StarRating from "@ui/molecules/HoveringRatingStar";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";

const ProductRating: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
    const { control } = useForm({
        defaultValues: {
            rating: 0,
            reviewText: '',
            reviewTitle: '',
            nickname: '',
            email: '',
            agreeTerms: false,
        },
        mode: 'onChange',
    });
    return (
        <div className="p-4 space-y-4">
            <div>
                <div className="pl-96">
                    <StatusBadge Children={'In progress'} />
                </div>
            </div>
            <h2 className="text-lg font-bold">Rate the Product</h2>
            {/* Star Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Quantity</div>
                <div className="pt-5">
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field }) => (
                            <StarRating totalStars={5} initialRating={field.value} width={35} height={35} className="bg-gray-300" />
                        )}
                    />
                </div>
            </div>
            {/* Star Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Value</div>
                <div className="pt-5">
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field }) => (
                            <StarRating totalStars={5} initialRating={field.value} width={35} height={35} className="bg-gray-300" />
                        )}
                    />
                </div>
            </div>
            {/* Star Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Scent</div>
                <div className="pt-5">
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field }) => (
                            <StarRating totalStars={5} initialRating={field.value} width={35} height={35} className="bg-gray-300" />
                        )}
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <PrimaryButton onClick={onSubmit} className="w-full font-bold hover:bg-blue-700">Submit</PrimaryButton>
                <PrimaryButton className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">Skip</PrimaryButton>
            </div>
        </div>
    );
};

export default ProductRating;
