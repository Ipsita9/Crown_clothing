import styled from "styled-components";

/* Parent container */
export const DirectoryItemContainer = styled.div`
  position: relative;
  height: 280px;
  width: 400px;
  overflow: hidden;
  border: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Background image */
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  
  background-size: contain;   /* 👈 KEY CHANGE */


  
  background-position: center;
  background-image: ${({ img }) => `url(${img})`};

  z-index: 1;
  transform: scale(1);
  transition: transform 0.5s ease;

  ${DirectoryItemContainer}:hover & {
    transform: scale(1.08);
  }
`;

/* Category text box */
export const CategoryBody = styled.div`
  position: relative;
  z-index: 2;

  background: rgba(255, 255, 255, 0.75);
  padding: 20px;
  text-align: center;
  border: 1px solid #333;
`;
