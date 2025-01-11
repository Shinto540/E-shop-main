import React, { useState } from 'react';

const CreateProductPage = () => {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to create the product
    console.log('Product created:', product);
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductPage;
