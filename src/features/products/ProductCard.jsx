import React from 'react';
import { useDeleteProductMutation } from './productsApi';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
      alert('Product deleted successfully!');
    } catch (err) {
      alert('Failed to delete product!');
    }
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.category}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton
          component={Link}
          to={`/edit-product/${product.id}`}
          color="primary"
          aria-label="edit"
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(product.id)}
          color="error"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;