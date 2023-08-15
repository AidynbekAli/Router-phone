import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./Products";
import { styled } from "styled-components";
import { Button } from "../UI/Button";

export const DetaliProduct = () => {
  const params = useParams();
  const productId = params.productId;

  const currentProduct = PRODUCTS.find((product) => product.id === productId);
  return (
    <>
      <h1 style={{ color: "white", textAlign:"center" }}>Смартфон</h1>
      <ContainerFind>
        <img src={currentProduct.image} alt={currentProduct.title} />
        <div>
          <h2>{currentProduct.title}</h2>
          <h3>{currentProduct.price}</h3>
          <h3>{currentProduct.har}</h3>
        </div>
      </ContainerFind>
      <Button>Go Back</Button>
    </>
  );
};

const ContainerFind = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 60px;
  img {
    width: 550px;
  }
  h2 {
    font-family: sans-serif;
  }
  h3{
    font-family: sans-serif;
  }
`;
