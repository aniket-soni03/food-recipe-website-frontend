// src/pages/NutritionPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./NutritionPage.css";

const API_KEY =  "0764da071c364f24bce1b40ad91f4be3"; // replace with env var in production

const NutritionPage = () => {
  const { id } = useParams();
  const [nutri, setNutri] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error("No nutrition");
        const data = await res.json();
        setNutri(data);
      } catch (e) {
        console.error("Nutrition fetch error", e);
        setNutri(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  return (
    <div className="nutrition-wrap">
      <div className="inner">
        <Link to="/" className="back-link">← Back to search</Link>
        <h2>Nutrition Details</h2>

        {loading && <p>Loading nutrition...</p>}
        {!loading && !nutri && <p>No nutrition data available for this recipe.</p>}
        {nutri && (
          <div className="nutri-grid">
            <div className="nutri-item"><h4>Calories</h4><p>{nutri.calories}</p></div>
            <div className="nutri-item"><h4>Carbs</h4><p>{nutri.carbs}</p></div>
            <div className="nutri-item"><h4>Fat</h4><p>{nutri.fat}</p></div>
            <div className="nutri-item"><h4>Protein</h4><p>{nutri.protein}</p></div>
            <div className="nutri-item full"><h4>Servings</h4><p>{nutri.servings || "N/A"}</p></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionPage;
