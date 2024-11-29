import React, { useState, useEffect } from "react";
import { useLazyGetProductsQuery } from "@store/services/Endpoints/PlpProductsEndPoint";
import AdminProduct from "@ui/organisms/AdminProduct";
import ConfirmationModal from "@ui/molecules/ConfirmationModal";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productName,setProductName]=useState<string>();
  const [triggerGetProducts] = useLazyGetProductsQuery();

  useEffect(() => {
    setIsLoading(true);
    triggerGetProducts({ page, limit: 10 })
      .unwrap()
      .then(({ products, totalPages }) => {
        setProducts(products);
        setTotalPages(totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [page, triggerGetProducts]);

  const handleDelete = (id: string,name:string) => {
    setProductName(name);
    setShowModal(true);
    console.log('deleted product id ',id);
  }
  const confirmDelete = () => {
    setShowModal(false);
    
  };

  return (
    <>
      <AdminProduct
        products={products}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        handleDelete={handleDelete}
      />
      {showModal && (
        <ConfirmationModal onClose={() => setShowModal(false)} onConfirm={confirmDelete} message={`Do you really want to delete these ${productName}? This process cannot be
            undone.`} />
      )}
    </>
  );
};

export default ProductList;
