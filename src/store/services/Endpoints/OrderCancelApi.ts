// const OrderCancelApi = async (orderId: string, updateData: any) => {
//     const userUrl = import.meta.env.VITE_AUTH_URL;  // Replace with your base URL
//     const url = `${userUrl}/api/order/update/${orderId}`;
    
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to update order');
//       }
  
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error("Error updating order:", error);
//       throw error;
//     }
//   };
//   export const { use } = OrderCancelApi;