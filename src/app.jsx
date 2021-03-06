import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import ProductList from "./productList.jsx";
import SearchBar from "./search.jsx";
import ProductPage from "./productPage.jsx";
import API_KEY from "./config/API_key.js";
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

const BlackHeaderBar = styled.div`
  background-color: black;
  margin: 10px;
  font-size: 10px;
`;
export default function App() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios
      .get(
        "https://demo34107.appliances.dev.rwsgateway.com/FRONT-END-DEV-PRODUCT-TEST",
        {
          params: {
            test_api_key: API_KEY,
          },
        }
      )
      .then((res) => res.data)
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  // const [products, setProducts] = useState(FakeProducts);
  const [filterTerm, setFilterTerm] = useState("");
  const [view, setView] = useState("list");
  const [clickedProduct, setClickedProduct] = useState({});
  const renderView = () => {
    if (view === "product") {
      return (
        <div>
          <BlackHeaderBar>Hello</BlackHeaderBar>
          <ProductPage setView={setView} clickedProduct={clickedProduct} />
        </div>
      );
    } else if (view === "list") {
      return (
        <div>
          <BlackHeaderBar>Hello</BlackHeaderBar>
          <div>
            <SearchBar setFilterTerm={setFilterTerm} />
          </div>
          <div>
            {products.length > 0 ? (
              <ProductList
                products={products}
                filterTerm={filterTerm}
                setView={setView}
                setClickedProduct={setClickedProduct}
              />
            ) : (
              <LoadingZone>
                <h3>Loading....</h3>
                <Spinner></Spinner>
              </LoadingZone>
            )}
          </div>
        </div>
      );
    }
  };

  return <div>{renderView()}</div>;
}
