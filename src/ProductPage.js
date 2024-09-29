import React from 'react';

const ProductPage = ({ match }) => {
  const productId = match.params.id;
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div>
      <h1>{product.name}</h1>
      <p>This is the product page for {product.name}.</p>
    </div>
  );
};

export default ProductPage;
