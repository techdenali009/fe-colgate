import { Button } from "@ui/atoms/Button";
import { Label } from "@ui/atoms/Label";
import { ProductHeaderProps } from "@utils/Product";

const ProductHeader = ({ handleScroll }: ProductHeaderProps) => {
  return (
    <div className="text-left pl-24">
      <h2 className="font-bold text-[28px] text-stone-600 font-HeroNewExtraBold leading-8  hover:font-HeroNewBold">
        Popular Products
      </h2>

      <div className="mb-6 flex flex-col lg:flex-row">
        <Label className="mt-4 text-base text-slate-600 font-HeroNewLight">
          {
            "A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
          }
        </Label>

        <div className="lg:flex mt-5 lg:ml-5 lg:mt-2 items-center">
          <Button
            className=" text-base font-bold text-blue-700 hover:text-white hover:bg-blue-700 font-HeroNewBold lg:block"
            type={"submit"}
          >
            {"Log in to view prices"}
          </Button>

          <div className="flex space-x-1 mt-3 lg:ml-[135px] lg:mt-0 items-center">
            <div
              className="bg-center bg-no-repeat cursor-pointer w-10 h-10 bg-NavigatePrevBlue hover:bg-NavigatePrevBlueDark  bg-cover"
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
              role="button"
              tabIndex={0}
            />
            {/* Right scroll button */}
            <div
              className="bg-center bg-no-repeat cursor-pointer w-10 h-10 bg-NavigateNextBlue hover:bg-NavigateNextBluedark"
              onClick={() => handleScroll("right")}
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
