import React from 'react';
import styled from "styled-components"

const Title = styled.h1`
  font-family: 'Pushster', cursive;
  text-align: center;
  color: #0074D9;
  padding-top: 50px;
`
const MainTitle = () => {
    return (
        <Title>
            Hi,thats tour ToDoList
        </Title>
    );
};

export default MainTitle;