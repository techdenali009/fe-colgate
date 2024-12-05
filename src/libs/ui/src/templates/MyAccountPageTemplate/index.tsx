import { profileMenuItems } from '@ui/molecules/AccountMenu';
import BusinessSidebar from '@ui/organisms/BusinessSidebar/BusinessSidebar';
import AccountDropdown from '@ui/organisms/MobileDropdown';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function MyAccountPageTemplate() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Update this effect to handle both direct URLs and navigation
  useEffect(() => {
    const path = location.pathname;
    // Extract the category from the URL, defaulting to empty string
    const category = path.split('/').pop() || '';
    // Check if the path includes 'orderhistory' and set accordingly
    if (path.includes('orderhistory')) {
      setSelectedCategory('orderhistory');
    } else {
      setSelectedCategory(category);
    }
  }, [location.pathname]); // Depend on location.pathname to update when route changes

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1020);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategory = (selectedCategory: string) => {
    navigate(`/myaccount/${selectedCategory}`);
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="pt-14 pb-14 px-14">
      {isMobileView && (
        <div className="mb-4">
          <AccountDropdown />
        </div>
      )}

      <div className="flex">
        {!isMobileView && (
          <aside className="w-1/5 pr-14 pl-10 pt-12">
            <div className="mb-8">
              <h2 className="text-xl pb-3 font-HeroNewRegular">Account</h2>
            </div>
            <BusinessSidebar
              className="font-hero_new_regular text-xs font-normal leading-5"
              categories={profileMenuItems}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategory}
              onCategoryActive={setSelectedCategory}
            />
          </aside>
        )}
        <div className="flex-1 p-4 bg-white-100 tm:overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MyAccountPageTemplate;