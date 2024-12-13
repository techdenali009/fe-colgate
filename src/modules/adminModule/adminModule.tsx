import AdminLayout from '@ui/organisms/AdminPannelLayout';
import { Outlet } from 'react-router-dom';

function AdminModule() {
  return (
    <div className='lg:flex flex-grow pt-16 '>
      <AdminLayout />
      <div className='lg:flex-grow lg:ml-20   lg:mx-0 lg:p-6  p-2 bg-white dark:bg-appdarkcolor  h-[calc(100vh-64px)]'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminModule;
