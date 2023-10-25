import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { current } from "../redux/auth/auth-operations";

// const Breadcrumbs = lazy(() =>
//   import("../shared/components/Breadcrumbs/Breadcrumbs")
// );
const Header = lazy(() => import("../modules/Header/Header"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
// const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const NotiesPage = lazy(() => import("../pages/NotiesPage/NotiesPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const MenuPage = lazy(() => import("../pages/MenuPage/MenuPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage/ReviewsPage"));
const Footer = lazy(() => import("../modules/Footer/Footer"));

const SharedLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <Header />
      {/* {pathname !== "/" && <Breadcrumbs />} */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/noties/:categori" element={<NotiesPage />} />
        <Route path="/user" element={<Navigate to="/user/personal-info" />} />
        <Route path="/user/:id" element={<UserPage />} />

        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="*" element={<div>Not Found page</div>} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default SharedLayout;
