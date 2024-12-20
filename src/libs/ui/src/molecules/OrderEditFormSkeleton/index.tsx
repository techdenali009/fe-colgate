import React from 'react';
import {
  Package,
  CreditCard,
  Truck,
  MapPin,
  FileText,
  DollarSign,
  Calendar,
} from 'lucide-react';

const OrderEditFormSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden animate-pulse">
      {/* Header */}
      <div className="bg-gradient-to-r from-appTheme to-appTheme-opacity-80 p-6">
        <div className="flex items-center text-white justify-between">
          <div className="flex items-center">
            <Package className="mr-3 w-8 h-8" />
            <div className="h-6 bg-white/30 w-40 rounded"></div>
          </div>
          <div className="h-10 w-24 bg-white/30 rounded"></div>
        </div>
      </div>

      {/* Form Skeleton */}
      <div className="p-6 space-y-6">
        
        {/* Products Table Skeleton */}
        <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="h-6 bg-gray-300 w-32 mb-4 rounded"></div>
          <div className="overflow-x-auto">
            <div className="h-10 bg-gray-200 w-full rounded mb-2"></div>
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="h-10 bg-gray-100 w-full rounded mb-2"
              >
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2 text-purple-600" />
            <div className="h-6 bg-gray-300 w-32 rounded"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-4 bg-gray-300 w-20 mb-2 rounded"></div>
                <div className="h-6 bg-gray-200 w-full rounded"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Order Status Card Skeleton */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <CreditCard className="mr-2 text-appTheme" />
              <div className="h-6 bg-gray-300 w-32 rounded"></div>
            </div>

            <div className="space-y-4">
              {['Order Status', 'Payment Method', 'Payment Status'].map(
                (index) => (
                  <div key={index}>
                    <div className="h-4 bg-gray-300 w-24 mb-2 rounded"></div>
                    <div className="h-10 bg-gray-200 w-full rounded"></div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Discount Card Skeleton */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <DollarSign className="mr-2 text-green-600" />
              <div className="h-6 bg-gray-300 w-32 rounded"></div>
            </div>

            <div className="space-y-4">
              {['Coupon Code', 'Discount Amount'].map((index) => (
                <div key={index}>
                  <div className="h-4 bg-gray-300 w-24 mb-2 rounded"></div>
                  <div className="h-10 bg-gray-200 w-full rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address Card Skeleton */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <Truck className="mr-2 text-appTheme" />
              <div className="h-6 bg-gray-300 w-32 rounded"></div>
            </div>

            <div className="space-y-4">
              {['Street Address', 'City', 'Postal Code', 'Country'].map(
                (index) => (
                  <div
                    key={index}
                    className="h-10 bg-gray-200 w-full rounded"
                  >
                  </div>
                )
              )}
            </div>
          </div>

          {/* Billing Address Card Skeleton */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <MapPin className="mr-2 text-appTheme" />
              <div className="h-6 bg-gray-300 w-32 rounded"></div>
            </div>

            <div className="space-y-4">
              {['Street Address', 'City', 'Postal Code', 'Country'].map(
                (index) => (
                  <div
                    key={index}
                    className="h-10 bg-gray-200 w-full rounded"
                  >
                  </div>
                )
              )}
            </div>
          </div>

          {/* Notes Section Skeleton */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <FileText className="mr-2 text-gray-600" />
              <div className="h-6 bg-gray-300 w-32 rounded"></div>
            </div>
            <div className="h-24 bg-gray-200 w-full rounded"></div>
          </div>

        

        </div>

        {/* Save Button Skeleton */}
        <div className="flex justify-end">
          <div className="h-10 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderEditFormSkeleton;
