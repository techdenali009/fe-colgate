import React, { useState } from 'react';
import {
  Package,
  CreditCard,
  Truck,
  MapPin,
  DollarSign,
  Calendar,
  Download,
  MessageCircle,
} from 'lucide-react';
import { formatTimeAgo } from '@utils/appFunctions';

import { format } from 'date-fns';
import OrderHistoryInvoice from '../OrderHistoryInvoice';
interface OrderEditFormProps {
  order: {
    _id: string;
    orderStatus: string;
    userId: string;
    paymentInfo: {
      method: string;
      status: string;
    };
    shippingAddress: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    };
    billingAddress: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    };
    products: Array<{
      product: {
        _id: string;
        name: string;
        images?: { url: string }[];
      };
      quantity: number;
      priceSnapshot: number;
      _id: string;
    }>;
    comments: Array<{
      userId: {
        _id: string;
        firstName: string;
        lastName: string;
      };
      message: string;
      _id: string;
      createdAt: string;
    }>;
    totalAmount: number;
    taxAmount: number;
    shippingCost: number;
    discount: {
      couponCode: string;
      amount: number;
    };
    estimatedDelivery: string;
    createdAt?: string;
    updatedAt?: string;
    orderId?: string;
  };
  onUpdate: (
    orderStatus: string,
    estimatedDelivery: string,
    message: string
  ) => void;
}

const OrderEditForm: React.FC<OrderEditFormProps> = ({ order, onUpdate }) => {
  const [formData, setFormData] = useState({
    orderStatus: order.orderStatus,
    paymentMethod: order.paymentInfo.method,
    paymentStatus: order.paymentInfo.status,
    shippingAddress: { ...order.shippingAddress },
    billingAddress: { ...order.billingAddress },
    discount: { ...order.discount },
    estimatedDelivery: order.estimatedDelivery,
    comment: { ...order.comments },
  });
  const [showInvoice, setShowInvoice] = useState(false);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const [orderDate, setOrderDate] = useState(
    order.estimatedDelivery
      ? new Date(order.estimatedDelivery).toISOString().slice(0, 10) // Initial value if estimatedDelivery exists
      : ''
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string,
    type: string | undefined
  ) => {
    const value = e.target.value;
    if (type === 'shipping' || type === 'billing') {
      setFormData((prev) => ({
        ...prev,
        [`${type}Address`]: {
          ...prev[`${type}Address`],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };
  const handeleDownload = () => {
    setShowInvoice(true);
    setSelectedOrder(order);
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = new Date();
    const timeString = currentTime.toTimeString().split(' ')[0];
    const milliseconds = currentTime.getMilliseconds();

    const formattedOrderDate = orderDate
      ? new Date(`${orderDate}T${timeString}.${milliseconds}Z`).toISOString()
      : '';

    const isStatusChanged =
      formData.orderStatus && formData.orderStatus !== order.orderStatus;

    const message = isStatusChanged
      ? `Status change from ${order.orderStatus} to ${formData.orderStatus}`
      : `Estimated delivery date updated from ${format(new Date(order.estimatedDelivery), 'dd-MM-yyyy')} to ${format(new Date(formattedOrderDate), 'dd-MM-yyyy')}`;
    // Dynamically call `onUpdate` with the appropriate data

    onUpdate(
      formattedOrderDate,
      isStatusChanged ? formData.orderStatus : '', // Pass orderStatus only if it has changed
      message
    );
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden font-HeroNewRegular">
      <div className="bg-gradient-to-r from-appTheme to-appTheme-opacity-80 p-6">
        <div className="flex items-center text-white justify-between">
          <div className="flex">
            <Package className="mr-3 w-8 h-8" />

            <h1 className="text-2xl font-bold uppercase">
              Order Edit(#{order.orderId})
            </h1>
          </div>
          <button
            className="px-6 py-2  text-white rounded-md  transition-all flex space-x-2"
            onClick={handeleDownload}
          >
            <Download></Download>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="md:p-6 space-y-6 p-0">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Products Table */}
      
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg md:p-5 p-2 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Ordered Products
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-200 text-left">
                  <tr>
                    <th className="p-2 font-semibold">Image</th>
                    <th className="p-2 font-semibold">Name</th>
                    <th className="p-2 font-semibold">Quantity</th>
                    <th className="p-2 font-semibold">Price</th>
                    <th className="p-2 font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((item) => (
                    <tr key={item._id} className="border-t">
                      <td className="p-2">
                        {item.product.images &&
                          item.product.images.length > 0 && (
                          <img
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        )}
                      </td>
                      <td className="p-2 text-gray-800">{item.product.name}</td>
                      <td className="p-2 text-gray-800">{item.quantity}</td>
                      <td className="p-2 text-gray-800">
                        <span>&#8377;</span>
                        {item.priceSnapshot.toFixed(2)}
                      </td>
                      <td className="p-2 text-gray-800">
                        <span>&#8377;</span>
                        {(item.quantity * item.priceSnapshot).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {order.products.map((item) => (
                <div
                  key={item._id}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    {item.product.images && item.product.images.length > 0 && (
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">Quantity</div>
                    <div className="text-right">{item.quantity}</div>

                    <div className="text-gray-600">Price</div>
                    <div className="text-right">
                      <span>&#8377;</span>
                      {item.priceSnapshot.toFixed(2)}
                    </div>

                    <div className="text-gray-600 font-semibold">Total</div>
                    <div className="text-right font-semibold">
                      <span>&#8377;</span>
                      {(item.quantity * item.priceSnapshot).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Order Summary */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <Calendar className="mr-2 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-lg font-bold text-appTheme">
                  <span>&#8377;</span>
                  {order.totalAmount.toFixed(2)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Tax Amount</p>
                <p className="text-lg font-bold text-green-600">
                  <span>&#8377;</span>
                  {order.taxAmount.toFixed(2)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Shipping Cost</p>
                <p className="text-lg font-bold text-appTheme">
                  <span>&#8377;</span>
                  {order.shippingCost.toFixed(2)}
                </p>
              </div>
              {order.estimatedDelivery && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <label className="block text-sm text-gray-500 mb-2">
                    <span className="text-gray-600">Estimated Delivery</span>
                  </label>
                  <input
                    type="date"
                    value={orderDate}
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value);
                      setOrderDate(selectedDate.toISOString().slice(0, 10)); // Update state with the selected date in yyyy-mm-dd format
                    }}
                    min={new Date(new Date().setDate(new Date().getDate() + 1))
                      .toISOString()
                      .slice(0, 10)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Order Status Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <CreditCard className="mr-2 text-appTheme" />
              <h2 className="text-lg font-semibold text-gray-800">
                Order Status
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Status
                </label>
                <select
                  value={formData.orderStatus}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      orderStatus: e.target.value,
                    }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                >
                  {[
                    'Pending',
                    'Processing',
                    'Shipped',
                    'Delivered',
                    'Cancelled',
                  ].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        paymentMethod: e.target.value,
                      }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                    disabled={true}
                  >
                    {['COD', 'Credit Card', 'Debit Card', 'PayPal'].map(
                      (method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Status
                  </label>
                  <select
                    value={formData.paymentStatus}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        paymentStatus: e.target.value,
                      }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                    disabled={true}
                  >
                    {['Pending', 'Paid', 'Refunded', 'Failed'].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Discount Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <DollarSign className="mr-2 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Discount Details
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <input
                  type="text"
                  value={formData.discount.couponCode}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      discount: {
                        ...prev.discount,
                        couponCode: e.target.value,
                      },
                    }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 transition-all"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Amount
                </label>
                <input
                  type="number"
                  value={formData.discount.amount}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      discount: {
                        ...prev.discount,
                        amount: parseFloat(e.target.value),
                      },
                    }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 transition-all"
                  readOnly
                />
              </div>
            </div>
          </div>
          {/* Shipping Address Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <Truck className="mr-2 text-appTheme" />
              <h2 className="text-lg font-semibold text-gray-800">
                Shipping Address
              </h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={formData.shippingAddress.address}
                onChange={(e) => handleInputChange(e, 'address', 'shipping')}
                placeholder="Street Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                readOnly
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formData.shippingAddress.city}
                  onChange={(e) => handleInputChange(e, 'city', 'shipping')}
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                  readOnly
                />
                <input
                  type="text"
                  value={formData.shippingAddress.postalCode}
                  onChange={(e) =>
                    handleInputChange(e, 'postalCode', 'shipping')}
                  placeholder="Postal Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                  readOnly
                />
              </div>

              <input
                type="text"
                value={formData.shippingAddress.country}
                onChange={(e) => handleInputChange(e, 'country', 'shipping')}
                placeholder="Country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                readOnly
              />
            </div>
          </div>
          {/* Billing Address Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <MapPin className="mr-2 text-appTheme" />
              <h2 className="text-lg font-semibold text-gray-800">
                Billing Address
              </h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={formData.billingAddress.address}
                onChange={(e) => handleInputChange(e, 'address', 'billing')}
                placeholder="Street Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                readOnly
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formData.billingAddress.city}
                  onChange={(e) => handleInputChange(e, 'city', 'billing')}
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                  readOnly
                />
                <input
                  type="text"
                  value={formData.billingAddress.postalCode}
                  onChange={(e) =>
                    handleInputChange(e, 'postalCode', 'billing')}
                  placeholder="Postal Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                  readOnly
                />
              </div>

              <input
                type="text"
                value={formData.billingAddress.country}
                onChange={(e) => handleInputChange(e, 'country', 'billing')}
                placeholder="Country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-appTheme transition-all"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Order Comments */}
        <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm w-full">
          <div className="flex items-center mb-4">
            <MessageCircle className="mr-2 text-appTheme" />
            <h2 className="text-lg font-semibold text-gray-800">
              Order Comments
            </h2>
          </div>

          {order.comments.length === 0 ? (
            <p className="text-gray-500 text-sm">No comments yet</p>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {order.comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-white p-3 rounded-md shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm  text-gray-600 capitalize">
                      {comment.userId.firstName} {comment.userId.lastName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatTimeAgo(comment.createdAt)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 font-HeroNewSemiBold">
                    {comment.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Save Button */}
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="px-6 py-2 bg-appTheme text-white rounded-md shadow hover:bg-appTheme-opacity-70 focus:ring-2 focus:ring-appTheme transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
      {showInvoice && selectedOrder && (
        <OrderHistoryInvoice
          order={selectedOrder}
          onClose={() => setShowInvoice(false)}
        />
      )}
    </div>
  );
};

export default OrderEditForm;
