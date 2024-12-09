import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEditUserMutation } from '@store/services/Endpoints/UserApi';
import { PrimaryButton } from '../PrimaryButton';
import { Label } from '@ui/atoms/Label';
import { InputField } from '@ui/molecules/FormField';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { ValidationForm } from '@utils/Login';

interface FormValues {
  Address: string;
  Address2: string;
  name: string;
  city: string;
  pinCode: string;
  state: string;
  Phone: string;
}

const DropshipAddresses: React.FC = () => {
  const { handleSubmit, control, setValue, formState: { errors } } = useForm<FormValues>({ mode: 'onChange' });
  const [editUser] = useEditUserMutation();
  const userId = useSelector((state: RootState) => state.authSlice.userInfo);
  const [addedAddress, setAddedAddress] = useState<FormValues | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const updatedUser = {
        name: data.name,
        address: {
          city: data.city,
          phone: data.Phone,
          state: data.state,
          street: data.Address,
          zipCode: data.pinCode,
          country: data.Address
        },
      };
      if(userId?._id){
        await editUser({ id: userId?._id, updatedUser });
        setAddedAddress(data); // Save the submitted address
        setIsEditing(false); // Hide the form
        toast.success('Address updated successfully!');
      }
      else{
        toast.error('User has to be login first');
      }
    } catch {
      toast.error('Failed to update address. Please try again.');
    }
  };

  const handleEdit = () => {
    if (addedAddress) {
      // Populate form fields with the existing address data
      Object.keys(addedAddress).forEach((key) => {
        setValue(key as keyof FormValues, addedAddress[key as keyof FormValues]);
      });
      setIsEditing(true);
    }
  };

  const handleDelete = () => {
    setAddedAddress(null); // Clear the address
    setIsEditing(false); // Reset the form
    toast.success('Address deleted successfully!');
  };

  return (
    <div className="lg:px-14 mx-5">
      {!addedAddress || isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="inline-grid w-full">
          {/* Form Header */}
          <div className="text-start">
            <p className="text-[32px] mb-[32px] font-HeroNewRegular text-appTheme">
              {isEditing ? 'Edit Address' : 'Add New Address'}
            </p>
          </div>
  
          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full mb-6">
                <div className="flex items-center">
                  <Label>Name</Label>
                  <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                </div>
                <InputField
                  type="text"
                  id="name"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.name ? 'border-formFieldBorder' : 'border-slate-300'}
                    focus:outline-none`}
                />
                {errors.name && (
                  <span className="text-appErrorMessage text-normal font-HeroNewBold">
                    {ValidationForm.NameIsRequired}
                  </span>
                )}
              </div>
            )}
          />
  
          {/* Address Fields */}
          <Controller
            name="Address"
            control={control}
            rules={{ required: ValidationForm.AddressIsRequired }}
            render={({ field }) => (
              <div className="relative w-full mb-6">
                <div className="flex items-center">
                  <Label>Address</Label>
                  <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                </div>
                <InputField
                  type="text"
                  id="Address"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.Address ? 'border-formFieldBorder' : 'border-slate-300'}
                    focus:outline-none`}
                />
                {errors.Address && (
                  <span className="text-appErrorMessage text-normal font-HeroNewBold">
                    {ValidationForm.AddressIsRequired}
                  </span>
                )}
              </div>
            )}
          />
          <Controller
            name="Address2"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full mb-6">
                <InputField
                  type="text"
                  id="Address"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.Address ? 'border-formFieldBorder' : 'border-slate-300'}
                    focus:outline-none`}
                />
               
              </div>
            )}
          />
          {/* city */}
          <Controller
            name="city"
            control={control}
            rules={{ required: ValidationForm.CityIsRequired }}
            render={({ field }) => (
              <div className="relative w-full mb-6">
                <div className="flex items-center">
                  <Label>City</Label>
                  <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                </div>
                <InputField
                  type="text"
                  id="city"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.Phone ? 'border-formFieldBorder' : 'border-slate-300'}
                    focus:outline-none`}
                />
                {errors.Phone && (
                  <span className="text-appErrorMessage text-normal font-HeroNewBold">
                    {ValidationForm.CityIsRequired}
                  </span>
                )}
              </div>
            )}
          />
  
          {/* State and Zip Code */}
          <div className="flex w-full mb-6">
            {/* State */}
            <Controller
              name="state"
              control={control}
              rules={{ required: ValidationForm.StateRequired }}
              render={({ field }) => (
                <div className="w-1/2 pr-4">
                  <div className="flex items-center">
                    <Label>State</Label>
                    <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                  </div>
                  <select
                    {...field}
                    className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                      ${errors.state ? 'border-formFieldBorder' : 'border-slate-300'}
                      focus:outline-none`}
                  >
                    <option value="">Select</option>
                    <option value="New York">Alabama</option>
                    <option value="Los Angeles">Alaska</option>
                    {/* Additional options */}
                  </select>
                  {errors.state && (
                    <span className="text-appErrorMessage text-normal font-HeroNewBold">
                      {ValidationForm.StateRequired}
                    </span>
                  )}
                </div>
              )}
            />
  
            {/* Zip Code */}
            <Controller
              name="pinCode"
              control={control}
              rules={{
                required: ValidationForm.ZipCodeRequired,
                pattern: {
                  value: /^\d{6}$/,
                  message: ValidationForm.ZipCodeRequired
                },
              }}
              render={({ field }) => (
                <div className="w-1/2">
                  <div className="flex items-center">
                    <Label>Zip Code</Label>
                    <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                  </div>
                  <InputField
                    type="text"
                    id="pinCode"
                    placeholder=""
                    {...field}
                    className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                      ${errors.pinCode ? 'border-formFieldBorder' : 'border-slate-300'}
                      focus:outline-none`}
                  />
                  {errors.pinCode && (
                    <span className="text-appErrorMessage text-normal font-HeroNewBold">
                      {errors.pinCode.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
  
          {/* Phone Number */}
          <Controller
            name="Phone"
            control={control}
            rules={{ required: ValidationForm.PhoneIsRequired }}
            render={({ field }) => (
              <div className="relative w-full mb-6">
                <div className="flex items-center">
                  <Label>Phone (No parenthesis or dashes)</Label>
                  <Label className="ml-1 text-s font-HeroNewLight text-red-600"> *</Label>
                </div>
                <InputField
                  type="text"
                  id="Phone"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.Phone ? 'border-formFieldBorder' : 'border-slate-300'}
                    focus:outline-none`}
                />
                {errors.Phone && (
                  <span className="text-appErrorMessage text-normal font-HeroNewBold">
                    {ValidationForm.PhoneIsRequired}
                  </span>
                )}
              </div>
            )}
          />
  
          {/* Submit Button */}
          <PrimaryButton className='w-40 !m-0' onClick={handleSubmit(onSubmit)}>
            {isEditing ? 'Save Changes' : 'Add Address'}
          </PrimaryButton>
        </form>
      ) : (
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Added Address</h2>
          <PrimaryButton>Add new Address</PrimaryButton>
          <p><strong>Name:</strong> {addedAddress.name}</p>
          <p><strong>Address:</strong> {addedAddress.Address}, {addedAddress.Address2}</p>
          <p><strong>City:</strong> {addedAddress.city}</p>
          <p><strong>State:</strong> {addedAddress.state}</p>
          <p><strong>Pin Code:</strong> {addedAddress.pinCode}</p>
          <p><strong>Phone:</strong> {addedAddress.Phone}</p>
          <div className="flex gap-4 mt-4">
            <PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
            <PrimaryButton onClick={handleDelete} className="bg-red-500">Delete</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropshipAddresses;
