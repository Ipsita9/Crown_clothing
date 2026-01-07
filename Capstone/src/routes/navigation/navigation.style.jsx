import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  overflow: visible;

  height: 70px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);

  transition: box-shadow 0.3s ease, background-color 0.3s ease,
    transform 0.3s ease;
  &.scrolled {
    
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: 50px; // 👈 control logo size
  width: auto; // keep aspect ratio
  object-fit: contain;
  display: block;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #cedc36;
  }
`;

