import React, { useState, useEffect } from 'react';
import Header from '../../molecules/AdminPannelHeader';
import Sidebar from '../../molecules/AdminPannelSidebar';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='Admin-Pannel absloute flex flex-col'>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
      />

      
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-gray-900 bg-opacity-50 z-30'
          onClick={() => setIsSidebarOpen(false)}
        >
        </div>
      )}
      
    </div>
  );
};

export default AdminLayout;
