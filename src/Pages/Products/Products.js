import React from "react";
import styled from "styled-components";
import { productsData } from "../Home/ProductsData/ProductsData";
import Product from "../Product/Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {productsData.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
