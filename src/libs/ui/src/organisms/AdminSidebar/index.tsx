import { Button } from '@ui/atoms/Button';
import { useNavigate } from 'react-router-dom';

function AdminSideBar() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-800 text-white flex flex-col p-4 space-y-4">
      <Button
        className="bg-gray-700 text-white hover:bg-gray-600 py-2 px-4 text-left"
        onClick={() => navigate('/admin/products')}
      >
        Products
      </Button>
      <Button
        className="bg-gray-700 text-white hover:bg-gray-600 py-2 px-4 text-left"
        onClick={() => navigate('/admin/users')}
      >
        User
      </Button>
      <Button
        className="bg-gray-700 text-white hover:bg-gray-600 py-2 px-4 text-left"
        onClick={() => navigate('/admin/orders')}
      >
        orders
      </Button>
    </div>
  );
}

export default AdminSideBar;
