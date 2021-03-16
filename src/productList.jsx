import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductEntry from "./productEntry.jsx";
export default function ProductList(props) {
  return (
    <div>
      {props.products.map((product) => (
        <ProductEntry product={product} key={product.id} />
      ))}
    </div>
  );
}
