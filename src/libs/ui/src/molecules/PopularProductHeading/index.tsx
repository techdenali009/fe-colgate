import { Button } from "@ui/atoms/Button";
import { Label } from "@ui/atoms/Label";
import { ProductHeaderProps } from "@utils/Product";
import { PrimaryButton } from "../PrimaryButton";
import NavigateNextBlue from "../../../assests/Navigatenextblue.svg";
import NavigateNextBlueDark from "../../../assests/Navigate-next-bluedark.svg";
import NavigatePrevBlue from "../../../assests/Navigateprevblue.svg";
import NavigatePrevBlueDark from "../../../assests/Navigateprevbluedark.svg";

const ProductHeader = ({ handleScroll }: ProductHeaderProps) => {
  return (
    <div className="text-left md:pl-14 ml-10">
      <h2 className="font-bold text-[28px] text-stone-600 font-HeroNewExtraBold leading-8 hover:font-HeroNewBold">
        Popular Products
      </h2>

      <div className="mb-6 flex flex-col lg:flex-row">
        <Label className="mt-4 text-base text-slate-600 font-HeroNewLight">
          {"A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."}
        </Label>

        <div className="lg:flex mt-5 lg:ml-5 lg:mt-1 items-center">
          <Button
            className="text-base font-bold text-blue-700 hover:text-white hover:bg-blue-700 font-HeroNewBold lg:block"
            type={"submit"}
          >
            {'Log in to view prices'}
          </Button>

          <div className="flex space-x-1 mt-3 lg:ml-[80px] lg:mt-0">
            <PrimaryButton
              className="w-10 h-10 hover:bg-blue-800 relative overflow-hidden !p-0"
              onClick={() => handleScroll("left")}
            >
              <img
                src={NavigatePrevBlue}
                alt="Navigate Prev"
                className="absolute inset-0 transition-opacity duration-100"
              />
              <img
                src={NavigatePrevBlueDark}
                alt="Navigate Prev Dark"
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-100"
              />
            </PrimaryButton>

            <PrimaryButton
              className="w-10 h-10 hover:bg-blue-800 relative overflow-hidden !p-0"
              onClick={() => handleScroll("right")}
            >
              <img
                src={NavigateNextBlue}
                alt="Navigate Next"
                className="absolute inset-0 transition-opacity duration-100"
              />
              <img
                src={NavigateNextBlueDark}
                alt="Navigate Next Dark"
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-100"
              />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
