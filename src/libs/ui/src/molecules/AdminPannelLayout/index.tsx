import React, { useState, useEffect } from 'react';
import Header from '../AdminPannelHeader';
import Sidebar from '../AdminPannelSidebar';

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
    <div className='Admin-Pannel'>
      <div className='h-screen flex flex-col'>
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
        />

        <div className='flex h-full pt-16'>
          <Sidebar isSidebarOpen={isSidebarOpen} />

          <main
            className={`flex-1 p-6 transition-all duration-300 bg-gray-50
              ${isSidebarOpen ? 'ml-64' : 'ml-0 lg:ml-20'}`}
          >
            <div className='max-w-7xl mx-auto'>
              <h2 className='text-2xl font-semibold mb-6'>Welcome Back</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3].map((item) => (
                  <div key={item} className='bg-white p-6 rounded-lg shadow-sm'>
                    <h3 className='text-lg font-medium mb-2'>Card {item}</h3>
                    <p className='text-gray-600'>
                      Sample content for demo purposes
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
