import { toggleLoginModel} from '@store/services/Slices/ModalSlice';
import { RootState } from '@store/store';
import { ScrollToTop } from '@ui/molecules/ScrollUpMolecule';
import Footer from '@ui/organisms/Footer';
import Header from '@ui/organisms/Header';
import LoginModal from '@ui/organisms/LoginModal';
import TopHeader from '@ui/organisms/TopHeader/TopHeader';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// App level Module
export default function MainModule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Subscribe to the Redux state for modal toggle
  const isLoginModalOpen = useSelector((state: RootState) => state.modal.isLoginModalOpen);

  // Function to toggle modal visibility using Redux
  const modalSetToggle = () => {
    dispatch(toggleLoginModel());
  };

  // Navigate to the /register route
  const handleRegisterClick = () => {
    navigate('auth/register'); // Navigate to the /register route
  };

  return (
    <>
      {/* Header */}
      <div>
        <TopHeader />
        <Header modalSetToggle={modalSetToggle} handleRegisterClick={handleRegisterClick} />
      </div>
      <Outlet />

      {/* Footer */}
      <div>
        <Footer />
        <ScrollToTop />
      </div>
      {/* <ReviewModal></ReviewModal> */}
      {/* // Login MOdal  */}
      {isLoginModalOpen && (
        <LoginModal closeModal={modalSetToggle} />
       
      )}

    </>
  );
}
