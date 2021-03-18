import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ProductName = styled.h3`
  color: blue;
  font-size: 15px;
`;

const ProductImage = styled.img`
  max-width: 50px;
  max-height: 50px;
  margin: 10px 20px 10px 20px;
  border: 2px solid black;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 4px solid black;
  margin: 5px 0px 5px 0px;
  justify-content: left;
  background-color: #9db4c0;
`;
const ProductPrice = styled.div`
  color: red;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductEntry(props) {
  const handleClick = () => {
    props.setView("product");
    props.setClickedProduct({
      title: props.product.title,
      description: props.product.description,
      category: props.product.category,
      image: props.product.image,
      id: props.product.id,
      price: props.product.price,
    });
  };
  return (
    <ProductContainer onClick={() => handleClick()}>
      <ProductImage src={props.product.image}></ProductImage>
      <ProductInfo>
        <ProductName>{props.product.title}</ProductName>
        <ProductPrice>${props.product.price}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  );
}
