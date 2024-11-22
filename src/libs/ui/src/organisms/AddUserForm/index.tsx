import React from 'react';
import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import { InputField } from '@ui/molecules/FormField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface UserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AddUserFormProps {
  isLoading: boolean;
  onSubmit: (data: UserFormData) => Promise<void>;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ isLoading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();
  const navigation = useNavigate();

  const handleCancel = () => {
    navigation('/admin/users');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <div className="flex items-center mb-2">
            <Label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </Label>
            <Label className="ml-1 text-sm font-heroNewLight font-sans text-red-600">
              *
            </Label>
          </div>
          <InputField
            id="firstName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white dark:border-gray-600"
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <div className="flex items-center mb-2">
            <Label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </Label>
            <Label className="ml-1 text-sm font-heroNewLight font-sans text-red-600">
              *
            </Label>
          </div>
          <InputField
            id="lastName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white dark:border-gray-600"
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <div className="flex items-center mb-2">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
          </Label>
          <Label className="ml-1 text-sm font-heroNewLight font-sans text-red-600">
            *
          </Label>
        </div>
        <InputField
          id="email"
          type="email"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white dark:border-gray-600"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center mb-2">
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </Label>
          <Label className="ml-1 text-sm font-heroNewLight font-sans text-red-600">
            *
          </Label>
        </div>
        <InputField
          id="password"
          type="password"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white dark:border-gray-600"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-start mt-6 space-x-3">
        <Button
          className=" py-3 px-4   text-appTextColor font-semibold rounded-lg  focus:outline-none focus:ring-2 text-gray-700 border-gray-300 border "
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className=" py-3 px-6 bg-appTheme text-white font-semibold rounded-lg hover:bg-appHoverColor focus:outline-none focus:ring-2 focus:ring-appHoverColor dark:bg-appHoverColor dark:hover:bg-appHoverColor"
        >
          {isLoading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default AddUserForm;
