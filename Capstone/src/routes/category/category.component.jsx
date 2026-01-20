// import { useState,useEffect, Fragment} from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCategoriesMap } from "../../store/categories/category.selector.js";
// import ProductCard from "../../component/product-card/product-card.component";

// import {CategoryContainer ,Title} from "./category.style.jsx";

// const Category = () => {
//   console.log("Category file loaded");

//   const { category } = useParams();
//   console.log("render/re-rendering category component")
//   const categoriesMap=useSelector(selectCategoriesMap);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     console.log('effect fired calling setproducts');
//     setProducts(categoriesMap[category] || []);
//   }, [category, categoriesMap]);

//     if (!products.length) {
//     return <h2>Loading products...</h2>;
//   }


//   return (
//      <Fragment><Title>{category}</Title> 
     
//     <CategoryContainer>
       
//       {products &&
//       products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </CategoryContainer>
//     </Fragment>
//   );
// };

// export default Category;
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Spinner from "../../component/spinner/spinner.component";

import { selectCategoriesMap,selectCategoriesIsLoading } from "../../store/categories/category.selector";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading=useSelector(selectCategoriesIsLoading);
  const products = categoriesMap[category] || [];

  if (!products.length) {
    return <h2>Loading products...</h2>;
  }

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {
       isLoading ?(<Spinner/>):
        
      <CategoryContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
}
    </Fragment>
  )
};

export default Category;
