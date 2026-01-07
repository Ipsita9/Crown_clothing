import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer ,BackgroundImage,CategoryBody } from "./directory-item.style.jsx";

// import App from "./App.jsx";

const DirectoryItem = ({ category }) => {
  const { title, img,route } = category;
  const navigate=useNavigate();

  const onNavigateHandler=()=>navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage img={img}
        // style={{ backgroundImage: `url(${img})` }}
      />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
