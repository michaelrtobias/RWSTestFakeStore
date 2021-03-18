import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin: 10px 20px 10px 20px;
  border: 2px solid black;
`;
export default function ProductPageImage(props) {
  return (
    <ImageContainer>
      <ProductImage src={props.product.image}></ProductImage>
    </ImageContainer>
  );
}
