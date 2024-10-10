
import RegisterPage from '@pages/RegisterPage';
import { AppSpinner } from '@ui/atoms/AppSpinner';
import ContactUs from '@ui/organisms/About/ContactUs';
import Culture from '@ui/organisms/About/Culture';
import PeelLegacy from '@ui/organisms/About/OurPeelLegacy';
import OurStory from '@ui/organisms/About/OurStory';
import ReturnsAndExchange from '@ui/organisms/About/Returns&Exchange';
import SubscriptionTerms from '@ui/organisms/About/Subscriptions';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutModule from 'src/modules/aboutModule/aboutModule';
import ProductModule from 'src/modules/usersModule/usersModule';

const MainModule = lazy(() => import('../modules/mainModule/mainModule'))
const LandingPage = lazy(() => import('../pages/LandingPage/index'));

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
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="culture" element={<Culture />} />
        <Route path="our-peel-legacy" element={<PeelLegacy />} />
        <Route path="returns-exchange" element={<ReturnsAndExchange />} />
        <Route path="subscription" element={<SubscriptionTerms />} />
      </Route>

      <Route path="/test" element={<TestPage />}></Route>
      {/* <Route path='/ProductDetails' element={<ProductDetailsPage/>}></Route> */}
    </Route>
  </Routes>
)
