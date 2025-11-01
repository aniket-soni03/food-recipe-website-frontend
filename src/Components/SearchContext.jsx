// src/Components/SearchContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Optional: persist across refreshes (localStorage)
  useEffect(() => {
    try {
      const rawRecipes = localStorage.getItem("app_recipes");
      const rawQuery = localStorage.getItem("app_searchQuery");
      if (rawRecipes) setRecipes(JSON.parse(rawRecipes));
      if (rawQuery) setSearchQuery(rawQuery);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("app_recipes", JSON.stringify(recipes));
      localStorage.setItem("app_searchQuery", searchQuery);
    } catch (e) {
      // ignore
    }
  }, [recipes, searchQuery]);

  return (
    <SearchContext.Provider value={{ recipes, setRecipes, searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
