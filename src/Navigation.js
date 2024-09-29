import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/1">Puppy Food</Link>
        </li>
        <li>
          <Link to="/products/2">Dog Shoes</Link>
        </li>
        <li>
          <Link to="/products/3">Cat Food</Link>
        </li>
        <li>
          <Link to="/products/4">Bird Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
