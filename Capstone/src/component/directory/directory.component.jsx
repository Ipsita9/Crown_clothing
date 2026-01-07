import DirectoryItem from "../directory-item/directory-item.component";
import "./directory-style.scss";

const categories = [
  {
    id: 1,
    title: "HATS",
    img: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "SNEAKERS",
    img: "https://www.footshop.cz/blog/wp-content/uploads/2023/04/KOV07592.jpg",
    route: "shop/sneakers",
  },
  {
    id: 3,
    title: "JACKETS",
    img: "https://thursdayboots.com/cdn/shop/files/1024x1024-Mens-Keanu-Black-010924-1_1024x1024.jpg?v=1705095642",
    route: "shop/jackets",
  },
  {
    id: 4,
    title: "WOMENS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-vgSgOESUFF0MNHG8n_4QVzD3bRRUk2H-Q&s",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "MENS",
    img: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/18802370/2022/8/30/217d55e4-0164-49da-a5b2-556453b734dd1661838196343-BEAT-LONDON-by-PEPE-JEANS-Men-Shirts-6291661838195524-1.jpg",
    route: "shop/mens",
  },
  {
    id: 6,
    title: "TRADITIONAL SAREE",
    img: "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-tissue-silk-saree-in-mustard-v1-sff3700.jpg",
    route: "shop/traditional",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
