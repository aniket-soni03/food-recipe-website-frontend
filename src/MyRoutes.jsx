// src/MyRoutes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavBar";
import FoodSearch from "./Components/FoodSearch";
import NutritionPage from "./Components/NutritionPage";
import CartPage from "./Components/CartPage";
import ScrollToTop from "./Components/ScrollToTop";
import Hero from "./Components/Hero"; // ✅ correct path

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
        <Hero />        {/* ✅ Hero section shows before search */}
        <FoodSearch />
      </>
    ),
  },
  {
    path: "/nutrition/:id",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
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
