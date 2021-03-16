import React, { useEffect, useState } from "react";
import style from "styled-components";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((products) => setProducts(products));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return <div>App Rendered</div>;
}
