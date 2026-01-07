import { useContext ,useState,useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../component/product-card/product-card.component";

import {CategoryContainer ,Title} from "./category.style.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category] || []);
  }, [category, categoriesMap]);

  return (
     <Fragment><Title>{category}</Title> 
     
    <CategoryContainer>
       
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CategoryContainer>
    </Fragment>
  );
};

export default Category;