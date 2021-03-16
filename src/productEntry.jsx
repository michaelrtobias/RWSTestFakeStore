import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ProductName = styled.h3`
  color: blue;
  font-size: 15px;
`;

export const ProductImage = styled.img`
  max-width: 300px;
  max-height: 300px;
`;
export default function ProductEntry(props) {
  return (
    <div>
      <ProductName>{props.product.title}</ProductName>
      {/* <ProductImage src={props.product.image}></ProductImage> */}
    </div>
  );
}
