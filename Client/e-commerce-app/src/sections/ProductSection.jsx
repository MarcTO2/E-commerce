import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '29.99', image: '/src/assets/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: '39.99', image: '/src/assets/images/product2.jpg' },
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
