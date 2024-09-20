import { Button } from "@ui/atoms/Button";
import { Label } from "@ui/atoms/Label";
import { ProductHeaderProps } from "@utils/Product";

const ProductHeader = ({ handleScroll }: ProductHeaderProps) => {
  return (
    <div className="text-left mt-5 ml-14">
      <h2 className="text-3xl font-bold text-stone-600 font-heroBold">Popular Products</h2>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center">
       <Label
          className="mt-5 text-base text-slate-600 "
        >{'A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey.'}</Label>
        
 
        <div className="flex flex-col lg:flex-row items-center mt-3.5 lg:mt-5">
          <Button
            className="text-base font-bold text-blue-700 hover:text-white hover:bg-blue-700 lg:ml-10 mb-4 lg:mb-0 font-heroBold"
            type={'submit'}
          >
            {"Log in to view prices"}
          </Button>
          <div className="flex items-center mt-2 lg:mt-0 lg:relative">
            <div
              className="swiper-button-prev bg-center bg-no-repeat cursor-pointer w-10 h-10 absolute left-0 lg:left-20 lg:top-[-1.5rem] top-10"
              onClick={() => handleScroll('left')}
              style={{
                backgroundImage: 'url(src/libs/ui/assets/Navigate-prev-blue.2eaabede.svg)',
              }}
              aria-label="Scroll Left"
              role="button"
              tabIndex={0}
            />
            <div
              className="swiper-button-next bg-center bg-no-repeat cursor-pointer w-10 h-10 absolute left-12 lg:left-32 lg:top-[-1.5rem] top-10"
              onClick={() => handleScroll('right')}
              style={{
                backgroundImage: 'url(src/libs/ui/assets/Navigate-next-blue.b30f7023.svg)',
              }}
              aria-label="Scroll Right"
              role="button"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
