import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoriesPreviewContainer,Title,Preview} from "./category-preview.style.jsx";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoriesPreviewContainer>
      <h2>
        <Title to={`/shop/${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoriesPreviewContainer>
  );
};
export default CategoryPreview;
