import React from 'react';
import { useAddProductMutation } from '../features/products/productsApi';
import ProductForm from '../features/products/ProductForm';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const handleSubmit = async (productData) => {
    try {
      await addProduct(productData).unwrap();
      alert('Product added successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to add product!');
    }
  };

  return <ProductForm onSubmit={handleSubmit} isEditing={false} />;
};

export default AddProduct;