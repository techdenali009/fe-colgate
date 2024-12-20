import {
  useLazyGetOrderByIdQuery,
  useUpdateOrderMutation,
} from '@store/services/Endpoints/OrderApi';
import { RootState } from '@store/store';
import AddCommentSkeleton from '@ui/atoms/AddCommentSkeleton';
import AddComment from '@ui/organisms/AddComment';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
interface OrderData {
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
function AddCommentTemplate() {
  const { id } = useParams<{ id: string }>();

  const [triggerGetOrderById, { data: orderData, isLoading }] =
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
  const hadleComment = async (newComment: string) => {
    try {
      const updatePayload: UpdateOrderParams = {
        orderId: id,
        orderData: {
          comments: [
            {
              userId: userId,
              message: newComment,
            },
          ],
        },
      };

      const response = await updateOrder(updatePayload);
      console.log('Order updated successfully:', response);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
  return (
    <div>
      {isLoading ? (
        <AddCommentSkeleton></AddCommentSkeleton>
      ) : (
        <AddComment
          comments={orderData?.data?.order?.comments}
          hadleComment={hadleComment}
        >
        </AddComment>
      )}
    </div>
  );
}

export default AddCommentTemplate;
