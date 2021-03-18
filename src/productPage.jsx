import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductInfo from "./productInfo.jsx";
import ProductPageImage from "./productPageImage.jsx";

export default function ProductPage(props) {
  return (
    <div>
      <div>
        <button onClick={() => props.setView("list")}>Back to results</button>
      </div>
      <div>
        <ProductPageImage product={props.clickedProduct} />
        <ProductInfo product={props.clickedProduct} />
      </div>
    </div>
  );
}
