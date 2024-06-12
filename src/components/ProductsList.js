import React, { useState } from 'react';
import styled from 'styled-components';
import productsData from '../data/products';
import Product from './Product';

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 16px 0;
`;

const ProductList = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const filteredProducts = productsData
    .filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'price-low-to-high') {
        return a.price - b.price;
      } else if (sort === 'price-high-to-low') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <ProductListContainer>
      <FilterSortContainer>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </FilterSortContainer>
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
