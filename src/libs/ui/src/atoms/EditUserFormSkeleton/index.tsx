import { BsMailbox } from 'react-icons/bs';
import { BiCamera, BiMapPin, BiUser } from 'react-icons/bi';

// Skeleton Loader Component
const EditUserFormSkeleton = () => {
  return (
    <div className="min-h-screen mt-12">
      <div className="bg-[#fffefe] border-b rounded-2xl border-gray-200 top-0 z-50 shadow-xl">
        {/* Main Content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <form className="space-y-6">
            {/* Profile Card */}
            <div
              id="profile"
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 animate-pulse"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="group relative">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-4 border-white shadow-md" />
                  <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg border border-gray-100 hover:border-appTheme transition-colors">
                    <BiCamera className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">Upload new photo</span>
              </div>

              <div className="flex-1 w-full mt-5">
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                  <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
                  <div className="bg-gray-200 h-6 rounded-md w-20 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-200 h-10 rounded-md w-full animate-pulse" />
                  <div className="bg-gray-200 h-10 rounded-md w-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div
              id="contact"
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 animate-pulse"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BsMailbox className="w-5 h-5 text-appTheme" />
                Contact Information
              </h2>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
                <div className="bg-gray-200 h-6 rounded-md w-20 animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
              </div>
            </div>

            {/* Account Settings Card */}
            <div
              id="account"
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 animate-pulse"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BiUser className="w-5 h-5 text-appTheme" />
                Account Settings
              </h2>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
                <div className="bg-gray-200 h-6 rounded-md w-20 animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                {/* Radio Buttons */}
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-200 w-20 h-8 rounded-md animate-pulse" />
                  <div className="bg-gray-200 w-20 h-8 rounded-md animate-pulse" />
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div
              id="address"
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 animate-pulse"
            >
              <h2 className="text-lg font-semibold text-slate-400 mb-4 sm:mb-6 flex items-center gap-2">
                <BiMapPin className="w-5 h-5 text-appTheme" />
                Address Information
              </h2>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
             
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-200 h-20 rounded-md w-full animate-pulse" />
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                  <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
                  <div className="bg-gray-200 h-6 rounded-md w-20 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                  <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-1">
                  <div className="bg-gray-200 h-6 rounded-md animate-pulse w-20"></div>
                  <div className="bg-gray-200 h-6 rounded-md w-20 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                  <div className="bg-gray-200 h-8 rounded-md w-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Submit Button (Optional) */}
            <div className="flex justify-end space-x-4 mt-6">
              <div className="bg-gray-200 w-20 h-10 rounded-md animate-pulse" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserFormSkeleton;
