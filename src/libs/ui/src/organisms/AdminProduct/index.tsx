import React, { useState } from "react";
import { Trash2, Edit, Eye, Menu } from "lucide-react";
import { Product } from "@utils/ProductConstant";
import AdminProductSkeleton from "@ui/molecules/AdminProductSkeleton";
import ReactPaginate from "react-paginate";
import CarouselPrevArrow from "@ui/atoms/SvgAtoms/CarouselPrevArrow";
import CarouselNextArrow from "@ui/atoms/SvgAtoms/CarouselNextArrow";
import { useNavigate } from "react-router-dom";
import { Image } from "@ui/atoms/Image";

interface AdminProductProps {
  products: Product[];
  isLoading: boolean;
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleDelete: (id: string,name:string) => void;
}

const AdminProduct: React.FC<AdminProductProps> = ({
  products,
  isLoading,
  totalPages,
  page,
  setPage,
  handleDelete,
}) => {
const navigate=useNavigate();
  const handleEdit = (product: Product) => {
    navigate(`/admin/product/${product._id}`);
  };

  const handleView = (product: Product) => {
    console.log("View product", product);
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const renderProductCard = (product: Product) => (
    <div
      key={product._id}
      className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="flex-shrink-0">
        <Image
           src={
            product.images && product.images.length > 0
              ? product.images[0].url
              : "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          }
          alt={
            product.images && product.images.length > 0
              ? product.images[0].altText || product.name
              : "Default image"
          }
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
      <div className="flex-grow w-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-900">{product.name}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleView(product)}
              className="text-blue-500 hover:text-blue-600 transition-colors"
              title="View Details"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={() => handleEdit(product)}
              className="text-green-500 hover:text-green-600 transition-colors"
              title="Edit Product"
            >
              <Edit size={20} />
            </button>
            <button
              onClick={() => handleDelete(product._id,product.name)}
              className="text-red-500 hover:text-red-600 transition-colors"
              title="Delete Product"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Price:</span>$
            {product.price.toFixed(2)}
            {product.discount > 0 && (
              <span className="ml-2 text-green-600 text-xs">
                {product.discount}% OFF
              </span>
            )}
          </div>
          <div>
            <span className="font-medium">Category:</span>
            {product.category.name}
          </div>
          <div>
            <span className="font-medium">Stock:</span>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                product.stock > 20
                  ? "bg-green-100 text-green-800"
                  : product.stock > 10
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.stock} in stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Product Management
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center" onClick={()=>{navigate('/admin/addProducts')}}>
          + Add New Product
        </button>
      </div>

      {isLoading ? (
        <AdminProductSkeleton />
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full font-HeroNewRegular">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3">
                      <img
                        src={product.images[0]?.url || "/placeholder-image.png"}
                        alt={product.images[0]?.altText || product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="p-3 text-gray-500">
                      ${product.price.toFixed(2)}
                      {product.discount > 0 && (
                        <span className="ml-2 text-green-600 text-xs">
                          {product.discount}% OFF
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-gray-500">
                      {product.category.name}
                      {product.subCategories &&
                        product.subCategories.length > 0 && (
                          <div className="text-xs text-gray-400">
                            {product.subCategories[0].name}
                          </div>
                        )}
                    </td>
                    <td className="p-3 text-gray-500">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.stock > 20
                            ? "bg-green-100 text-green-800"
                            : product.stock > 10
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.stock} in stock
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleView(product)}
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye size={20} />
                        </button>
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-green-500 hover:text-green-600 transition-colors"
                          title="Edit Product"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id,product.name)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">{products.map(renderProductCard)}</div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
            <span className="text-gray-600 text-sm">
              Page {page} of {totalPages}
            </span>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={0}
              forcePage={page - 1}
              breakLabel="..."
              onPageChange={handlePageClick}
              containerClassName="flex flex-wrap justify-center items-center space-x-2"
              pageClassName="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:text-black dark:hover:bg-gray-600 text-xs"
              activeClassName="!bg-appTheme-opacity-70 !text-white"
              previousLabel={<CarouselPrevArrow />}
              nextLabel={<CarouselNextArrow />}
              previousClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10"
              }`}
              nextClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
                page === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10"
              }`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminProduct;
