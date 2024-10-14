
import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './Privacy.styles.scss'
function Privacy() {
  return (
    <div className="mb-10">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555]">
        Privacy
      </HeaderLabel>
      <div className="items-center pb-2">
        <AccordionItem
          title="Is my account information secure?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="privacy-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>
              Yes. We follow industry standard terms. For full details please
              review our{' '}
              <a href="#" className="text-appTheme">
                Privacy Policy.
              </a>
            </p>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default Privacy;