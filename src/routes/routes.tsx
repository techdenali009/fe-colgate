import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(()=> import('../pages/LandingPage/index'))

export const AppRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </>
}