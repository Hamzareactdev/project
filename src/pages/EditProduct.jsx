import React from 'react';
import { useUpdateProductMutation, useGetProductQuery } from '../features/products/productsApi';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../features/products/ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();
  const { data: product, isLoading } = useGetProductQuery(id);

  const handleSubmit = async (productData) => {
    try {
      await updateProduct({ id, ...productData }).unwrap();
      alert('Product updated successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to update product!');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <ProductForm product={product} onSubmit={handleSubmit} isEditing={true} />;
};

export default EditProduct;