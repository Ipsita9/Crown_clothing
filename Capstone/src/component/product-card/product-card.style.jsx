import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  
  h2{
    padding-top: 20px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  
  .add-to-cart-button {
    position: absolute;
     bottom: 12px; // 👈 few px from bottom
    left: 50%;
    transform: translateX(-50%);
    width: 80%;

    opacity: 0;
    // invisible by default
    pointer-events: none;
    transition: opacity 0.3s ease, bottom 0.3s ease;
  }
  &:hover {
    img {
      filter: brightness(90%);
      opacity: 0.85;
    }
    .add-to-cart-button {
      opacity: 1;
      bottom: 20px; //  slight upward movement
      pointer-events: auto;
    }

`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; // 👈 pushes items to both sides
  align-items: center;
  margin-top: 2px;
`;
export const Name = styled.span`
  font-size: 1.6rem;
  color: rgb(15, 11, 35);
`;
export const Price = styled.span`
  color: blueviolet;
  font-size: 16px;
  font-weight: 500;
`;
