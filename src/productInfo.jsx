import React, { useEffect, useState } from "react";
import styled from "styled-components";
const InfoContainer = styled.div`
  border: 4px solid black;
  padding: 20px;
  background-color: #e1e6ea;
`;
export default function ProductInfo(props) {
  return (
    <InfoContainer>
      <h3>
        {props.product.title} - ${props.product.price}
      </h3>

      <div>{props.product.description}</div>
    </InfoContainer>
  );
}
