import RegisterPage from "@pages/RegisterPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Main Module
const MainModule = lazy(() => import('../modules/mainModule/mainModule'))
const LandingPage = lazy(() => import('../pages/LandingPage/index'));

// UserModule

// ProductModule

//Test Module
const TestPage = lazy(() => import('../pages/TestPage/testPage'));

export const AppRoutes = () => {
    return <>
        <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            {/* <Route path="/" element={<RegisterPage />} /> */}
            <Route path="/" element={<MainModule />}>
                <Route path="" element={<LandingPage />}></Route>
                <Route path = "/register" element={<RegisterPage/>}></Route>
                
                

                {/* User Module */}
                {/* <Route path="/users" element={<UserModule />}>
                   <Route  path="/" element={<Users/>}></Route>
                   <Route  path="users/:id" element={<UserDetails}></Route>
                </Route> */}

                {/* Product module */}
                {/* <Route path="/products" element={<ProductModule />}>
                   <Route  path="/" element={<Products/>}></Route>
                   <Route  path="product/:id" element={<ProductsDetails/>}></Route>
                </Route> */}

                <Route path="/test" element={<Suspense><TestPage /></Suspense> }></Route>
            
             </Route>
        </Routes>
    </>
}