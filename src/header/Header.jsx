import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "./Header.css";

export const Header = () => {
  // const isActiveClassName = ({isActive}) => {
  //   if (isActive) {
  //     return "mainClass activeClass";
  //   }
  //   return "mainClass";
  // };

  return (
    <>
      <HeaderStyled>
        <h1>iStore</h1>
        <nav>
          <StyledNavLink to="/products" activeClassName="active">
            Products
          </StyledNavLink>
          <StyledNavLink to="/mycart" activeClassName="active">
            My Cart
          </StyledNavLink>
          <StyledNavLink to="/myorder" activeClassName="active">
            My Order
          </StyledNavLink>
        </nav>
      </HeaderStyled>
    </>
  );
};
const HeaderStyled = styled.header`
  background-color: #3030eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 40px;
  h1 {
    color: white;
  }
  & > nav {
    display: flex;
    gap: 30px;
    color: white;
  }

  .activeClass {
    color: red;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  &.active {
    color: #ed1414;
    font-weight: 700;
    font-family: sans-serif;
    
  }
`;
