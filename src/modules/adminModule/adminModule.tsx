import AdminLayout from '@ui/organisms/AdminPannelLayout';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function AdminModule() {
  return (
    <div className='lg:flex flex-grow pt-20 '>
      <AdminLayout />
      <div className='lg:flex-grow lg:ml-20   lg:mx-0    p-2 bg-white dark:bg-appdarkcolor   '>
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminModule;
