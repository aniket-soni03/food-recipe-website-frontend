// src/routes/MyRoutes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavBar";
import FoodSearch from "./Components/FoodSearch";
import NutritionPage from "./Components/NutritionPage";
import CartPage from "./Components/CartPage";
import ScrollToTop from "./Components/ScrollToTop"; // ✅ add this import

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ScrollToTop /> {/* ✅ Keep inside router context */}
        <FoodSearch />
      </>
    ),
  },
  {
    path: "/nutrition/:id",
    element: (
      <>
        <Navbar />
        <ScrollToTop /> {/* ✅ works here */}
        <NutritionPage />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
        <CartPage />
      </>
    ),
  },
]);

export default router;
