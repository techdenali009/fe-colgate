import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BiCamera, BiMapPin, BiUser } from 'react-icons/bi';
import { InputField } from '../FormField';
import { Label } from '@ui/atoms/Label';
import { BsMailbox } from 'react-icons/bs';
import ReviewDropdown from '../ReviewDropdown';
interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  _id: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  status: string;
  address: Address;

}
interface EditUserFormProps {
  userData: User;
  isSubmitting: boolean;
  onSubmit: (updatedUser: User) => void;
  onCancel: () => void;
}
const EditUserForm: React.FC<EditUserFormProps> = ({
  userData,
  isSubmitting,
  onSubmit,
  onCancel,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>({
    defaultValues: userData,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default behavior
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };
  useEffect(() => {
    setValue('firstName', userData.firstName);
    setValue('lastName', userData.lastName);
    setValue('email', userData.email);
    setValue('userType', userData.userType);
    setValue('status', userData.status);
    setValue('address', userData.address);
  }, [userData, setValue]);

  const handleFormSubmit = (data: User) => {
    onSubmit(data);
  };
  const [isOpen, setIsOpen] = useState(false);
  const userTypes = ['admin', 'user', 'operator']; // Dropdown options
  return (
    <div className="min-h-screen ">
      <div className=" border-b rounded-2xl   top-0 z-50 font-HeroNewLight">
        {/* Main Content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Desktop Header - Hidden on Mobile */}
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Profile Card */}
            <div
              id="profile"
              className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100  shadow-custom" 
            >
              <div className=" items-center lg:flex-row lg:items-start gap-6 lg:gap-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="group relative">
                    {/* Profile Avatar */}
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-4 border-white shadow-md">
                      <BiUser className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                    </div>

                    {/* Hidden File Input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    {/* Camera Button */}
                    <button
                      onClick={handleCameraClick}
                      className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg border border-gray-100 hover:border-appTheme transition-colors"
                    >
                      <BiCamera className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Upload new photo
                  </span>
                </div>

                <div className="flex-1 w-full mt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="block text-sm font-HeroNewLight text-gray-700 ml-1"
                      >
                        First Name
                      </Label>

                      <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field }) => (
                          <>
                            <InputField
                              {...field}
                              type="text"
                              id="firstName"
                              className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                                errors.firstName ? 'border-red-500' : ''
                              }`}
                            />
                            {errors.firstName && (
                              <span className="text-red-500 text-sm">
                                {errors.firstName.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </Label>
                      <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: 'Last name is required' }}
                        render={({ field }) => (
                          <>
                            <InputField
                              {...field}
                              type="text"
                              id="lastName"
                              className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                                errors.lastName ? 'border-red-500' : ''
                              }`}
                            />
                            {errors.lastName && (
                              <span className="text-red-500 text-sm">
                                {errors.lastName.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div
              id="contact"
              className="bg-white rounded-xl shadow-custom p-4 sm:p-6 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BsMailbox className="w-5 h-5 text-appTheme" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <InputField
                          {...field}
                          type="email"
                          id="email"
                          readOnly
                          className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            {errors.email.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="address.phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </Label>
                  <Controller
                    name="address.phone"
                    control={control}
                    rules={{
                      required: 'Phone is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Phone number must be 10 digits',
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <InputField
                          {...field}
                          type="text"
                          id="address.phone"
                          className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                            errors.address?.phone ? 'border-red-500' : ''
                          }`}
                          placeholder="Enter your phone"
                        />
                        {errors.address?.phone && (
                          <span className="text-red-500 text-sm">
                            {errors.address?.phone.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Account Settings Card */}
            <div
              id="account"
              className="bg-white rounded-xl shadow-custom p-4 sm:p-6 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BiUser className="w-5 h-5 text-appTheme" />
                Account Settings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="">
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Type
                  </label>
                  <Controller
                    name="userType"
                    control={control}
                    rules={{ required: 'User type is required' }}
                    render={({ field: { value, onChange } }) => (
                      <ReviewDropdown
                        label={value || 'Select User Type'}
                        items={userTypes}
                        selectedItems={value ? [value] : []}
                        onItemClick={(item) => onChange(item)} // Update field value on selection
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        className={`w-full !rounded-lg mt-3 ${
                          errors.userType ? 'border-red-500' : 'border-gray-200'
                        }`}
                        selectdropclassName="w-full max-h-40 overflow-y-auto"
                        labelclassName="text-sm"
                        
                        IoMdAddCircleOutlineclassName="hidden"
                      />
                    )}
                  />
                  {errors.userType && (
                    <span className="text-red-500 text-sm">
                      {errors.userType.message}
                    </span>
                  )}
                </div>
                {/* redio button */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Status
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <Controller
                      name="status"
                      control={control}
                      render={({ field }) => (
                        <>
                          {/* Radio Button for Active */}
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="active"
                              checked={field.value === 'active'} // Dynamically checked
                              onChange={(e) => field.onChange(e.target.value)} // Update state on change
                              className="form-radio h-4 w-4 text-appTheme"
                            />
                            <span className="ml-2 text-sm sm:text-base text-gray-700">
                              Active
                            </span>
                          </label>

                          {/* Radio Button for Inactive */}
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="inactive"
                              checked={field.value === 'inactive'} // Dynamically checked
                              onChange={(e) => field.onChange(e.target.value)} // Update state on change
                              className="form-radio h-4 w-4 text-appTheme mt-4 mb-4"
                            />
                            <span className="ml-2 text-sm sm:text-base text-gray-700">
                              Inactive
                            </span>
                          </label>
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div
              id="address"
              className="bg-white rounded-xl shadow-custom p-4 sm:p-6 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BiMapPin className="w-5 h-5 text-appTheme" />
                Address Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label
                    htmlFor="address.street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </Label>
                  <Controller
                    name="address.street"
                    control={control}
                    rules={{ required: 'Street address is required' }}
                    render={({ field }) => (
                      <>
                        <textarea
                          {...field}
                          id="address.street"
                          className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                            errors.address?.street ? 'border-red-500' : ''
                          }`}
                          rows={3} // Adjust the number of rows as needed
                          placeholder="Enter your street address"
                        >
                        </textarea>
                        {errors.address?.street && (
                          <span className="text-red-500 text-sm">
                            {errors.address?.street.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label
                      htmlFor="address.city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </Label>
                    <Controller
                      name="address.city"
                      control={control}
                      rules={{ required: 'City is required' }}
                      render={({ field }) => (
                        <>
                          <InputField
                            {...field}
                            type="text"
                            id="address.city"
                            className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                              errors.address?.city ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your  City"
                          />
                          {errors.address?.city && (
                            <span className="text-red-500 text-sm">
                              {errors.address?.city.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="address.state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </Label>
                    <Controller
                      name="address.state"
                      control={control}
                      rules={{ required: 'State is required' }}
                      render={({ field }) => (
                        <>
                          <InputField
                            {...field}
                            type="text"
                            id="address.state"
                            className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                              errors.address?.state ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your  state"
                          />
                          {errors.address?.state && (
                            <span className="text-red-500 text-sm">
                              {errors.address?.state.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label
                      htmlFor="address.country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </Label>
                    <Controller
                      name="address.country"
                      control={control}
                      rules={{ required: 'Country is required' }}
                      render={({ field }) => (
                        <>
                          <InputField
                            {...field}
                            type="text"
                            id="address.country"
                            className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                              errors.address?.country ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your country"
                          />
                          {errors.address?.country && (
                            <span className="text-red-500 text-sm">
                              {errors.address?.country.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="address.zipCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </Label>
                    <Controller
                      name="address.zipCode"
                      control={control}
                      rules={{ required: 'Zip code is required' }}
                      render={({ field }) => (
                        <>
                          <InputField
                            {...field}
                            type="text"
                            id="address.zipCode"
                            className={`mt-3 mb-3 block w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appTheme focus:border-appTheme transition-colors text-sm sm:text-base ${
                              errors.address?.zipCode ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your zipCode"
                          />
                          {errors.address?.zipCode && (
                            <span className="text-red-500 text-sm">
                              {errors.address?.zipCode.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Fixed at bottom on mobile */}
            <div className=" bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:relative lg:bg-transparent lg:border-0 lg:p-0 lg:mt-6">
              <div className="flex justify-end space-x-4 max-w-5xl mx-auto">
                <button
                  onClick={() => {
                    onCancel();
                  }}
                  type="button"
                  className="flex-1 lg:flex-none px-4 sm:px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appTheme transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 lg:flex-none w-40 px-4 sm:px-6 py-2.5 text-sm font-medium text-white bg-appTheme border border-transparent rounded-lg shadow-sm hover:bg-appTheme focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appTheme transition-colors"
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
