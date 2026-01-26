
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
