import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Button } from "../UI/Button";
import { useParams } from "react-router-dom";

export const MyOrder = () => {
  const [userData, setUserData] = useState([]);
  const params = useParams();
 
  const userId = params.myorderId;
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error", error));
  }, [userId]);
  return (
    <>
      <OrderContainer>
      <h1>User</h1>
      <h2>{userData.name}</h2>
      <h3>{userData.email}</h3>
      <h4>{userData.phone}</h4>
      </OrderContainer>
      <Button>Go Back</Button>
    </>
  );
};
const OrderContainer = styled.div`
  margin: 2.5rem;
  padding: 40px;
  width: 80%;
  height: 40vh;
  background-color: white;
`;
