import { CheckCircle2 } from 'lucide-react';
import { Button } from '@ui/atoms/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLazyVerifyAccountQuery } from '@store/services/Endpoints/AuthApi';
import { Image } from '@ui/atoms/Image';

const AccountVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyToken, { data, isLoading, isError }] = useLazyVerifyAccountQuery();

  useEffect(() => {
    try {
      const token = location.search?.split('?')[1]?.split('token=')[1];
      if (token) {
        verifyToken(token)
      }
    } catch (err) {
      console.log('err', err)
    }
  }, [location]);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className={`bg-white rounded-lg shadow-md p-8 text-center max-w-md w-full ${data ? '' : 'flex justify-center'}`}>
        {isLoading && (
          <>
            <Image src={'/assets/spinner.svg'}
              alt='loader' />
          </>
        )}
        {isError && (
          <div>
            <p className='gray mb-6'>Something went wrong please try again later!</p>
            <div className="space-y-4 flex justify-center">
              <Button
                className="p-3 bg-appTheme text-white rounded-md hover:bg-black  transition-colors"
                onClick={() => {
                  navigate('/')
                }}
              >Go to Dashboard
              </Button>
            </div>
          </div>)}
        {data && (
          <>
            <CheckCircle2 className="mx-auto h-20 w-20 text-green-500 mb-6" />

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Account Verified
            </h2>

            <p className="text-gray-600 mb-6">
                            Your account has been successfully verified. You can now access all features.
            </p>

            <div className="space-y-4">
              <Button
                className="w-full py-3 bg-appTheme text-white rounded-md hover:bg-black  transition-colors"
                onClick={() => {
                  navigate('/')
                }}
              >Go to Dashboard
              </Button>
            </div>
          </>)}
      </div>
    </div>
  );
};

export default AccountVerification;