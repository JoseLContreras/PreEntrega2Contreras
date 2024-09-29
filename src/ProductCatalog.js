import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Puppy Food' },
  { id: 2, name: 'Dog Shoes' },
  { id: 3, name: 'Cat Food' },
  { id: 4, name: 'Bird Food' },
];

const ProductCatalog = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
