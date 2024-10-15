
import RegisterPage from '@pages/RegisterPage';
import { AppSpinner } from '@ui/atoms/AppSpinner';
import AboutPage from '@ui/templates/AboutPage';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductModule from 'src/modules/usersModule/usersModule';

const MainModule = lazy(() => import('../modules/mainModule/mainModule'))
const LandingPage = lazy(() => import('../pages/LandingPage/index'));

const OurStoryPage = lazy(() => import('@pages/OurStoryPage'));
const ReturnsAndExchangePage = lazy(() => import('@pages/ReturnsAndExchangePage'));
const OurPeelLegacyPage = lazy(() => import('@pages/OurPeelLegacyPage'));
const ContactUsPage = lazy(() => import('@pages/ContactUsPage'));
const CulturePage = lazy(() => import('@pages/CulturePage'));
const SubscriptionTermsPage = lazy(() => import('@pages/SubscriptionTermsPage'));
const AboutModule = lazy(() => import('src/modules/aboutModule/aboutModule'));

// UserModule

// ProductModule

//Test Module
const TestPage = lazy(() => import('../pages/TestPage/testPage'));

//Product Details Page
const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage'))

export const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<LoginPage />} /> */}
    {/* <Route path="/" element={<RegisterPage />} /> */}
    <Route path="/" element={
      <Suspense fallback={<AppSpinner />}>
        <MainModule />
      </Suspense>
    }>
      <Route path="" element={<LandingPage />}></Route>
      <Route path = "auth/register" element={<RegisterPage/>}></Route>

      {/* User Module */}
      {/* <Route path="/users" element={<UserModule />}>
                   <Route  path="/" element={<Users/>}></Route>
                   <Route  path="users/:id" element={<UserDetails}></Route>
                </Route> */}

      {/* Product module */}
      <Route path="/products" element={<ProductModule />}>
        {/* <Route  path="/" element={<Products/>}></Route> */}
        <Route  path=":id" element={<ProductDetailsPage/>}></Route>
      </Route> 

      {/* About module */}
      <Route path="/about" element={<AboutModule />}>
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="our-story" element={<OurStoryPage />} />
        <Route path="culture" element={<CulturePage />} />
        <Route path="our-peel-legacy" element={<OurPeelLegacyPage />} />
        <Route path="returns-exchanges" element={<ReturnsAndExchangePage />} />
        <Route path="subscriptions" element={<SubscriptionTermsPage />} />
        <Route path="FAQs" element={<AboutPage />} />
      </Route>

      <Route path="/test" element={<TestPage />}></Route>
      {/* <Route path='/ProductDetails' element={<ProductDetailsPage/>}></Route> */}

    </Route>
  </Routes>
)
