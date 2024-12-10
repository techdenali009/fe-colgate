import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import { ProductHeaderProps } from '@utils/Product';
import { PrimaryButton } from '../PrimaryButton';

import ArrowPrevIcon from '@ui/atoms/SvgAtoms/ArrowPrevIcon';
import ArrowNextIcon from '@ui/atoms/SvgAtoms/ArrowNextIcon';

const ProductHeader = ({
  handleScroll,
  headingLabel,
  description,
  LogInButtonDisable,
  disableLeftButton,
  disableRightButton,
  modalSetToggle,
  className,
}: ProductHeaderProps) => {

  return (
    <div className="text-left  ">
      <h2
        className={`font-bold py-2 mt-20 text-[28px] text-[#555555] font-HeroNewExtraBold leading-8 hover:font-HeroNewBold dark:text-appTextColor ${className}`}
      >
        {headingLabel}
      </h2>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between ">
        <div className="flex flex-col lg:flex-row items-start py-2">
          <Label className="mr-5 text-base text-slate-600 font-HeroNewLight dark:text-appTextColor">
            {description}
          </Label>
          {LogInButtonDisable && (
            <Button
              className="text-base font-bold text-appTheme hover:text-white hover:bg-appTheme font-HeroNewBold"
              type="submit"
              onClick={modalSetToggle}
            >
              Log in to view prices
            </Button>
          )}
        </div>

        <div className="flex space-x-0.5 mt-3 lg:mt-0">
          {/* Left Navigation Button */}
          <PrimaryButton
            className={`w-11 h-12 relative overflow-hidden !p-0 ${
              disableLeftButton ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => handleScroll('left')}
            disabled={disableLeftButton}
          >
            <div
              className={`absolute inset-0 ${
                disableLeftButton ? '' : 'opacity-100 hover:opacity-0'
              } transition-opacity duration-100`}
            >
              <ArrowPrevIcon />
            </div>
            <div
              className={`absolute inset-0 ${
                disableLeftButton ? '' : 'opacity-0 hover:opacity-100'
              } transition-opacity duration-100`}
            >
              <ArrowPrevIcon fillColor="var(--hover-icon-color)" />
            </div>
          </PrimaryButton>

          {/* Right Navigation Button */}
          <PrimaryButton
            className={`w-11 h-12 relative overflow-hidden !p-0 ${
              disableRightButton ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => handleScroll('right')}
            disabled={disableRightButton}
          >
            <div
              className={`absolute inset-0 ${
                disableRightButton ? '' : 'opacity-100 hover:opacity-0'
              } transition-opacity duration-100`}
            >
              <ArrowNextIcon />
            </div>
            <div
              className={`absolute inset-0 ${
                disableRightButton ? '' : 'opacity-0 hover:opacity-100'
              } transition-opacity duration-100`}
            >
              <ArrowNextIcon fillColor="var(--hover-icon-color)" />
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
