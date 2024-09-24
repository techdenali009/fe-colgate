import { Button } from "@ui/atoms/Button";
import { Label } from "@ui/atoms/Label";
import { ProductHeaderProps } from "@utils/Product";

const ProductHeader = ({ handleScroll }: ProductHeaderProps) => {
  return (
    <div className="text-left">
      <h2 className=" font-bold  text-stone-600 font-HeroNewExtraBold leading-8 text-2xl hover:font-HeroNewBold">
        Popular Products
      </h2>
      <div className="mb-10 flex flex-col lg:flex-row">
        <Label className="mt-4 text-base text-slate-600 font-HeroNewLight">
          {
            "A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
          }
        </Label>

        <div className="lg:flex mt-5 lg:ml-7 lg:mt-2">
          <Button
            className="w-3/4 hidden lg:block text-base font-bold text-blue-700 hover:text-white hover:bg-blue-700 font-HeroNewBold"
            type={"submit"}
          >
            {"Log in to view prices"}
          </Button>

          <div className="flex space-x-1 mt-3">
            <div
              className="bg-center bg-no-repeat cursor-pointer w-10 h-10 bg-[url(src/libs/ui/assests/Navigate-prev-blue.2eaabede.svg)] hover:bg-[url(src/libs/ui/assests/Navigate-prev-blue-dark.e86f8f17.svg)] "
              onClick={() => handleScroll("left")}
             
              aria-label="Scroll Left"
              role="button"
              tabIndex={0}
            />
            <div
              className=" bg-center bg-no-repeat cursor-pointer w-10 h-10 bg-[url(src/libs/ui/assests/Navigate-next-blue.b30f7023.svg)] hover:bg-[url(src/libs/ui/assests/Navigate-next-blue-dark.352e6f9a.svg)]"
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
