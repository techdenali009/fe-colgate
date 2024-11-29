import AddProduct from '@ui/organisms/AddProduct';
import  { useState } from 'react';

const ParentComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);
    try {
    
      console.log("Form Submitted: ", formData);
      alert("Product submitted successfully!");
    } catch (error) {
      console.error("Submission failed: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AddProduct isLoading={isLoading} onSubmit={handleSubmit} />
  );
};

export default ParentComponent;
