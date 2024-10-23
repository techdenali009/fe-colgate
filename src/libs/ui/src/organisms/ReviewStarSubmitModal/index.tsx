import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { InputField } from '@ui/molecules/FormField';
import StarRating from '@ui/molecules/HoveringRatingStar';
import StatusBadge from '@ui/molecules/StatusBadges';
import { useDispatch } from 'react-redux';
import { setReviewData } from '../../../../../store/services/Slices/ReviewFormModalSlice';
import { AppDispatch } from '../../../../../store/store';
import ReviewGuideLines from '../ReviewGuideLinesModal';

const ratingMessages = [
    "1 out of 5 stars selected. Product is Poor.",
    "2 out of 5 stars selected. Product is Fair.",
    "3 out of 5 stars selected. Product is Average.",
    "4 out of 5 stars selected. Product is Good.",
    "5 out of 5 stars selected. Product is Excellent."
];

interface ReviewFormProps {
    onSubmit: (data: any) => void;
}

const ReviewStarSubmit: React.FC<ReviewFormProps> = ({ onSubmit }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
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

    const dispatch = useDispatch<AppDispatch>();

    const handleFormSubmit = (data: any) => {
        dispatch(setReviewData(data));
        onSubmit(data);
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    function trigger(_arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex items-center space-x-4 pt-7 pl-8">
                <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full text-sm font-semibold text-black">
                    1
                </div>
                <h2 className="text-base text-black">Your reviews</h2>
                <div className="pl-96">
                    <StatusBadge Children={'In progress'} />
                </div>
            </div>


            {/* Star Rating Section */}
            <div className="mb-6 pt-7 pl-9">
                <div className="text-lg text-black font-HeroNewBold">Overall Rating*</div>
                <div className="pt-5">
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field }) => (
                            <StarRating totalStars={5} initialRating={field.value} width={35} height={35} className="bg-gray-300" />
                        )}
                    />
                </div>
                <p className="text-base text-black mt-2">{ratingMessages[control._formValues.rating]}</p>
            </div>

            <div className="mb-2">
                {/* Review Title and Guidelines Link */}
                <div className="flex justify-between items-center">
                    <h3 className={`text-lg pl-9 font-HeroNewBold ${errors.reviewText ? 'text-red-500' : 'text-black'}`}>
                        Review
                    </h3>
                    <a onClick={openModal} className="text-base text-blue-700 pr-8">Review guidelines</a>
                    {isModalOpen && <ReviewGuideLines closeModal={closeModal} />}
                </div>

                {/* Controller for the Textarea */}
                <Controller
                    name="reviewText"
                    control={control}
                    rules={{
                        validate: (value) => {
                            if (value.length > 0 && value.length < 50) {
                                return 'Minimum 50 characters required';
                            }
                            return true;
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            {/* Textarea Input */}
                            <div className="pl-8">
                                <textarea
                                    {...field}
                                    className={`w-[700px] border p-2 mt-2 h-32 rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)] ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Example: I bought this a month ago and am so happy that I did..."
                                    maxLength={500} // Prevent users from entering too long reviews
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                    }}
                                    value={field.value}
                                    onBlur={() => trigger('reviewText')} // Trigger validation on blur
                                />
                            </div>
                            {/* Validation Error and Character Counter */}
                            <div className="flex justify-between mt-1 pl-96 ml-60">
                                {/* Error Message on Blur */}
                                {error && (
                                    <span className="text-xs text-red-500">
                                        {50 - field.value.length} characters too short {/* Show this only if validation fails */}
                                    </span>
                                )}
                                {/* Character Count - Initially and During Input */}
                                {!error && field.value.length < 50 && (
                                    <span className="text-base">
                                        {field.value.length === 0
                                            ? <span className="text-base">{field.value.length}/50 minimum</span>
                                            : `${50 - field.value.length} characters too short`}
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                />
            </div>

            {/* Review Title Section */}
            <div className="mb-6">
                <h3 className="text-lg text-black font-HeroNewBold pl-9">Review Title</h3>
                <Controller
                    name="reviewTitle"
                    control={control}
                    rules={{
                        maxLength: {
                            value: 50,
                            message: '',
                        },
                    }}
                    render={({ field }) => (
                        <>
                            <div className="pl-8">
                                <InputField
                                    {...field}
                                    className={`w-[700px] border border-gray-300 p-2 mt-2 rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)]`}
                                    placeholder="Example: Great features!"
                                    onChange={(e) => field.onChange(e.target.value)}
                                    value={field.value}
                                    maxLength={50}
                                />
                            </div>

                            {/* Character count logic */}
                            <div className="flex justify-between mt-1 pl-96 ml-60">
                                <span
                                    className={`text-base ${field.value.length === 50 ? 'text-red-500' : ''
                                        }`}
                                >
                                    {field.value.length}/50 maximum
                                </span>
                            </div>
                        </>
                    )}
                />
            </div>

            <div className="mb-6">
                <h3 className={`text-lg text-black font-HeroNewBold pl-9 ${errors.nickname ? 'text-red-500' : 'text-black'}`}>
                    Nickname*
                </h3>
                <Controller
                    name="nickname"
                    control={control}
                    rules={{
                        required: 'required',
                        validate: (value) => {
                            if (value.length > 0 && value.length < 4) {
                                return 'Minimum 4 characters required';
                            }
                            return true;
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            {/* Input Field */}
                            <div className="pl-8">
                                <InputField
                                    {...field}
                                    className={`w-[700px] border p-2 mt-2 rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)] ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Example: bob27"
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                />
                            </div>

                            {/* Error Message and Character Count */}
                            <div className="flex justify-between mt-1 pl-96 ml-60">
                                {/* Display validation error */}
                                {error && (
                                    <span className="text-xs text-red-500">
                                        {(field.value.length >= 1 && field.value.length < 4) ? `${4 - field.value.length} characters too short` : ``}
                                    </span>
                                )}

                                {error && (
                                    <span className="text-xs text-red-500">
                                        {field.value.length === 0 ? error.message : ``}
                                    </span>
                                )}

                                {/* Character count display */}
                                {!error && field.value.length < 4 && (
                                    <span className="text-base">
                                        {field.value.length === 0
                                            ? `${field.value.length}/4 minimum`
                                            : `${4 - field.value.length} characters too short`}
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                />
            </div>

            {/* Email Field */}
            <div className="mb-6">
                <h3 className={`text-lg text-black font-HeroNewBold pl-9 ${errors.email ? 'text-red-500' : 'text-black'}`}>
                    Email*
                </h3>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            {/* Input Field */}
                            <div className="pl-8">
                                <InputField
                                    {...field}
                                    className={`w-[700px] border p-2 mt-2 rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)] ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Example: yourname@example.com"
                                    onChange={(e) => field.onChange(e.target.value)}
                                    value={field.value}
                                />
                            </div>

                            {/* Error Message */}
                            <div className="flex justify-between mt-1 pl-96 ml-60">
                                {/* Display validation error */}
                                {error && (
                                    <span className="text-xs text-red-500">
                                        {error.message}
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                />
            </div>


            {/* Terms Agreement */}
            <div className="flex items-center mb-6 pl-6">
                <Controller
                    name="agreeTerms"
                    control={control}
                    rules={{
                        required: 'Required',
                    }}
                    render={({ field, fieldState: { error } }) => {
                        const { value, ...fieldWithoutValue } = field;
                        return (
                            <>
                                <Checkbox {...fieldWithoutValue} checked={field.value}>
                                    <span className="text-base text-black">
                                        I agree to the <a href="#" className="text-blue-600">terms & conditions</a>
                                    </span>
                                    <div className="text-base text-black mt-1 pl-2">
                                        You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.
                                    </div>
                                </Checkbox>
                                {error && (
                                    <span className="text-xs text-red-500 mt-2">
                                        {error.message}
                                    </span>
                                )}
                            </>
                        );
                    }}
                />
            </div>

            <div className="justify-end border-b border-gray-300 pl-8 pb-4">
                <PrimaryButton type="submit" className="px-6 py-2 font-bold bg-blue-600 text-white hover:bg-blue-700 transition w-48 h-12">
                    Submit
                </PrimaryButton>
            </div>
            <div className="flex flex-col space-y-4 p-6 pl-8">
                <div className="flex items-center border-b border-gray-300 pb-4 w-full">
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                        2
                    </div>
                    <div className="ml-4">
                        <h3 className="">Add images</h3>
                        <p className="">(Optional)</p>
                    </div>
                </div>
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
        </form>
    );
};

export default ReviewStarSubmit;
