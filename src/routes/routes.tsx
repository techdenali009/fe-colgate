
import RegisterPage from '@pages/RegisterPage';
import { AppSpinner } from '@ui/atoms/AppSpinner';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
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

      <Route path="/test" element={<TestPage />}></Route>
      {/* <Route path='/ProductDetails' element={<ProductDetailsPage/>}></Route> */}
    </Route>
  </Routes>
)
