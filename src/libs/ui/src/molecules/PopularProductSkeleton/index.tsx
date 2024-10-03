import { useState, useEffect } from 'react';

function PopularProductSkeleton() {
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    const updateProductCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setProductCount(1);
      } else if (width < 1024) {
        setProductCount(2);
      } else if (width < 1280) {
        setProductCount(3);
      } else {
        setProductCount(4);
      }
    };

    updateProductCount();

    window.addEventListener('resize', updateProductCount);

    return () => {
      window.removeEventListener('resize', updateProductCount);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="text-left">
        <div className="mb-4">
          <div className="h-10 bg-gray-300 rounded-md w-1/4 mb-2"></div>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row lg:justify-between">
          <div className="h-8 bg-gray-300 rounded-md w-2/3"></div>
          <div className=" flex flex-col lg:flex-row items-start lg:mt-0 mt-4 space-y-2 lg:space-y-0 lg:space-x-4">
            <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
          </div>

          <div className="lg:text-right flex space-x-2 mt-3 lg:mt-0">
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          productCount === 1
            ? 'grid-cols-1'
            : productCount === 2
              ? 'grid-cols-2'
              : productCount === 3
                ? 'grid-cols-3'
                : 'grid-cols-4'
        }`}
      >
        {Array(productCount)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="bg-gray-200 p-6 shadow-md ">
              <div className="bg-gray-300 animate-pulse w-32 h-8 mb-4" />
              <div className="bg-gray-300 animate-pulse w-full h-56 mb-6" />
              <div className="bg-gray-300 animate-pulse w-full h-12 mb-4" />
              <div className="bg-gray-300 animate-pulse w-full h-8 mb-2" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopularProductSkeleton;
