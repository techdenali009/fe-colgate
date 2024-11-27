import AdminHeader from '@ui/organisms/AdminHeader';
import AdminDashboard from '@ui/organisms/AdminPannelDashBoard';
import AdminSideBar from '@ui/organisms/AdminSidebar';

function AdminModule() {
  return (
    <div className='flex flex-col'>
      <div className='fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white z-10'>
        <AdminHeader />
      </div>

      <div className='lg:flex flex-grow pt-16'>
        <div className='lg:fixed top-16 left-0 w-64 bg-gray-800 text-white h-[calc(100vh-64px)] z-10 hidden lg:flex flex-col'>
          <AdminSideBar />
        </div>
    
        <div className='lg:flex-grow lg:ml-64 lg:mx-0 lg:p-6 p-2 bg-white dark:bg-appdarkcolor h-[calc(100vh-64px)]'>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminModule;
