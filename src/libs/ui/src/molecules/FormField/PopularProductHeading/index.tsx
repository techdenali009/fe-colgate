import { Button } from "@ui/atoms/Button";
import { Label } from "@ui/atoms/Labels/Label";

const ProductHeader = ({ handleScroll }: any) => {
  return (
    <div className="text-left w-11/12 mt-5 ml-14">
      <h2 className="text-3xl font-bold text-gray-700">Popular Products</h2>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center">
       <Label
         text=""
          className="mt-5 text-base text-slate-600 "
        >{'A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey.'}</Label>
        
 
        <div className="flex flex-col lg:flex-row items-center mt-3.5 lg:mt-5">
          <Button
            className="text-lg font-bold text-blue-700 hover:text-white hover:bg-blue-700 lg:ml-10 mb-4 lg:mb-0"
            type={'submit'}
          >
            {"Log in to view prices"}
          </Button>
          <div className="flex">
            <Button
              className="bg-blue-700 text-white w-10 h-10 text-2xl align-middle text-center hover:bg-blue-900 mb-2 lg:ml-36 lg:mb-0"
              type="button"
              onClick={() => handleScroll('left')}
            >
              {"<"}
            </Button>
            <Button
              className="bg-blue-700 text-white w-10 h-10 text-2xl mx-2 hover:bg-blue-900"
              type="button"
              onClick={() => handleScroll('right')}
            >
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
