import React from "react";
import { jest } from "@jest/globals";
import { mount, shallow, render } from "enzyme";
import ProductList from "../src/ProductList";
import App from "../src/app.jsx";
import FakeProducts from "./product.json";
import ProductEntry from "../src/productEntry.jsx";
import ProductPage from "../src/productPage.jsx";
import ProductPageImage from "../src/productPageImage.jsx";
import ProductInfo from "../src/productInfo.jsx";

const sampleProduct = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men clothing",
  image:
    "http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_shirt_01.jpg",
};
test("truth serum", () => {
  expect("true").toBe("true");
});

describe("productlist", () => {
  test("snapshot renders", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  test("should render productlist to the app", () => {
    const wrapper = shallow(<ProductList products={FakeProducts} />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("ProductEntry", () => {
  test("should render 20 products to the product list", () => {
    const wrapper = mount(
      <ProductList products={FakeProducts} filterTerm={""} />
    );
    expect(wrapper.find(ProductEntry)).toHaveLength(20);
  });
});

describe("Product Page", () => {
  test("should render product page", () => {
    const wrapper = mount(<ProductPage clickedProduct={sampleProduct} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render product information to the product page", () => {
    const wrapper = mount(<ProductPage clickedProduct={sampleProduct} />);
    expect(wrapper.find(ProductInfo)).toHaveLength(1);
  });
  test("should render product title to the product page", () => {
    const wrapper = shallow(<ProductInfo product={sampleProduct} />);
    expect(wrapper.find("h3").text()).toEqual(
      "Mens Casual Premium Slim Fit T-Shirts - $22.3"
    );
  });

  test("should render product image to the product page", () => {
    const wrapper = mount(<ProductPage clickedProduct={sampleProduct} />);
    expect(wrapper.find(ProductPageImage)).toHaveLength(1);
  });
});
