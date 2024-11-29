import React from "react";
import { Camera, FileText, DollarSign, Image, Tag, Archive } from "lucide-react";

const ProductEditSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Camera className="mr-4 animate-pulse" />
            <div className="h-6 bg-gray-300 w-36 rounded animate-pulse"></div>
          </h2>
        </div>

        <form className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-3 text-blue-600 animate-pulse" />
                  <div className="h-6 bg-gray-300 w-24 rounded animate-pulse"></div>
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="h-8 bg-gray-300 w-full rounded animate-pulse"></div>
                    <div className="relative mt-2">
                      <div className="h-12 bg-gray-300 w-full rounded animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <div className="h-8 bg-gray-300 w-full rounded animate-pulse"></div>
                    <div className="relative mt-2">
                      <div className="h-24 bg-gray-300 w-full rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="mr-3 text-green-600 animate-pulse" />
                  <div className="h-6 bg-gray-300 w-32 rounded animate-pulse"></div>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="h-12 bg-gray-300 w-full rounded animate-pulse"></div>
                  </div>
                  <div>
                    <div className="h-12 bg-gray-300 w-full rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image Upload Section */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Image className="mr-3 text-purple-600 animate-pulse" />
                  <div className="h-6 bg-gray-300 w-32 rounded animate-pulse"></div>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative group">
                    <div className="h-32 bg-gray-300 w-full rounded-lg animate-pulse"></div>
                    <div className="absolute top-2 right-2 bg-red-500 opacity-0 group-hover:opacity-100 transition-all">
                      <div className="h-6 w-6 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 hover:bg-gray-100 transition-all">
                    <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Tag className="mr-3 text-orange-600 animate-pulse" />
                  <div className="h-6 bg-gray-300 w-32 rounded animate-pulse"></div>
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="h-12 bg-gray-300 w-full rounded animate-pulse"></div>
                  </div>

                  <div>
                    <div className="h-12 bg-gray-300 w-full rounded animate-pulse"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-gray-300 rounded animate-pulse mr-3"></div>
                    <div className="h-6 bg-gray-300 w-24 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <div className="h-12 bg-gray-300 w-32 rounded animate-pulse"></div>
            <div className="h-12 bg-blue-600 w-32 rounded animate-pulse"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditSkeleton;
