import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductInfo(props) {
  return (
    <div>
      <h3>
        {props.product.title} - ${props.product.price}
      </h3>

      <div>{props.product.description}</div>
    </div>
  );
}
