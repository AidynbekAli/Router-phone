import React from "react";
import { Button } from "../UI/Button";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export const PRODUCTS = [
  {
    image:
      "https://m.media-amazon.com/images/I/61U6oC65TTL._AC_UF894,1000_QL80_.jpg",
    title: "SAMSUNG S22 Ultra",
    price: "800$",
    har: "SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, 2022, Phantom Black",
    id: "1",
  },
  {
    image:
      "https://www.tehnooop.fun/wp-content/uploads/2023/02/jSXl7nJqamcmWJjD6cNlYu6tr5SRtpxW6UNsSk6O.jpeg",
    title: "Samsung Galaxy S23 ",
    price: "600$",
    har: "SAMSUNG Galaxy S23 Cell Phone, Factory Unlocked Android Smartphone, 256GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Cream",
    id: "2",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg",
    title: "Galaxy S21 US Version",
    price: "400$",
    har: "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed) The product is refurbished, fully functional, and in good condition. Backed by the 90-day Amazon Renewed Guarantee",
    id: "3",
  },
];

export const Products = () => {
  const navigate = useNavigate();

  const openSmart = (smartId) => {
    navigate(`/products/${smartId}`);
  };

  return (
    <>
      <Container>
        {PRODUCTS.map((rout) => {
          return (
            <CartStyled key={rout.id}>
              <BoxStyle onClick={() => openSmart(rout.id)}>
                <img src={rout.image} alt={rout.title} />
                <h1>{rout.title}</h1>
                <b>{rout.price}</b>
              </BoxStyle>
            </CartStyled>
          );
        })}
      </Container>
      <Button>Go Back</Button>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 5rem;
  h1 {
    font-family: sans-serif;
  }
  b {
    font-family: sans-serif;
  }
`;
const CartStyled = styled.div`
  background-color: white;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  padding: 28px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const BoxStyle = styled.div`
  img {
    width: 420px;
  }
`;
