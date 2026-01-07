import { Link, Outlet } from "react-router-dom";
import { useContext,Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import SHOP_DATA  from "../../shop-data.JS";
import "./categories-preview.style.scss";


const CategoriesPreview=()=>{
     const { categoriesMap } = useContext(CategoriesContext);

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