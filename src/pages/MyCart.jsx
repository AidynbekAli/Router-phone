import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";

export const MyCart = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const openSmart = (smartId) => {
    navigate(`/mycart/${smartId}`);
  };

  const fethUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error", error));
  };

  useEffect(() => {
    fethUsers();
  }, []);
  return (
    <>
      <CartContainer>
        <h2>Users</h2>
        <ul>
        {data.map((rout) => (
          <li
            key={rout.id}
            onClick={() => openSmart(rout.id)}
          >
            <h2>{rout.name}</h2>
          </li>
        ))}
      </ul>
      </CartContainer>
      <Button>Go Back</Button>
    </>
  );
};
const CartContainer = styled.div`

  margin: 2.5rem;
  width: 80%;
  height: 50vh;
  background-color: white;
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    flex-wrap:wrap;
    gap: 40px;
   
  }
  h2{
    font-family: sans-serif;
    text-decoration: none;
  }
 
`;
