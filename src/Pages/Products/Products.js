import { Grid } from "@mui/material";
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {productsData.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default Products;
