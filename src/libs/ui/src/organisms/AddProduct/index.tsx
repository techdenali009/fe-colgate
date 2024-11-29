import React, { useState, useRef, useEffect } from "react";
import { z } from "zod";
import {
  Camera,
  Package,
  DollarSign,
  Tag,
  AlignLeft,
  List,
  Images,
  X,
  UploadCloud,
} from "lucide-react";
import { useLazyGetCategoriesQuery } from "@store/services/Endpoints/CategoryApi";
import Multiselect from "multiselect-react-dropdown";
// Zod Schema for Product Validation
const ProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
  price: z
    .number()
    .min(0.01, { message: "Price must be greater than zero" })
    .max(100000, { message: "Price is too high" }),
  category: z.string().min(1, { message: "Category is required" }),
  subCategory: z.array(z.string()),
  stock: z
    .number()
    .min(0, { message: "Stock cannot be negative" })
    .max(10000, { message: "Stock quantity is too high" }),
  discount: z
    .number()
    .min(0, { message: "Discount cannot be negative" })
    .max(100, { message: "Discount cannot exceed 100%" })
    .optional(),
  images: z
    .array(z.instanceof(File))
    .max(5, { message: "Maximum 5 images allowed" }),
    isPopular: z.boolean().optional(),
});

type ProductFormData = z.infer<typeof ProductSchema>;
interface AddProductProps {
  isLoading?: boolean;
  onSubmit: (data: ProductFormData) => void;
}
const AddProduct: React.FC<AddProductProps> = ({ isLoading, onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    category: "",
    subCategory: [],
    stock: 0,
    discount: 0,
    images: [],
    isPopular: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [getCategories, { data: fetchedCategories }] =
    useLazyGetCategoriesQuery();

  // Fetch categories on component mount
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const processedValue = 
      type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : (name === "price" || name === "stock" || name === "discount"
          ? Number(value)
          : value);
    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);

      // Validate image upload
      if (formData.images.length + newFiles.length > 5) {
        setErrors((prev) => ({
          ...prev,
          images: "Maximum 5 images allowed",
        }));
        return;
      }

      const newImages = newFiles.map((file) => URL.createObjectURL(file));

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newFiles],
      }));

      setPreviewImages((prev) => [...prev, ...newImages]);

      // Clear image upload error
      if (errors.images) {
        const newErrors = { ...errors };
        delete newErrors.images;
        setErrors(newErrors);
      }
    }
  };

  const removeImage = (index: number) => {
    const updatedPreviewImages = [...previewImages];
    const updatedImages = [...formData.images];

    updatedPreviewImages.splice(index, 1);
    updatedImages.splice(index, 1);

    setPreviewImages(updatedPreviewImages);
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const validateForm = () => {
    try {
      ProductSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          errorMap[err.path[0]] = err.message;
        });
        setErrors(errorMap);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      price: 0,
      category: "",
      subCategory: [],
      stock: 0,
      discount: 0,
      images: [],
      isPopular: false,
    });
    setPreviewImages([]);
    setErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Package className="mr-3" /> Add New Product
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Package className="mr-2 text-blue-500" /> Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <AlignLeft className="mr-2 text-blue-500" /> Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                  placeholder="Describe your product"
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <DollarSign className="mr-2 text-blue-500" /> Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only numbers and one decimal point
                      if (/^\d*\.?\d{0,2}$/.test(value)) {
                        handleInputChange(e);
                      }
                    }}
                    className={`w-full px-4 py-2 border ${
                      errors.price ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                    placeholder="0.00"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Tag className="mr-2 text-blue-500" /> Discount %
                  </label>
                  <input
                    type="text"
                    name="discount"
                    value={formData.discount}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only numbers and one decimal point
                      if (/^\d*\.?\d*$/.test(value)) {
                        handleInputChange(e);
                      }
                    }}
                    min="0"
                    max="100"
                    className={`w-full px-4 py-2 border ${
                      errors.discount ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                    placeholder="0"
                  />
                  {errors.discount && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.discount}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <List className="mr-2 text-blue-500" /> Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                  >
                    <option value="">Select Category</option>

                    {fetchedCategories?.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>

                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Tag className="mr-2 text-blue-500" /> Sub Category
                  </label>

                  {formData.category &&
                    fetchedCategories?.map(
                      (cat) =>
                        cat.name === formData.category && (
                          <Multiselect
                            key={cat._id} // Unique key for the Multiselect component
                            disable={!formData.category}
                            options={cat.subcategories.map((subCat) => ({
                              name: subCat.name,
                              id: subCat._id, // The ID or other unique value for each subcategory
                            }))} // Passing the subcategories as options to the Multiselect
                            selectedValues={formData.subCategory.map(
                              (name) => ({
                                name,
                              })
                            )} // Set preselected values based on formData
                            onSelect={(selectedList) => {
                              // Update the formData when a subcategory is selected
                              setFormData((prev) => ({
                                ...prev,
                                subCategory: selectedList.map(
                                  (item: { name: string }) => item.name
                                ), // Map to only the names
                              }));
                            }}
                            onRemove={(removedList) => {
                              // Update the formData when a subcategory is removed
                              setFormData((prev) => ({
                                ...prev,
                                subCategory: removedList.map(
                                  (item: { name: string }) => item.name
                                ), // Map to only the names
                              }));
                            }}
                            displayValue="name" // Display the name of each subcategory in the dropdown
                            className="w-full h-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                          />
                        )
                    )}

                  {errors.subCategory && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subCategory}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Camera className="mr-2 text-blue-500" /> Stock
                </label>
                <input
                  type="text"
                  name="stock"
                  value={formData.stock}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numbers and one decimal point
                    if (/^\d*\.?\d*$/.test(value)) {
                      handleInputChange(e);
                    }
                  }}
                  min="0"
                  className={`w-full px-4 py-2 border ${
                    errors.stock ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300`}
                  placeholder="Enter stock quantity"
                />
                {errors.stock && (
                  <p className="text-red-500 text-xs mt-1">{errors.stock}</p>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isPopular"
                checked={formData.isPopular || false}
                onChange={handleInputChange}
                className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                id="isPopular"
              />
              <label htmlFor="isPopular" className="font-medium text-gray-700">
                Mark as Popular Product
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Images className="mr-2 text-blue-500" /> Product Images
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 ${
                errors.images ? "border-red-500" : "border-gray-300"
              } border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="hidden"
              />
              <div className="flex flex-col items-center">
                <UploadCloud className="w-12 h-12 text-blue-500 mb-4" />
                <p className="text-gray-600">
                  Drag & drop images or{" "}
                  <span className="text-blue-500">Browse</span>
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {errors.images && (
              <p className="text-red-500 text-xs mt-1">{errors.images}</p>
            )}

            {previewImages.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover
                         hover:bg-gray-300 transition focus:outline-none"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-appTheme text-white rounded-lg hover:bg-appTheme transition focus:outline-none"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
