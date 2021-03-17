import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductInfo(props) {
  return (
    <div>
      <div>{props.product.title}</div>
      <div>{props.product.price}</div>
      <div>{props.product.category}</div>
      <div>{props.product.description}</div>
    </div>
  );
}
