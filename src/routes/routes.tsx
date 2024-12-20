import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LandingPageSkeleton } from '@ui/templates/LandingPageSkeleton';
import CareersPage from '@pages/CareersPage';
import DoNotSellPersonalInfoPage from '@pages/DoNotSellPersonalInfoPage';
import FrequentlyAskedQuestionsPage from '@pages/FrequentlyAskedQuestionsPage';
import ProductExcellencePage from '@pages/ProductExcellence';
import RegisterPage from '@pages/RegisterPage';
import ShippingTermsPage from '@pages/ShippingTerms';
import PlpPage from '@pages/ProductListPage';
import PCAskinInternationalPage from '@pages/SkinInternationalPage';
import { AccountVerificationPage } from '@pages/AccountVerificationPage';

// Admin Imports
import AdminProduct from '@ui/organisms/AdminProduct';
import UserDate from '@ui/templates/UserDateTemplate';
import AddUserTemplate from '@ui/templates/AddUserTemplate';
import EditUserTemplate from '@ui/templates/EditUserTemplate';
import OrderListTemplate from '@ui/templates/OrderListTemplate';
import OrderEditTemplate from '@ui/templates/OrderEditTemplate';
import AddCommentTemplate from '@ui/templates/AddCommentTemplate';

// Profile and Account Imports
import MyAccountPage from '@pages/MyAccountPage';
import OrderHistoryPage from '@pages/OrderHistoryPage';
import AddFavouritePage from '@ui/organisms/AddFavouritePage';

import CartPage from '@ui/organisms/CartPage';
import OverviewPage from '@ui/organisms/OverViewPage';

import { PrivateRoute } from '@ui/organisms/ProtectedUserRoute';
import ProductModule from 'src/modules/usersModule/usersModule';

import AdminDashboard from '@ui/organisms/AdminPannelDashBoard';
import OrderDetailsTemplate from '@ui/templates/OrderDetailsTemplate';
import DropshipAddresses from '@ui/molecules/DropshipAddresses';
import PaymentPage from '@ui/organisms/PaymentPageComponent';
import PersonalProfile from '@ui/organisms/PersonalProfile';

// Lazy-loaded components
const MainModule = lazy(() => import('src/modules/mainModule/mainModule'));
const LandingPage = lazy(() => import('src/pages/LandingPage'));
const AboutModule = lazy(() => import('src/modules/aboutModule/aboutModule'));
const ProductDetailsPage = lazy(() => import('src/pages/ProductDetailsPage'));
const ContactUsPage = lazy(() => import('@pages/ContactUsPage'));
const CulturePage = lazy(() => import('@pages/CulturePage'));
const OurStoryPage = lazy(() => import('@pages/OurStoryPage'));
const ReturnsAndExchangePage = lazy(
  () => import('@pages/ReturnsAndExchangePage')
);
const OurPeelLegacyPage = lazy(() => import('@pages/OurPeelLegacyPage'));
const SubscriptionTermsPage = lazy(
  () => import('@pages/SubscriptionTermsPage')
);
const TermsConditionPage = lazy(() => import('@pages/Terms&ConditionsPage'));
const TestPage = lazy(() => import('../pages/TestPage/testPage'));
const AdminModule = lazy(() => import('src/modules/adminModule/adminModule'));
const CartModule = lazy(() => import('src/modules/CartModule/cartModule'));
const ProfileModule = lazy(
  () => import('src/modules/ProfileModule/profileModule')
);

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LandingPageSkeleton />}>
              <MainModule />
            </Suspense>
          }
        >
          <Route path="" element={<LandingPage />} />
          <Route path="auth/register" element={<RegisterPage />} />

          {/* Protected User Routes */}
          <Route
            path="/myaccount"
            element={
              <PrivateRoute>
                <ProfileModule />
              </PrivateRoute>
            }
          >
            <Route path="" element={<MyAccountPage />}>
              <Route path="Orders" element={<OrderHistoryPage />} />
              <Route path="overview" element={<OverviewPage />} />
              <Route path="Orders/:id" element={<OrderDetailsTemplate/>} />
              <Route path="Invoices" element={<p>My Invoices</p>} />
              <Route
                path="PersonalProfile"
                element={<PersonalProfile />}
              />
              <Route path="Shipping" element={<p>My Shipping</p>} />
              <Route path="PaytmMethod" element={<p>My PaytmMethod</p>} />
              <Route
                path="Favorites"
                element={<AddFavouritePage className="" />}
              />
              <Route path="Dropshipaddresses" element={<DropshipAddresses/>} /> 
            </Route>
           
          </Route>

          {/* Cart Routes */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartModule />
              </PrivateRoute>
            }
          >
            <Route path="" element={<CartPage />} />
          </Route>

          {/* About Module */}
          <Route path="/about" element={<AboutModule />}>
            <Route path="contact-us" element={<ContactUsPage />} />
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="culture" element={<CulturePage />} />
            <Route path="our-peel-legacy" element={<OurPeelLegacyPage />} />
            <Route
              path="returns-exchanges"
              element={<ReturnsAndExchangePage />}
            />
            <Route path="subscriptions" element={<SubscriptionTermsPage />} />
            <Route path="FAQs" element={<FrequentlyAskedQuestionsPage />} />
            <Route path="faq" element={<FrequentlyAskedQuestionsPage />} />
            <Route path="Shipping-terms" element={<ShippingTermsPage />} />
            <Route path="terms-conditions" element={<TermsConditionPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route
              path="product-excellence"
              element={<ProductExcellencePage />}
            />
            <Route
              path="pca-skin-international"
              element={<PCAskinInternationalPage />}
            />
            <Route
              path="do-not-sell-my-personal-information"
              element={<DoNotSellPersonalInfoPage />}
            />
          </Route>

          {/* Other Routes */}
          <Route path="/test" element={<TestPage />} />
          <Route path="/products" element={<ProductModule />}>
            <Route path="" element={<PlpPage />}></Route>
            {/* <Route  path="/" element={<Products/>}></Route> */}
            <Route path=":id" element={<ProductDetailsPage />}></Route>
          </Route>
          <Route path='/payment' element={<PaymentPage onClose={()=>{}}/>} />
        </Route>

        {/* Admin Routes - Fully Protected and Admin-Only */}
        <Route
          path="admin"
          element={
            <Suspense fallback={<LandingPageSkeleton />}>
              <PrivateRoute>
                <AdminModule />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route path="products" element={<AdminProduct />} />
          <Route path="users" element={<UserDate />} />
          <Route path="adduser" element={<AddUserTemplate />} />
          <Route path="users/:id" element={<EditUserTemplate />} />
          <Route path="Orders" element={<OrderListTemplate />} />
          <Route path="Orders/:id" element={<OrderEditTemplate />} />
          <Route path="addcomment/:id" element={<AddCommentTemplate />} />
          <Route path="Inventory" element={<p>This is Inventory</p>} />
          <Route path="Dashboard" element={<AdminDashboard></AdminDashboard>} />
          <Route path="Review" element={<p>This is Review</p>} />
          <Route path="Settings" element={<p>This is Settings</p>} />
          <Route path="MyProfile" element={<p>This is MyProfile</p>} />
          <Route
            path="ChangePassword"
            element={<p>This is Change Password</p>}
          />
          {/* Lazy-loaded Admin Specific Routes */}
        </Route>
       
        {/* Account Verification */}
        <Route path="/verifyToken" element={<AccountVerificationPage />} />
      </Routes>
    </>
  );
};
