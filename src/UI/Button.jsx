import React from 'react';

import { styled } from 'styled-components';

export const  Button=({children})=> {
    const goBack = () => { 
        window.history.back(); 
      };
  return (
    <div>
      <GoBackBtn onClick={goBack}>{children}</GoBackBtn>
     
    </div>
  );
}



const GoBackBtn = styled.button`
    background-color: #158459;
     color: white;
     font-size: 20px;
     font-weight: 700;
  width: 130px; 
  height: 40px; 
  border: none; 
  border-radius: 20px; 
  transition: background-color 0.2s ease; 
  margin-top:20px;
  margin-left: 50px; 
  margin-bottom: 50px; 
 
  &:hover { 
    background-color: #1aa83bb3; 
  } 
  &:active { 
    background-color: #07482f; 
  } 

`