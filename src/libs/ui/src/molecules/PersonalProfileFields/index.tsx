import React, { useState } from 'react';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';

interface Field {
    label: string;
    value: string;
    editable?: boolean; // Add editable property
    isMobileNumber?: boolean;
    className?: string;
}

interface PersonalProfileFieldsProps {
    className?: string;
    labelclassName?: string;
    paraclassName?: string;
    fields: Field[];
}

const PersonalProfileFields: React.FC<PersonalProfileFieldsProps> = ({
  fields,
  className,
  paraclassName,
  labelclassName,
}) => {
  // State to manage fields and edit mode
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedFields, setUpdatedFields] = useState(fields);
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [isFieldChanged, setIsFieldChanged] = useState(false); // Track if any field is changed
  const [hasInitialEditStarted, setHasInitialEditStarted] = useState(false); // Track initial edit state

  // Handle change in the input field
  const handleFieldChange = (index: number, value: string) => {
    const updated = [...updatedFields];
    updated[index].value = value;
    // Validate only if isMobileNumber is true
    if (updated[index].isMobileNumber) {
      if (!/^\d{10}$/.test(value)) {
        const errors = [...fieldErrors];
        errors[index] = 'Mobile Phone Number is invalid';
        setFieldErrors(errors);
      } else {
        const errors = [...fieldErrors];
        errors[index] = ''; // Clear the error
        setFieldErrors(errors);
      }
    } else {
      // Clear any previous error for non-mobile fields
      const errors = [...fieldErrors];
      errors[index] = '';
      setFieldErrors(errors);
    }
    setUpdatedFields(updated);
    setIsFieldChanged(true);
  };

  // Toggle between view and edit mode
  const toggleEditMode = () => {
    if (!isEditMode) {
      console.log('Fields before editing:', updatedFields);
      setHasInitialEditStarted(true); // Enable "inactive" Save button
    }
    setIsEditMode(!isEditMode);
    setIsFieldChanged(false); // Reset field changed status when switching to view mode
  };

  // Handle close button click
  const handleCloseEditMode = () => {
    setIsEditMode(false);
    setIsFieldChanged(false); // Reset field change status when closing edit mode
  };

  // Log data when saving the changes
  const handleSaveChanges = () => {
    console.log('Fields after editing:', updatedFields);
    setIsFieldChanged(false); // Disable save button after saving
    setHasInitialEditStarted(false); // Reset initial edit state
  };

  return (
    <div>
      <div className={`lg:grid-cols-2 grid lg:pt-8 gap-6 ${className}`}>
        {updatedFields.map((field, index) => (
          <div className={`email-wrapper ${isEditMode ? 'border-0' : ''} `} key={index}>
            <Paragraph
              className={`font-normal text-rgb(85 85 85 / var(--tw-bg-opacity)) leading-6 text-sm capitalize ${labelclassName}`}
            >
              {field.label}
            </Paragraph>

            {isEditMode && field.editable ? (
              <>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, e.target.value)}
                  className={`font-normal leading-6 p-2 border  ${
                    fieldErrors[index] ? 'border-red-500' : 'border-neutral-400'
                  } bg-appInputFieldColor w-[100%] `}
                               
                />
                {fieldErrors[index] && (
                  <span className="text-red-500 text-[16px] font-HeroNewBold ">{fieldErrors[index]}</span>
                )}
              </>
            ) : (
              <Paragraph className={`font-normal leading-6 ${paraclassName}`}>
                {field.value}
              </Paragraph>
            )}
          </div>
        ))}
      </div>

      <div className="request-info-update-wrapper">
        <div className={`w-full mt-8 bg-[#e6e7eb] ${className}`}>
          <div className="w-full p-8 lg:w-[672px]">
            <Paragraph className={`mb-6 ${paraclassName}`}>
                            Need to make changes to your information shown above? Submit a request form and our customer service team will make the changes.
            </Paragraph>

            <ButtonWithTextAndIcon
              onClick={() => {
                if (isEditMode) {
                  handleSaveChanges(); // Log the updated data when saving
                }
                toggleEditMode();
              }}
              className={`${isEditMode
                ? isFieldChanged
                  ? '!bg-appTheme text-white'
                  : 'bg-[#9a9998] text-white'
                : '!bg-appTheme text-white'
              } !border-none hover:!bg-black hover:!border-none font-HeroNewBold   ${isEditMode ? 'w-[140px] h-[48px]' : ''} `}
              disabled={!isFieldChanged && isEditMode && hasInitialEditStarted} // Disable the button if no field is changed in edit mode
            >
              {isEditMode ? 'Save Changes' : 'Request Information Update'}
            </ButtonWithTextAndIcon>
            {/* Close button, visible only in edit mode */}
            {isEditMode && (
              <ButtonWithTextAndIcon
                onClick={handleCloseEditMode}
                className="ml-4 w-[144px] h-[48px] border-none !bg-appTheme text-white hover:!bg-black hover:!border-none font-HeroNewBold"
              >
                                Close
              </ButtonWithTextAndIcon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfileFields;

