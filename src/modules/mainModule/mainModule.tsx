import Footer from '@ui/organisms/Footer';
import Header from '@ui/organisms/Header';
import TopHeader from '@ui/organisms/TopHeader/TopHeader';

import { Outlet } from 'react-router-dom';

// App level Module
export default function MainModule() {
  return (
    <>
      {/* Header */}
      {/* <div>
        <TopHeader></TopHeader>
        <Header></Header>
      </div>
      <>
        <Outlet />
      </>
      {/* Footer */}
      <Footer/>
       
    </>
  );
}
