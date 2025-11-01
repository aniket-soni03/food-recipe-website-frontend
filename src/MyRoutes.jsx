// src/routes/MyRoutes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavBar";
import FoodSearch from "./Components/FoodSearch";
import NutritionPage from "./Components/NutritionPage";
import CartPage from "./Components/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <FoodSearch />
      </>
    ),
  },
  {
    path: "/nutrition/:id",
    element: (
      <>
        <Navbar />
        <NutritionPage />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <CartPage />
      </>
    ),
  },
]);

export default router;
