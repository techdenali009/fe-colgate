import { passwordRequirements } from '@utils/Login';

interface ValidationModalProps {
  password: string;
}

const ValidationModal: React.FC<ValidationModalProps> = ({ password }) => {
  const passwordContains= passwordRequirements;

  // Calculate how many criteria are met
  const calculateStrength = () => {
    let strength = 0;
    passwordContains.forEach((requirement) => {
      if (requirement.regex.test(password)) strength++;
    });
    return strength;
  };

  const strength = calculateStrength();

  // Ensure the progress bar is only filled when all conditions are met
  const getProgressBarStyle = () => {
    const width = strength === passwordContains.length ? '100%' : '20%';
    const color = strength === passwordContains.length ? 'bg-blue-500' : 'bg-red-500';
    return { width, color };
  };

  const progressBarStyle = getProgressBarStyle();

  return (
    <div
      data-popover
      id="popover-default"
      role="tooltip"
      className="w-[645px] h-auto text-black bg-slate-100 absolute z-10 inline-block w-auto text-sm transition-opacity duration-300 border border-gray-200 shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
    >
      {/* Header */}
      <div className="px-3 py-2 bg-slate-100 text-center border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-HeroNewBold text-[11px] text-gray-900 dark:text-white">
          Password Strength:{' '}
          <span className={`${strength === passwordContains.length ? 'text-blue-500' : 'text-red-500'}`}>
            {strength === passwordContains.length ? 'very strong' : '  Too weak'}
          </span>
        </h3>
      </div>
      <div className="w-[96%] m-2 bg-gray-300 h-[1px] rounded">
        <div
          className={`h-full rounded ${progressBarStyle.color}`}
          style={{ width: progressBarStyle.width }}
        >
        </div>
      </div>
      {/* Progress bar */}
      <div className="px-7 py-2 text-xs text-center">
        <p className="mb-3">
          Password must consist of at least 8 characters and meet 4 of the following requirements: an uppercase letter, a lowercase letter, a number, and a special symbol.
        </p>
      </div>

      {/* Triangle/Arrow pointing to the input field */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />
    </div>
  );
};

export default ValidationModal;
