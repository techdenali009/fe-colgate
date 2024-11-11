
import { HeaderLabel } from '@ui/molecules/HeaderLabel';
import { useEffect, useState, useRef } from 'react';
import BusinessSidebar from '../BusinessSidebar/BusinessSidebar';
import ProfessionalsAccount from '@ui/molecules/ProfessionalsAccount';
import OrdersShipping from '@ui/molecules/OrdersShipping';
import Billing from '@ui/molecules/Billing';
import Returns from '@ui/molecules/Returns';
import ProductsPricing from '@ui/molecules/ProductsPricing';
import Privacy from '@ui/molecules/Privacy';
import SellingOnline from '@ui/molecules/SellingOnline';
import Education from '@ui/molecules/Education';
import TechnicalIssues from '@ui/molecules/TechnicalIssues';
import ContactUs from '@ui/molecules/ContactUs';
import Arrow_down_black from '../../../assets/Arrow-down-black.svg';

interface FrequentlyAskedQuestionsProps {
  coursesData: {
    courseCategories: string[];
    aboutCategories: string[];
  };
}
//faqs
export function FrequentlyAskedQuestions({
  coursesData,
}: FrequentlyAskedQuestionsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const professionalsRef = useRef<HTMLDivElement | null>(null);
  const ordersRef = useRef<HTMLDivElement | null>(null);
  const billingRef = useRef<HTMLDivElement | null>(null);
  const returnsRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const privacyRef = useRef<HTMLDivElement | null>(null);
  const sellingRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const technicalRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  // Function to scroll to the correct section based on category selection
  const scrollToSection = (category: string | null) => {
    const scrollOffset = 180;

    let sectionRef: HTMLDivElement | null = null;

    switch (category) {
    case 'Professionals Account':
      sectionRef = professionalsRef.current;
      break;
    case 'Orders & Shipping':
      sectionRef = ordersRef.current;
      break;
    case 'Billing':
      sectionRef = billingRef.current;
      break;
    case 'Returns':
      sectionRef = returnsRef.current;
      break;
    case 'Products & Pricing':
      sectionRef = pricingRef.current;
      break;
    case 'Privacy':
      sectionRef = privacyRef.current;
      break;
    case 'Selling Online':
      sectionRef = sellingRef.current;
      break;
    case 'Education':
      sectionRef = educationRef.current;
      break;
    case 'Technical Issues':
      sectionRef = technicalRef.current;
      break;
    case 'Contact Us':
      sectionRef = contactRef.current;
      break;
    default:
      break;
    }

    if (sectionRef) {
      const topPosition =
        sectionRef.getBoundingClientRect().top + window.scrollY - scrollOffset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      scrollToSection(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory('Professionals Account');
  }, []);

  return (
    <div className="grid lg:gap-8 gap-4 grid-cols-12">
      <div className="lg:col-span-3 col-span-12 mt-10">
        <div className="lg:mb-6 mb-8">
          <HeaderLabel className="text-appTheme font-bold lg:!text-[2.375rem] !text-[1.75rem] tracking-normal !leading-none font-HeroNewBold ">
            Frequently Asked Questions
          </HeaderLabel>
        </div>
        <div className="relative  lg:hidden mb-4">
          <select
            value={selectedCategory || ''}
            onChange={handleCategoryChange}
            className="font-HeroNewBold font-bold w-full text-left border border-black rounded-3xl px-4 py-2.5 text-appTheme appearance-none dark:bg-appModalColor dark:border-none"
          >
            {coursesData.aboutCategories.map((category) => (
              <option key={category} value={category} className="text-appTheme">
                {category}
              </option>
            ))}
          </select>
          <img
            src={Arrow_down_black}
            alt="Dropdown arrow"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
          />
        </div>
        <div className="hidden lg:block">
          {/* Sidebar of FAQ's */}
          <BusinessSidebar
            categories={coursesData.aboutCategories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            className=""
            buttonClassName="font-HeroNewBold font-bold !px-4 !py-2.5 !text-[100%] !leading-[1.25rem] hover:!text-appTheme"
            liClassName="border-l-4 "
            selectedClassName='bg-[#eef4ff] !text-appTheme '
          />
        </div>
      </div>

      {/* FAQ's question and answer */}
      <div className="lg:mt-10 mt-0 lg:col-span-9 col-span-12">
        <div ref={professionalsRef}>
          <ProfessionalsAccount />
        </div>
        <div ref={ordersRef}>
          <OrdersShipping />
        </div>
        <div ref={billingRef}>
          <Billing />
        </div>
        <div ref={returnsRef}>
          <Returns />
        </div>
        <div ref={pricingRef}>
          <ProductsPricing />
        </div>
        <div ref={privacyRef}>
          <Privacy />
        </div>
        <div ref={sellingRef}>
          <SellingOnline />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={technicalRef}>
          <TechnicalIssues />
        </div>
        <div ref={contactRef}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
