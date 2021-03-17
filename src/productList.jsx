import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductEntry from "./productEntry.jsx";
export default function ProductList(props) {
  const filteredProducts = props.products.filter(
    (product) =>
      product.title.includes(props.filterTerm) ||
      product.title.toLowerCase().includes(props.filterTerm) ||
      product.category.toLowerCase().includes(props.filterTerm) ||
      product.category.includes(props.filterTerm) ||
      product.description.toLowerCase().includes(props.filterTerm) ||
      product.description.includes(props.filterTerm) ||
      product.price === props.filterTerm
  );
  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductEntry
            product={product}
            key={product.id}
            setView={props.setView}
            setClickedProduct={props.setClickedProduct}
          />
        ))
      ) : (
        <div>No Results Available. Please Search Again</div>
      )}
    </div>
  );
}
