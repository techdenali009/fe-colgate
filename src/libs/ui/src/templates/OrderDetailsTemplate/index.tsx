import { useLazyGetOrderByIdQuery } from '@store/services/Endpoints/OrderApi';
import OrderDetailsSkeleton from '@ui/molecules/OrderDetailsSkelton';
import OrderDetail from '@ui/organisms/OrderDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetailsTemplate() {
  const { id } = useParams<{ id: string }>();
  

  const [triggerGetOrderById, { data: orderData, isLoading }] =
    useLazyGetOrderByIdQuery();

  useEffect(() => {
    if (id) {
      triggerGetOrderById(id);
    }
  }, [id, triggerGetOrderById]);
  console.log('orderData',orderData);
  return (

    <>
      {isLoading ? (
        <OrderDetailsSkeleton />
      ) : (
        <OrderDetail
          orderData={orderData?.data?.order}
          isLoading={isLoading}
        />
      )}
    </>

  );
}
