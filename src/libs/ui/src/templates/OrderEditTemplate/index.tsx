import {
  useLazyGetOrderByIdQuery,
  useUpdateOrderMutation,
} from '@store/services/Endpoints/OrderApi';
import { RootState } from '@store/store';
import ErrorPage from '@ui/molecules/ErrorPage';
import OrderEditFormSkeleton from '@ui/molecules/OrderEditFormSkeleton';
import OrderEditForm from '@ui/organisms/OrderEditForm';
import { showErrorToast, showSuccessToast } from '@utils/toastUtils';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

interface OrderData {
  orderStatus?: string | undefined;
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

function OrderEditTemplate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [triggerGetOrderById, { data: orderData, isLoading, error }] =
    useLazyGetOrderByIdQuery();
  const [updateOrder] = useUpdateOrderMutation();
  const userId = useSelector(
    (state: RootState) => state.authSlice.userInfo?._id
  );
  useEffect(() => {
    if (id) {
      triggerGetOrderById(id);
    }
  }, [id, triggerGetOrderById]);

  const handleUpdate = async (
    estimatedDelivery: string,
    orderStatus: string | undefined,
    message: string
  ) => {
    try {
      // Build the orderData object dynamically to exclude undefined orderStatus
      const orderData: OrderData = {
        estimatedDelivery,
        comments: [
          {
            userId: userId,
            message,
          },
        ],
      };
  
      if (orderStatus!=='') {
        orderData.orderStatus = orderStatus; 
      }
  
      const updatePayload: UpdateOrderParams = {
        orderId: id,
        orderData,
      };
  
      const response = await updateOrder(updatePayload);
  
      if (response.data) {
        navigate('/admin/orders');
        showSuccessToast('Order Updated successfully', 'top-right');
      } else {
        showErrorToast(
          'Invalid status change. The order cannot move backward or skip steps.',
          'top-right'
        );
        console.log('Order updated successfully:', response.data);
        console.error('Error updating order:', response);
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
  

  return (
    <div>
      {isLoading ? (
        <OrderEditFormSkeleton />
      ) : error ? ( // Display the error component if there's an error
        <ErrorPage message={'404 error'} />
      ) : (
        orderData && (
          <OrderEditForm
            order={orderData?.data.order}
            onUpdate={handleUpdate}
          />
        )
      )}
    </div>
  );
}

export default OrderEditTemplate;
