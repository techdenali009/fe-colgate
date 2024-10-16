import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Modal from '@ui/atoms/Modal';
import StarRating from '@ui/molecules/HoveringRatingStar';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { InputField } from '@ui/molecules/FormField';
import responseProfile from '../../../assets/responsiveProfile.svg';
import CloseModal from '../../../assets/CloseModal.svg';
import { Image } from '@ui/atoms/Image';

interface ReviewBarModalProps {
  closeModal: () => void;
}

const ratingMessages = [
  "1 out of 5 stars selected. Product is Poor.",
];

const ReviewBarModal: React.FC<ReviewBarModalProps> = ({ closeModal }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      rating: 0,
      reviewText: '',
      reviewTitle: '',
      nickname: '',
      email: '',
      agreeTerms: false,
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    closeModal();
  };

  return (
    <div className="flex">
      <Modal onClose={closeModal} className=" bg-white rounded-lg shadow-lg relative h-full lg:!w-[780px] !p-0">
        <div className="flex items-center my-1.5 mx-1">
          <button
            role="button"
            aria-label="Close My review modal."
            onClick={closeModal}
            className="absolute right-4"
          >
            <Image src={CloseModal} alt="Close modal" className="w-6 h-6" />
          </button>
          <div className="flex items-center border-b border-gray-400 w-full ">
            <div className={`border-2 border-gray-300 px-3 pb-10 mr-1 flex items-start pt-2`}>
              <Image src={responseProfile} alt="" className="mr-3 w-10 h-10" />
            </div>
            <h1 className="text-lg font-bold text-black font-sans">My Review</h1>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div title="Your Review" className="h-[500px] mb-4">
            <p className="text-black font-sans text-base leading-[19.5px] border-b border-gray-300 m-0 p-[10px_30px]">
              Required fields are marked with *
            </p>
            <div className="flex items-center space-x-4 pt-7 pl-8">
              <div className="flex items-center justify-center w-6 h-6 border rounded-full text-sm font-semibold text-black">
                1
              </div>
              <h2 className="text-base text-black">Your reviews</h2>
              <div className="pl-96">
                <span className="px-2 py-1 ml-20 border border-pink-500 text-pink-600 rounded-md text-sm font-medium">
                  In progress
                </span>
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
                    <StarRating
                      totalStars={5}
                      initialRating={field.value}
                      onChange={(newRating: number) => field.onChange(newRating)}
                      width={35}
                      height={35}
                      className="bg-gray-300"
                    />
                  )}
                />
              </div>
              <p className="text-base text-black mt-2">{ratingMessages[control._formValues.rating]}</p>
            </div>

            {/* Review Text Section */}
            <div className="mb-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg text-black font-HeroNewBold pl-9">Review</h3>
                <a className="text-base text-blue-700 pr-8">Review guidelines</a>
              </div>

              <Controller
                name="reviewText"
                control={control}
                rules={{ required: 'Review is required', maxLength: { value: 50, message: 'Maximum length is 50 characters' } }}
                render={({ field }) => (
                  <>
                    <div className="pl-8">
                      <textarea
                        {...field}
                        className={`w-[700px] border ${errors.reviewText ? 'border-red-500' : 'border-gray-300'} p-2 mt-2 h-32 border-[#747474] rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)]`}
                        placeholder="Example: I bought this a month ago and am so happy that I did..."
                        onChange={(e) => field.onChange(e.target.value)} // Update the value correctly
                        value={field.value} // Ensure the value is correctly bound
                        maxLength={50} // Enforce max length directly on the input
                      />
                    </div>
                    <div className="flex justify-between mt-1 pl-96 ml-60">
                      {errors.reviewText && <span className="text-xs text-red-500">{errors.reviewText.message}</span>}
                      <span className="text-base">{field.value.length}/50 minimum</span>
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
                rules={{ required: 'Title is required', maxLength: { value: 50, message: 'Maximum length is 50 characters' } }}
                render={({ field }) => (
                  <>
                    <div className="pl-8">
                      <InputField
                        {...field}
                        className={`w-[700px] border ${errors.reviewTitle ? 'border-red-500' : 'border-gray-300'} p-2 mt-2 border-[#747474] rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)]`}
                        placeholder="Example: Great features!"
                        onChange={(e) => field.onChange(e.target.value)} // Update the value correctly
                        value={field.value} // Ensure the value is correctly bound
                        maxLength={50} // Enforce max length directly on the input
                      />
                    </div>
                    <div className="flex justify-between mt-1 pl-96 ml-60">
                      {errors.reviewTitle && <span className="text-xs text-red-500">{errors.reviewTitle.message}</span>}
                      <span className="text-base">{field.value.length}/50 maximum</span>
                    </div>
                  </>
                )}
              />
            </div>

            {/* Nickname Field */}
            <div className="mb-6">
              <h3 className="text-lg text-black font-HeroNewBold pl-9">Nickname*</h3>
              <Controller
                name="nickname"
                control={control}
                rules={{ required: 'Nickname is required', minLength: { value: 4, message: 'Nickname must be at least 4 characters long' } }}
                render={({ field }) => (
                  <>
                    <div className="pl-8">
                      <InputField
                        {...field}
                        className={`w-[700px] border ${errors.nickname ? 'border-red-500' : 'border-gray-300'} p-2 mt-2 border-[#747474] rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)]`}
                        placeholder="Example: bob27"
                        onChange={(e) => field.onChange(e.target.value)} // Update the value correctly
                        value={field.value} // Ensure the value is correctly bound
                      />
                    </div>
                    <div className="flex justify-between mt-1 pl-96 ml-60">
                      {errors.nickname && <span className="text-xs text-red-500">{errors.nickname.message}</span>}
                      <span className="text-base">{field.value.length}/4 Minimum</span>
                    </div>
                  </>
                )}
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <h3 className="text-lg text-black font-HeroNewBold pl-9">Email*</h3>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid email address',
                  }
                }}
                render={({ field }) => (
                  <>
                    <div className="pl-8">
                      <InputField
                        {...field}
                        className={`w-[700px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 mt-2 border-[#747474] rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)]`}
                        placeholder="Example: yourname@example.com"
                        onChange={(e) => field.onChange(e.target.value)} // Update the value correctly
                        value={field.value} // Ensure the value is correctly bound
                      />
                    </div>
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </>
                )}
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center mb-6 pl-6">
              <Controller
                name="agreeTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>
                    <span className="text-base text-black">
                      I agree to the <a href="#" className="text-blue-600">terms & conditions</a>
                    </span>
                    <div className="text-base text-black mt-1 pl-2">You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.</div>
                  </Checkbox>
                )}
              />
            </div>
            <div className="justify-end border-b border-gray-300 pl-8 pb-4">
              <PrimaryButton type="submit" className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition w-48 h-12">
                Submit
              </PrimaryButton>
            </div>
            <div className="flex flex-col space-y-4 p-6 pl-4">
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

          </div>
        </form>
      </Modal>
    </div>

  );
};

export default ReviewBarModal;
