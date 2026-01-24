import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductContainer } from "./shop.style.jsx";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

 import { getCategoriesAndDocument } from "../utils/firebase/firebase-util";
 import { setCategories } from "../../store/categories/category-reducer.js";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories=async()=>{
      const categoriesArray=await getCategoriesAndDocument()
       dispatch(setCategories(categoriesArray));

    }
    fetchCategories()
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
