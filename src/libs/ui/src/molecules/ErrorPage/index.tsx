import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({
  message = 'An unexpected error occurred.',
  onRetry,
}) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      navigate(-1); // Navigate back to the previous page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={handleRetry}
          className="px-4 py-2 bg-appTheme text-white rounded-md hover:bg-opacity-80 transition"
        >
          {onRetry ? 'Retry' : 'Go Back'}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
