import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import { ProductHeaderProps } from '@utils/Product';
import { PrimaryButton } from '../PrimaryButton';
import NavigateNextBlue from '../../../assests/Navigatenextblue.svg';
import NavigateNextBlueDark from '../../../assests/Navigate-next-bluedark.svg';
import NavigatePrevBlue from '../../../assests/Navigateprevblue.svg';
import NavigatePrevBlueDark from '../../../assests/Navigateprevbluedark.svg';

const ProductHeader = ({
  handleScroll,
  headingLabel,
  description,
  LogInButtonDisable,
}: ProductHeaderProps) => {
  return (
    <div className="text-left">
      <h2 className="font-bold text-[28px] text-[#555555] font-HeroNewExtraBold leading-8 hover:font-HeroNewBold">
        {headingLabel}
      </h2>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:flex-row items-start mt-4">
          <Label className="mr-6 text-base text-slate-600 font-HeroNewLight">
            {description}
          </Label>
          {LogInButtonDisable ? (
            <Button
              className="text-base font-bold text-appTheme hover:text-white hover:bg-appTheme font-HeroNewBold"
              type="submit"
            >
              Log in to view prices
            </Button>
          ) : null}
        </div>

        <div className="flex space-x-0.5 mt-3 lg:mt-0">
          <PrimaryButton
            className="w-10 h-10 hover:bg-appTheme relative overflow-hidden !p-0"
            onClick={() => handleScroll('left')}
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
            className="w-10 h-10 hover:bg-appTheme relative overflow-hidden !p-0"
            onClick={() => handleScroll('right')}
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
  );
};

export default ProductHeader;
