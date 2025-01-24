import { useEffect, useState } from 'react';
import {
  useLazyGetAllOrdersQuery,
  useUpdateOrderMutation,
} from '@store/services/Endpoints/OrderApi';
import OrderManagement from '@ui/molecules/OrderManagement';
import ConfirmationModal from '@ui/molecules/ConfirmationModal';
import OrderManagementSkeleton from '@ui/molecules/OrderManagementSkeleton';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useNavigate } from 'react-router-dom';
import OrderHistoryInvoice from '@ui/organisms/OrderHistoryInvoice';
interface OrderData {
  orderStatus: string | undefined;
  estimatedDelivery?: string;
  comments?: CommentData[];
}
interface CommentData {
  userId: string | undefined;
  message: string;
}
interface UpdateOrderParams {
  orderId: string | undefined;
  orderData: OrderData;
}
function OrderListTemplate() {
  const [page, setPage] = useState(1);

  const [orderToDelete, setorderToDelete] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('Pending');
  const [oderID, setOrderID] = useState<string>('');
  const [comment, setcomment] = useState<string>('orderStatus changed to Cancelled');
  const [showInvoice, setShowInvoice] = useState(false);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const navigate = useNavigate();
  const [fetchOrders, { data, isLoading, isError ,}] =
    useLazyGetAllOrdersQuery();
  const userId = useSelector(
    (state: RootState) => state.authSlice.userInfo?._id
  );
  const [updateOrder] = useUpdateOrderMutation();
  useEffect(() => {
    fetchOrders({
      page: page,
      limit: 10,
      orderId: searchTerm,
      orderStatus: statusFilter,
    });
  }, [fetchOrders, page, searchTerm, statusFilter]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, statusFilter]);

  const handleDelete = (id: string, orderId: string) => {
    setOrderID(orderId);
    setorderToDelete(id);
    setShowModal(true);
  };

  const cancelDelete = () => {
    setorderToDelete('');
    setShowModal(false);
  };

  const confirmDelete = async () => {
    try {
      const updatePayload: UpdateOrderParams = {
        orderId: orderToDelete,
        orderData: {
          orderStatus: 'Cancelled',
          comments: [
            {
              userId: userId,
              message: comment,
            },
          ],
        },
      };

      const response = await updateOrder(updatePayload);
      console.log('Order updated successfully:', response);
      if (response.data) {
        console.log('Order updated successfully:', response);
        navigate('/admin/orders');
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }

    setShowModal(false);
  };
  console.log('order',selectedOrder);
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <OrderManagementSkeleton />
      ) : isError ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Failed to fetch orders. Please try again later.
        </div>
      ) : (
        <>
          <OrderManagement
            orders={data?.data?.orders || []}
            page={page}
            setPage={setPage}
            totalPages={data?.data?.meta?.totalPages || 1}
            handleDelete={handleDelete}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            setShowInvoice={setShowInvoice}
            setSelectedOrder={setSelectedOrder}
          />
          {showModal && (
            <ConfirmationModal
              onClose={cancelDelete}
              onConfirm={confirmDelete}
              message={
                <div className="text-left">
                  <p>
                    Do you really want to Cancel this order{' '}
                    <span className="font-HeroNewBold">{oderID}</span> ? This
                    process cannot be undone.
                  </p>
                  <label htmlFor="deleteComment" className="block mt-4">
                    Add a comment
                  </label>
                  <input
                    id="deleteComment"
                    type="text"
                    className="border rounded-md p-2 mt-2 w-full"
                    placeholder="Add a comment"
                    required
                    onChange={(e) => setcomment(e.target.value)}
                  />
                </div>
              }
            />
          )}
          {showInvoice && selectedOrder && (
            <OrderHistoryInvoice
              order={selectedOrder}
              onClose={() => setShowInvoice(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default OrderListTemplate;
