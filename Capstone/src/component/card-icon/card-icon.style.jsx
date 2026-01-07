import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const ShoppingIcon=styled.img`
 width: 100%;
 height: 100%;
 object-fit: contain;


`;

export const CountInside=styled.span`
 position: absolute;
  top: 55%;
   left: 55%;
   transform: translate(-50%, -50%);

   width: 18px;
   height: 18px;

   background-color: black;
   color: white;

   border-radius: 50%;
   font-size: 11px;
   font-weight: bold;

   display: flex;
   align-items: center;
   justify-content: center;

   pointer-events: none;

`;



