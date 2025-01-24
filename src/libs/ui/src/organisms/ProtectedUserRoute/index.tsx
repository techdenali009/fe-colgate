import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userInfo } = useSelector((state: RootState) => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
      toast.error('Please log in to access this page.', {
        position: 'top-right',
      }); 
    }
  }, [userInfo, navigate]);

  if (!userInfo) {
    return null;
  }

  return children;
};
