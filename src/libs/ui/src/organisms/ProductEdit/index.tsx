import React, { useState, useEffect } from "react";
import {
  Camera,
  Trash2,
  Plus,
  Tag,
  DollarSign,
  Archive,
  FileText,
  Image,
} from "lucide-react";

// Keep existing enum and interfaces from the previous implementation
export enum ProductCategory {
  SKINCARE = "SKINCARE",
  MAKEUP = "MAKEUP",
  HAIRCARE = "HAIRCARE",
  BODYCARE = "BODYCARE",
  FRAGRANCES = "FRAGRANCES",
}

export interface ProductImage {
  url: string;
  public_id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  discount: number;
  stock: number;
  images: ProductImage[];
  subCategories?: string[];
  dailCare?: string[];
  bySkinType?: string[];
  bySkinConcern?: string[];
  productType?: string;
  isPopular?: boolean;
}

interface ProductEditProps {
  product: Product;
  onSubmit?: (product: Product) => void;
}

const ProductEdit: React.FC<ProductEditProps> = ({ product, onSubmit }) => {
  const [productData, setProductData] = useState<Product>({
    _id: "",
    name: "",
    description: "",
    category: ProductCategory.SKINCARE,
    price: 0,
    discount: 0,
    stock: 0,
    images: [],
    subCategories: [],
    dailCare: [],
    bySkinType: [],
    bySkinConcern: [],
    productType: "",
    isPopular: false,
  });

  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof Product, string>>>(
    {}
  );
  useEffect(() => {
    if (product) {
      setProductData(product);
    
      setImagePreview(product.images.map((img) => img.url));
    }
  }, [product]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Handle checkbox for isPopular
    if (name === "isPopular" && type === "checkbox") {
      setProductData((prev) => ({
        ...prev,
        isPopular: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    // Handle numeric fields
    if (["price", "discount", "stock"].includes(name)) {
      setProductData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
      return;
    }

    if (
      ["subCategories", "dailCare", "bySkinType", "bySkinConcern"].includes(
        name
      )
    ) {
      setProductData((prev) => ({
        ...prev,
        [name]: value
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item),
      }));
      return;
    }

    // Default handling for other fields
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      const newImages: ProductImage[] = [];

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result as string);
          newImages.push({
            url: reader.result as string,
            public_id: "",
          });
          if (newPreviews.length === files.length) {
            setImagePreview((prev) => [...prev, ...newPreviews]);
            setProductData((prev) => ({
              ...prev,
              images: [...prev.images, ...newImages],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (indexToRemove: number) => {
    setImagePreview((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Product, string>> = {};

    if (!productData.name.trim()) newErrors.name = "Product name is required";
    if (!productData.description.trim())
      newErrors.description = "Description is required";
    if (productData.price < 0) newErrors.price = "Price must be non-negative";
    if (productData.discount < 0)
      newErrors.discount = "Discount must be non-negative";
    if (productData.stock < 0) newErrors.stock = "Stock must be non-negative";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(productData);
      } else {
        console.log("Product Data:", productData);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Camera className="mr-4" />
            Edit Product Details
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-3 text-blue-600" />
                  Basic Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Product Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter product name"
                      />
                      {errors.name && (
                        <p className="absolute text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={productData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      rows={4}
                      placeholder="Enter product description"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="mr-3 text-green-600" />
                  Pricing & Inventory
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={(e) => {
                        let inputValue = e.target.value;

                        // Check for valid number input with two decimals
                        if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
                          // Convert empty input to "0" for consistency
                          handleInputChange({
                            target: {
                              name: "price",
                              value: inputValue === "" ? "0" : inputValue,
                            },
                          } as React.ChangeEvent<HTMLInputElement>);
                        }
                      }}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Discount (%)
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={productData.discount}
                      onChange={(e) => {
                        let inputValue = e.target.value;

                        // Check for valid number input with two decimals
                        if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
                          // Convert empty input to "0" for consistency
                          handleInputChange({
                            target: {
                              name: "discount",
                              value: inputValue === "" ? "0" : inputValue,
                            },
                          } as React.ChangeEvent<HTMLInputElement>);
                        }
                      }}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image Upload Section */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Image className="mr-3 text-purple-600" />
                  Product Images
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {imagePreview.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Product ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md group-hover:opacity-70 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  {imagePreview.length < 6 && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 hover:bg-gray-100 transition-all">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        id="product-image"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="product-image"
                        className="cursor-pointer text-gray-500 hover:text-blue-500 flex items-center"
                      >
                        <Plus className="mr-2" /> Add Image
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Tag className="mr-3 text-orange-600" />
                  Additional Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      name="category"
                      value={productData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {Object.values(ProductCategory).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Stock
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="stock"
                        value={productData.stock}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                      <Archive
                        className="absolute right-3 top-3.5 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isPopular"
                      checked={productData.isPopular || false}
                      onChange={handleInputChange}
                      className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      id="isPopular"
                    />
                    <label
                      htmlFor="isPopular"
                      className="font-medium text-gray-700"
                    >
                      Mark as Popular Product
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
