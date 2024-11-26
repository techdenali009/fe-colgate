import React, { useEffect, useState } from 'react';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import { showSuccessToast } from '@utils/toastUtils';
import { Label } from '@ui/atoms/Label';
import { Controller, useForm } from 'react-hook-form';
import { InputField } from '../FormField';
import { ValidationForm } from '@utils/Login';
import { Paragraph } from '../Paragraph';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/store'; // Import RootState to access the redux store state
import { updateUserProfile } from '@store/services/Slices/authSlice';
// Import your action for updating the user profile

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  customerId: string;
}

interface PersonalProfileFieldsProps {
  className?: string;
}

const PersonalProfileFields: React.FC<PersonalProfileFieldsProps> = ({ className }) => {
  const dispatch = useDispatch(); // Use dispatch to send actions to Redux
  const {
    control,
   
    formState: { errors},
    handleSubmit,
    setValue, // Allows you to manually set form values
    getValues,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      email: '', // Default values will be populated from Redux
      customerId: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
    },
  });

  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasInitialEditStarted, setHasInitialEditStarted] = useState(false);
  // Fetching user info from the redux store
  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const isLoggedIn = userInfo && userInfo.email;
  
  useEffect(() => {
    if (isLoggedIn) {
      // Set the form fields from the redux store when user info is loaded
      setValue('email', userInfo.email ?? '');
      setValue('customerId', userInfo._id ?? '');
      setValue('firstName', userInfo.firstName ?? '');
      setValue('lastName', userInfo.lastName ?? '');
      setValue('mobileNumber', userInfo.mobileNumber ?? '');
    }
  }, [isLoggedIn, userInfo, setValue]); // Only run when user info or login status changes

  


  const toggleEditMode = () => {
   
    setHasInitialEditStarted(true);
   
    setIsEditMode(!isEditMode);
    setIsFieldChanged(false);
    if (isEditMode) setIsFieldChanged(false);
  };

  const handleSaveChanges = (data: FormValues) => {
    if (!userInfo) return;
    const userData = {
      ...data,
      _id: userInfo._id, // Add any missing fields
      status: userInfo.status,
      isActive: userInfo.isActive,
      createdAt: userInfo.createdAt,
      updatedAt: new Date().toISOString(),
    };
    // Dispatch the action to update the profile in Redux
    dispatch(updateUserProfile(userData));

    showSuccessToast('Profile updated successfully', 'top-right');
    setIsFieldChanged(false);
    setIsEditMode(false);
  };

  useEffect(() => {
    const isChanged =
      userInfo &&
      (userInfo.email !== getValues('email') ||
        userInfo._id !== getValues('customerId') ||
        userInfo.firstName !== getValues('firstName') ||
        userInfo.lastName !== getValues('lastName') ||
        userInfo.mobileNumber !== getValues('mobileNumber'));
  
    setIsFieldChanged(Boolean(isChanged));
  },  [getValues, userInfo]);
  

  return (
    <div>
      <form >
        <div className={`lg:grid-cols-2 grid lg:pt-8 gap-6 ${className}`}>
          {/* Email */}
          <div className="mb-2 inline-grid text-start">
            <div className="flex text-xs font-heroNewLight">
              <Label className="text-xs font-HeroNewRegular">Email</Label>
            </div>
            {!isEditMode ? (
              <p className="py-2  mt-1 text-base text-black border-[1px] border-transparent bg-transparent">
                {isLoggedIn ? userInfo.email : ''}
              </p>
            ) : (
              <Controller
                name="email"
                control={control}
                rules={{
                  required: ValidationForm.Required,
                  pattern: {
                    value: ValidationForm.EmailValidationRule,
                    message: ValidationForm.EmailRuleFailed,
                  },
                }}
                render={({ field }) => (
                  <InputField
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...field}
                    className={`h-12 rounded-none py-2 px-3 mt-1 text-base border-[1px] w-full text-black !bg-transparent
                    ${errors.email ? 'border-formFieldBorder' : 'border-black'}
                    ${isEditMode ? 'border-black' : 'border-transparent'}`}
                    disabled={!isEditMode || !isFieldChanged}
                  />
                )}
              />
            )}
            {errors.email && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.email.message}</span>}
          </div>

          {/* Customer ID */}
          <div className="mb-2 inline-grid text-start">
            <div className="flex text-xs font-heroNewLight">
              <Label className="text-xs font-HeroNewRegular">Customer Number</Label>
            </div>
            {!isEditMode ? (
              <p className="py-2  mt-1 text-base text-black border-[1px] border-transparent bg-transparent">
                {isLoggedIn ? userInfo._id : ''}
              </p>
            ) : (
              <Controller
                name="customerId"
                control={control}
                rules={{
                  required: 'Customer ID is required.',
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: 'Customer ID must be alphanumeric.',
                  },
                  minLength: {
                    value: 5,
                    message: 'Customer ID must be at least 5 characters long.',
                  },
                  maxLength: {
                    value: 40,
                    message: 'Customer ID must not exceed 20 characters.',
                  },
                }}
                render={({ field }) => (
                  <InputField
                    type="text"
                    id="customerId"
                    placeholder="Customer ID *"
                    {...field}
                    className={`h-12 rounded-none py-2 px-3 mt-1 text-base border-[1px] w-full text-black !bg-transparent
                    ${errors.customerId ? 'border-formFieldBorder' : 'border-black'} 
                    ${isEditMode ? 'border-black' : 'border-transparent px-0'}`}
                    disabled={!isEditMode || !isFieldChanged}
                  />
                )}
              />
            )}
            {errors.customerId && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.customerId.message}</span>}
          </div>

          {/* First Name */}
          <div className="mb-2 inline-grid text-start">
            <div className="flex text-xs font-heroNewLight">
              <Label className="text-xs font-HeroNewRegular">First Name</Label>
            </div>
            {!isEditMode ? (
              <p className="py-2  mt-1 text-base text-black border-[1px] border-transparent bg-transparent">
                {isLoggedIn ? userInfo.firstName : ''}
              </p>
            ) : (
              <Controller
                name="firstName"
                control={control}
                rules={{ required: ValidationForm.Required }}
                render={({ field }) => (
                  <InputField
                    type="text"
                    id="firstName"
                    placeholder="First Name *"
                    {...field}
                    className={`h-12 rounded-none py-2 px-3 mt-1 text-base border-[1px] w-full text-black !bg-transparent
                    ${errors.firstName ? 'border-formFieldBorder' : 'border-black'} 
                    ${isEditMode ? 'border-black' : 'border-transparent'}`}
                    disabled={!isEditMode}
                  />
                )}
              />
            )}
            {errors.firstName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.firstName.message}</span>}
          </div>

          {/* Last Name */}
          <div className="mb-2 inline-grid text-start">
            <div className="flex text-xs font-heroNewLight">
              <Label className="text-xs font-HeroNewRegular">Last Name</Label>
            </div>
            {!isEditMode ? (
              <p className="py-2  mt-1 text-base text-black border-[1px] border-transparent bg-transparent">
                {isLoggedIn ? userInfo.lastName : ''}
              </p>
            ) : (
              <Controller
                name="lastName"
                control={control}
                rules={{ required: ValidationForm.Required }}
                render={({ field }) => (
                  <InputField
                    type="text"
                    id="lastName"
                    placeholder="Last Name *"
                    {...field}
                    className={`h-12 rounded-none py-2 px-3 mt-1 text-base border-[1px] w-full text-black !bg-transparent
                    ${errors.lastName ? 'border-formFieldBorder' : 'border-black'} 
                    ${isEditMode ? 'border-black' : 'border-transparent'}`}
                    disabled={!isEditMode}
                  />
                )}
              />
            )}
            {errors.lastName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.lastName.message}</span>}
          </div>

          {/* Mobile Phone Number */}
          <div className="mb-2 inline-grid text-start">
            <div className="flex text-xs font-heroNewLight">
              <Label className="text-xs font-HeroNewRegular">Mobile Phone Number</Label>
            </div>
            {!isEditMode ? (
              <p className="py-2  mt-1 text-base text-black border-[1px] border-transparent bg-transparent">
                {isLoggedIn ? userInfo.mobileNumber : ''}
              </p>
            ) : (
              <Controller
                name="mobileNumber"
                control={control}
                rules={{
                  required: 'Mobile number is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Mobile number must be numeric.',
                  },
                  minLength: {
                    value: 10,
                    message: 'Mobile number must be at least 10 digits long.',
                  },
                }}
                render={({ field }) => (
                  <InputField
                    type="text"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    {...field}
                    className={`h-12 rounded-none py-2 px-3 mt-1 text-base border-[1px] w-full text-black !bg-transparent
                    ${errors.mobileNumber ? 'border-formFieldBorder' : 'border-black'} 
                    ${isEditMode ? 'border-black' : 'border-transparent'}`}
                    disabled={!isEditMode}
                  />
                )}
              />
            )}
            {errors.mobileNumber && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.mobileNumber.message}</span>}
          </div>
        </div>
      </form>
      {/* Button to toggle edit mode and save changes */}
      {/* Toggle Edit Mode Button */}
      <div className="mb-2">
        <div className="request-info-update-wrapper">
          <div className={`w-full mt-8 bg-[#e6e7eb] ${className}`}>
            <div className="w-full p-8 lg:w-[672px]">
              <Paragraph className={`mb-6 ${className}`}>
                Need to make changes to your information shown above? Submit a request form and our customer service team
                will make the changes.
              </Paragraph>

              <ButtonWithTextAndIcon
                onClick={handleSubmit((data) => {
                  if (isEditMode) {
                    handleSaveChanges(data); // Pass form data to the function
                  }
                  toggleEditMode();
                })}
                className={`${isEditMode
                  ? isFieldChanged
                    ? '!bg-appTheme text-white'
                    : '!bg-[#9a9998] text-white'
                  : '!bg-appTheme text-white'
                } !border-none hover:!bg-black hover:!border-none font-HeroNewBold   ${isEditMode ? 'w-[140px] h-[48px]' : ''}`}
                disabled={!isFieldChanged && isEditMode && hasInitialEditStarted}
              >
                {isEditMode ? 'Save Request' : 'Request Information Update'}
              </ButtonWithTextAndIcon>

              {isEditMode && (
                <ButtonWithTextAndIcon
                  onClick={handleSubmit((data) => {
                    if (isEditMode) {
                      handleSaveChanges(data); // Pass form data to the function
                    }
                    toggleEditMode();
                  })}
                  className="ml-4 w-[144px] h-[48px] border-none !bg-appTheme text-white hover:!bg-black hover:!border-none font-HeroNewBold"
                >
                  Close
                </ButtonWithTextAndIcon>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfileFields;

