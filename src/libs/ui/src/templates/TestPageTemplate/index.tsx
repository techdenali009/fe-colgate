import React, {  useState } from 'react';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { SecondaryButton } from '@ui/molecules/SecondaryButton';
import { HeaderLabel } from '@ui/molecules/HeaderLabel';
import { SubtitleLabel } from '@ui/molecules/SubTitleLabel/index';
import { ProductCard } from '@ui/molecules/ProductCard/index';
import { Rating } from '@ui/molecules/Rating';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon';
import { ButtonWithTextAndIcon } from '@ui/molecules/ButtonWithTextAndIcon';
import Popover from '@ui/molecules/Popover/Popover';
import LoginModal from '@ui/organisms/LoginModal';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { LabelButton } from '@ui/molecules/LabelButton';

import ProductCardSkeleton from '@ui/molecules/ProductCardSkeleton/index';
import BannerSkeleton from '@ui/molecules/BannerSkeleton';
import FilterSkeleton from '@ui/molecules/FilterSkeleton/index';
import AccordionItem from '@ui/molecules/AccordianItem/index';
import Currency from '@ui/molecules/Currency/Currency';
import { FilterContainer } from '@ui/molecules/FilterContainer';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import BusinessCard from '@ui/molecules/BussinessCard';
import BusinessCardSkeleton from '@ui/molecules/BussinessCardSkeleton';
import { ButtonWithText } from '@ui/molecules/ButtonWithText/index';
import Sidebar from '@ui/organisms/Sidebar/Sidebar';
import filterData from '@utils/FilterData';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import coursesData from '@utils/CoursesData';
import BusinessSidebar from '@ui/organisms/BusinessSidebar/BusinessSidebar';
import StarRating from '@ui/molecules/HoveringRatingStar';
import ReviewRatings from '@ui/molecules/QuantityValueScent';
import SearchBar from '@ui/molecules/SearchBar';
import ResponseCard from '@ui/molecules/ResponsePCASkin';
import ReviewBarModal from '@ui/organisms/ReviewStarModal';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { relatedProducts } from '@utils/test';
import QuickViewModal from '@ui/organisms/QuickView';
import { products } from '@utils/test';
import { Image } from '@ui/atoms/Image';
import { Button } from '@ui/atoms/Button';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import GreetRegister from '@ui/organisms/GreetingRegister';
import { LandingPageSkeleton} from '../LandingPageSkeleton';

interface ISearchbar {
  submitLabel: string;
  onSubmit: (value: string) => void;
}









  

export const TestTemplatePage: React.FC<ISearchbar> = () => {
  const [toggle, SetToggle] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState<string | null>(null);
  const [filters, setFilters] = useState<string[]>([
    'Body Treatments',
    'Backbar',
    'Sample',
    'Retail',
  ]);
  const [isChecked, setIsChecked] = useState(false); // State for Checkbox

  const [searchQuery, setSearchQuery] = useState('');
 

  

  const navigate = useNavigate();
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    { label: 'Treatment Enhancements' },
  ];



  const handleButtonClick = () => {
    console.log('Learn more clicked!');
  };

  const handleMouseEnter = (button: string) => {
    setIsPopoverVisible(button);
  };

  const handleMouseLeave = () => {
    setIsPopoverVisible(null);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const modalSetToggle = () => {
    SetToggle(!toggle)
  }


  const handleRegisterClick = () => {
    navigate('auth/register'); // Navigate to the /register route
  };

  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters([]);
  };

  const price = 1234.567;


  // Handle sorting option selection
  const handleSortingSelect = (option: string) => {
    console.log('Selected sorting option:', option);
  };
  // State for selected category in business side bar
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const ratings = {
    quality: { score: 4.3, label: 'Quality' },
    value: { score: 4.9, label: 'Value' },
    scent: { score: 3.5, label: 'Scent' },
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [QuickViewModalOpen,setQuickViewModalOpen]=useState(false)
  const openModal = () => setModalOpen(true);
  const openQuickReviewModal=()=>setQuickViewModalOpen(true);
  const closeQuickViewModal=()=>setQuickViewModalOpen(false);

  const isLoggedIn = useSelector((state: RootState) => state.authSlice.userInfo); 
  return (
    <>
      <LandingPageSkeleton/>
      <GreetRegister></GreetRegister>

      <form>
        <div className="flex justify-center mb-4">
          <PrimaryButton className="font-HeroNewBold">
            Primary button
          </PrimaryButton>
          <SecondaryButton>Secondary button</SecondaryButton>
          <ButtonWithTextAndIcon></ButtonWithTextAndIcon>
          <ButtonWithIcon>ButtonwithIcon</ButtonWithIcon>

          <LabelButton>label</LabelButton>
          <ButtonWithText>Button with text</ButtonWithText>
        </div>
        {/* Checkbox Section */}
        <div className="flex m-10 justify-center bg-slate-300 text-blue-700">
          <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
            I agree to the terms and conditions
          </Checkbox>
        </div>
      </form>

      <HeaderLabel className="m-4">Title component</HeaderLabel>
      <SubtitleLabel className="m-4">Subtitle component</SubtitleLabel>

      {/* Filter Dropdown */}
      <div className='m-5'>
        <FilterDropdown
          options={['Alphabetical A - Z', 'Alphabetical Z - A', 'Price Low to High', 'Price High to Low']}
          onSelect={handleSortingSelect}
        >
        </FilterDropdown>
        <FilterDropdown
          options={['Alphabetical A - Z', 'Alphabetical Z - A', 'Price Low to High', 'Price High to Low']}
          onSelect={handleSortingSelect}>
          <div className="p-4 bg-gray-100">
            <p>Additional Options:</p> {/* passing child */}
            <button className="text-blue-500">Extra Action</button>
          </div>
        </FilterDropdown>

      </div>

      {/* Popover buttons */}
      <div className="flex mb-4 space-x-4 justify-center">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('button1')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Popover Button 1
          </button>
          {isPopoverVisible === 'button1' && (
            <Popover>
              <h1 className="text-amber-800">TITLE FOR POPOVER</h1>
              <p>Hello World! I am Button 1 Popover</p>
              <SecondaryButton>Secondary Button</SecondaryButton>
            </Popover>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('button2')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Hover Me
          </button>
          {isPopoverVisible === 'button2' && (
            <Popover maxWidth="800px">
              <h1 className="text-amber-800">POPOVER WITH MAX WIDTH</h1>
              <p>Popover content for button 2.</p>
              <PrimaryButton>Reference Button</PrimaryButton>
            </Popover>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-wrap content-center p-8 m-5 bg-slate-200 leading-10">
        <h1 className="text-slate-950 text-3xl mb-5">Product Prices</h1>
        <p>
          Price in USD:{' '}
          <Currency className="text-blue-900" value={price} currency="USD">
            (including tax)
          </Currency>
        </p>
        <p>
          Price in EUR:{' '}
          <Currency className="text-amber-600" value={price} currency="EUR">
            (excluding VAT)
          </Currency>
        </p>
        <p>
          Price in JPY:{' '}
          <Currency className="text-red-950" value={price} currency="JPY">
            (no decimals)
          </Currency>
        </p>
        <p>
          Custom Decimal Places:{' '}
          <Currency value={price} currency="USD" decimalPlaces={3} />
        </p>
      </div>

      <div className="flex">
        <Sidebar filterData={filterData} />
      </div>

      <h1 className='pl-28 pt-16 font-bold'>Business Sidebar</h1>

      <div className='pl-24 pt-4'>
        <BusinessSidebar
          categories={coursesData.courseCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        >
          <div className="mt-4">
            <p>Select a category to see more details.</p>
          </div>
        </BusinessSidebar>
      </div>

      <div className="mb-4">
        <ProductCard
          name="Stylish Chair"
          imageSrc="https://example.com/chair.jpg"
          altText="A stylish chair"
          className="p-4 border rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-4">
        Rating Component:
        <Rating totalStars={5} initialRating={3} onRatingChange={console.log} />
      </div>

      <div className="mb-4">
        <ProductCard
          name="Stylish Chair"
          imageSrc="https://example.com/chair.jpg"
          altText="A stylish chair"
          className="p-4 border rounded-lg shadow-lg"
          isBestSeller={true}
        />
      </div>

      <div className="mb-4">
        <AccordionItem
          title="Product Category"
          titleClassName="text-lg font-bold text-blue-500"
          containerClassName="border-t border-blue-300"
          contentClassName="p-6 bg-white"
        >
          <div>
            <p>This is the content for the product category accordion item.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </AccordionItem>
      </div>

      <div>
        <h3>Product Card skeleton</h3>
        <ProductCardSkeleton />
      </div>
      <br />
      <div>
        <h3>Banner skeleton</h3>
        <BannerSkeleton />
      </div>
      <br />
      <div>
        <h3>Filter skeleton</h3>
        <FilterSkeleton />
      </div>

      <div>
        <PrimaryButton onClick={modalSetToggle}>Login</PrimaryButton>
        {toggle && <LoginModal closeModal={modalSetToggle} />}
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      <div>
        <ProductCardSkeleton />
      </div>
      <br />
      <div>
        <BannerSkeleton />
      </div>
      <br />
      <div>
        <FilterSkeleton />
      </div>
      <FilterContainer
        filters={filters}
        onRemoveFilter={removeFilter}
        onClearAll={clearAllFilters}
      />

      <div className="p-8">
        <PageTitleHeader breadcrumbs={breadcrumbs}></PageTitleHeader>
      </div>

      <div className="flex justify-center mt-10">
        <BusinessCard
          imageSrc="https://pcaskin.vtexassets.com/arquivos/ids/155951-956-auto/15277-Enhanced-Merchandising--1--1.jpg?v=638307165671830000&width=956&height=auto&aspect=true"
          title="Enhanced Merchandising"
          description="Merchandising is a key part of any successful business. It promotes a positive customer experience to drive sales."
          buttonText="Learn More"
          onButtonClick={handleButtonClick}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <BusinessCardSkeleton />
      </div>

      <div>
        <TwoCardsComponent />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Skin Types</h3>
        <div className="flex flex-wrap space-x-2">
          <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
          <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
        </div>
      </div>

      <div className="p-6">
        <StarRating totalStars={5} initialRating={4} />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-bold mb-4">Product Ratings</h1>
        <ReviewRatings ratings={ratings} />
      </div>

      <div className="container mx-auto p-4 ">
        <h1>Filter Reviews</h1>
        <div>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        
      </div>
      <div className="p-6">
        <ResponseCard title={'Response from PCA SKIN:'} pcaTimeAgo={'3 weeks ago'} iconSrc={'responsePCASkin'} consumerAffairsText={'Thank you for your feedback! We strive to improve our products and appreciate your input. Please reach out if you have any further questions.'} reviewId={1}></ResponseCard>
      </div>
      <div>
        <button onClick={openModal}>Open Review Modal</button>

        {isModalOpen && <ReviewBarModal isVisible={false} onClose={function (): void {
          throw new Error('Function not implemented.');
        }} />}
      </div>
      <RelatedProducts relatedProducts={relatedProducts} className='pl-appPaddingLeft pr-appPaddingRight'/>
      <div>
        <div className="relative group">
          <Image
            className=""
            src={'https://pcaskin.vtexassets.com/arquivos/ids/156885-608-auto/4percent-retinol-peel.jpg?v=638579566473630000&width=608&height=auto&aspect=true'}
            alt={'xyz'}
            width={310}
            height={'auto'}
          />
        
     
          {isLoggedIn && (
            <div className="absolute flex inset-0 bg-[#1e293b82] invisible group-hover:visible w-[310px] justify-center items-center">
              <Button
                onClick={openQuickReviewModal}
                className="w-2/3 absolute bg-appTheme text-[1rem] p-[.344rem ,.118rem] py-[0.625rem] px-[2.313rem] text-white leading-6 font-bold font-HeroNewBold hover:bg-[#555555] justify-center"
              >
              Quick View
              </Button>
            </div>
          )}
        </div>
        <button onClick={openQuickReviewModal}>open Quick review Modal</button>
        {QuickViewModalOpen && <QuickViewModal closeModal={closeQuickViewModal} product={products[0]} />}
      </div>
    </>
  );
};
