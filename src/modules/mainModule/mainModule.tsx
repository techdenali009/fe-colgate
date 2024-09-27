import Footer from '@ui/organisms/Footer';
import Header from '@ui/organisms/Header';
import LoginModal from '@ui/organisms/LoginModal';
import TopHeader from '@ui/organisms/TopHeader/TopHeader';
import { useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

// App level Module
export default function MainModule() {

  const [toggle, SetToggle] = useState(false);
  const navigate = useNavigate();

  const modalSetToggle = () => {
    SetToggle(!toggle);
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the /register route
  };
 

  return (
    <>
      {/* Header */}
      <div>
        <TopHeader></TopHeader>
        <Header modalSetToggle={modalSetToggle} handleRegisterClick={handleRegisterClick}></Header>
      </div>
      <>
        <Outlet />
      </>
      {/* Footer */}
      <Footer/>

      {toggle && <LoginModal closeModal={()=>{
        SetToggle(false)
      }}></LoginModal>}
       
    </>
  );
}
