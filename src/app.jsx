import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import ProductList from "./productList.jsx";
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const LoadingZone = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function App() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios
      .get("/data")
      .then((res) => res.data)
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <LoadingZone>
          <h3>Loading....</h3>
          <Spinner></Spinner>
        </LoadingZone>
      )}
    </div>
  );
}
