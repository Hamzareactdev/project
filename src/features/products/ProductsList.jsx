import React from 'react';
import { useGetAllProductsQuery } from './productsApi';
import ProductCard from './ProductCard';
import { Grid, CircularProgress, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const { data: products, isLoading, isError, error } = useGetAllProductsQuery();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography color="error">Error loading products: {error.message}</Typography>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Typography variant="h4">Products</Typography>
        <Button
          component={Link}
          to="/add-product"
          variant="contained"
          color="primary"
        >
          Add Product
        </Button>
      </div>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsList;