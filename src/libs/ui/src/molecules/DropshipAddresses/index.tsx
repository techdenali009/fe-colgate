import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDeleteAddressMutation, useEditUserMutation, useGetUserByIdQuery, useUpdateAddressMutation } from '@store/services/Endpoints/UserApi';
import { PrimaryButton } from '../PrimaryButton';
import { Label } from '@ui/atoms/Label';
import { InputField } from '@ui/molecules/FormField';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { ValidationForm } from '@utils/Login';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineCall } from 'react-icons/md';

interface FormValues {
  Address: string;
  Address2: string;
  name: string;
  city: string;
  pinCode: string;
  state: string;
  Phone: string;
  _id: string;
}

const DropshipAddresses: React.FC = () => {
  const { handleSubmit, control, setValue, formState: { errors } } = useForm<FormValues>({ mode: 'onChange' });
  const [editUser] = useEditUserMutation();
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addedAddress, setAddedAddress] = useState<FormValues | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false); // New state to toggle form visibility
  // const getUser = useGetUserByIdQuery(userId?.addresses);
  const [updateAddress] = useUpdateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();
  const { data: user } = useGetUserByIdQuery(userId);
  console.log('addedAddress',addedAddress);

  const onSubmit = async (data: FormValues) => {
    try {
      const updatedUser = {
        name: data.name,
        addresses: {
          city: data.city,
          phone: data.Phone,
          state: data.state,
          street: data.Address,
          zipCode: data.pinCode,
          country: data.Address,  // Assuming country should also be addressed here
          id: data._id,
          name: data.name,
        }
      };

      if (userId) {
        // If editing, update the address
        if (isEditing && userId) {
          // Update existing address using updateAddress mutation
          await updateAddress({ userId: userId, id: data._id, updatedAddress: updatedUser.addresses });
          toast.success('Address updated successfully!');
        } else {
          // Add new address logic here if needed (e.g., if not editing)
          await editUser({ id: userId, updatedUser });
          toast.success('Address added successfully');
        }

        setAddedAddress(data);   //Save the submitted address
        setIsEditing(false);     // Set editing state to false
        setShowForm(false);      // Close form after submission
      } else {
        toast.error('User must be logged in first');
      }
    } 
    catch (error) {
      toast.error('Failed to save address. Please try again.');
      console.log('error',error);
    }
  };


  const handleEdit = async (address: { name: string; street: string; Address2:string; city: string; zipCode: string; state: string; phone: string; _id: string; }) => {
    setIsEditing(true);  // Enable editing mode
    setShowForm(true);   // Show the form

    // Set the form values to the current address data
    setValue('name', address.name);
    setValue('Address', address.street);
    setValue('Address2', address.Address2 || '');  // If Address2 exists, set it
    setValue('name', address.name);
    setValue('city', address.city);
    setValue('pinCode', address.zipCode);
    setValue('state', address.state);
    setValue('Phone', address.phone);
    setValue('_id', address._id); // Set the address ID so that it can be used in submission
  };

  const handleDelete = async (address: { _id: string; }) => {
    const user = userId;

    const id = address._id; // Get the address ID from the address object
    if (user) {
      // Pass both userId and addressId in the body
      await deleteAddress({ userId: user, id });
    }
  };

  const handleAddNewAddress = () => {
    setShowForm(true); // Show the form when adding a new address
    setAddedAddress(null); // Clear any existing address
    setIsEditing(false); // Ensure it's in "Add New Address" mode
  };
  const returnToAddress = () => {
    setShowForm(false);

  }

  // Fetch user details


  // if (isLoading) return <p>Loading user details...</p>;
  // if (error) return <p>Failed to load user details. Please try again later.</p>;
  
  return (
    <div className="lg:px-14 mx-5">
      {/* Toggle between form and display content */}
      {!showForm ? (
        <div className="mt-6">
          <div className='flex w-full'>
            <h2 className="text-4xl text-appTheme font-SansSerif">Dropship Addresses</h2>
  
          </div>
          <div className='lg:!justify-self-end 2xs:justify-self-start'>
            <PrimaryButton className='lg:mt-[-25px] mb-7  font-SansSerif font-semibold !text-[17px] px-6' onClick={handleAddNewAddress}>Add new Address</PrimaryButton>
          </div>
          {user && (
            <>
              {user.data?.addresses && user.data.addresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {user.data.addresses.map((address: any, index: number) => (
                    <div
                      key={address._id || index}
                      className="p-6 border rounded-lg shadow-md bg-white"
                    >
                      <p className='mb-4'><strong>{address.name}</strong> </p>
                      <div className='flex'>
                        <CiLocationOn className='text-appTheme h-[24px] w-[33px]' />
                        <span className='pl-4'>{address.country}</span>
                      </div>
                      <p className='pl-12'>{address.city}, {address.state}</p>
                      <p className='pl-12'>{address.zipCode}</p>
                      <br />
                      <div className='flex'> <MdOutlineCall className='text-appTheme h-[24px] w-[33px] ' /><span className='pl-4'>{address.phone}</span></div>
                      <div className="flex mt-4">
                        <PrimaryButton className='bg-transparent font-SansSerif font-semibold !text-appTheme hover:bg-transparent hover:text-appTheme hover:no-underline' onClick={() => handleEdit(address)}>
                            Edit
                        </PrimaryButton>
                        <PrimaryButton
                          onClick={() => handleDelete(address)}
                          className="bg-transparent !text-appTheme font-SansSerif font-semibold hover:bg-transparent hover:text-appTheme hover:no-underline"
                        >
                            Delete
                        </PrimaryButton>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No addresses available.</p>
              )}
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="inline-grid w-full">
          {/* Form Header */}
          <div className="text-start">
            <p className="text-[32px] mb-[32px] font-HeroNewRegular text-appTheme">
              {isEditing ? 'Edit Address' : 'Add New Address'}
            </p>
          </div>
          <div className='md:!justify-self-end lg:mt-[-65px]   2xs:justify-self-start'>
            <PrimaryButton className=' mb-6 font-SansSerif font-semibold !text-[17px] px-6' onClick={returnToAddress}>Return to dropship address book</PrimaryButton>
          </div>
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
            rules={{}}
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
                {errors.city && (
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
            rules={{
              required: ValidationForm.PhoneIsRequired, // Required validation
              pattern: {
                value: /^[0-9]{10}$/, // Regex to ensure exactly 10 digits
                message: 'Phone number must be 10 digits without dashes or parentheses',
              },
            }}
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
      )}
    </div>
  );
}

export default DropshipAddresses;
