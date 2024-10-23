import React from 'react'; // Import React
import PlpPageTemplate from '@ui/templates/ProductListPageTemplate'; // Import the template component
import { ProductProvider } from 'src/libs/ui/src/contexts/PlpContext';


// Define the PlpPage component as a functional component
export const PlpPage: React.FC = () => {

  return (

    <ProductProvider>
      <PlpPageTemplate />
    </ProductProvider>

  );
};

export default PlpPage; // Export the PlpPage component
