import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector.js";
// import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import SHOP_DATA  from "../../shop-data.js";
import "./categories-preview.style.scss";


const CategoriesPreview=()=>{
    const categoriesMap=useSelector(selectCategoriesMap);

    if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
    return <h2>Loading categories...</h2>;
  }

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </div>
  );
     
   

}
export default CategoriesPreview; 