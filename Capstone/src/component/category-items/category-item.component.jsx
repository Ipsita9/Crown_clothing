import "./category-item.style.scss";

// import App from "./App.jsx";

const CategoryItem = ({ category }) => {
  const { title, img } = category;
  return (
    <div className="category-container">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
