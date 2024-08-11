import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../contexts/authContext/index'

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Products')
  }

  const { currentUser } = useAuth()

  const products = [
    { id: 1, name: 'Product 1', price: '29.99', image: '/src/assets/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: '39.99', image: '/src/assets/images/product2.jpg' },
    // Add more products as needed
  ];

    return (
      <div>
        <section className="bg-blue-600 text-white text-center py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold">Welcome to Trade.Wave</h2>
            <p className="mt-4 text-lg">Discover amazing products and exclusive deals.</p>
            <button onClick={handleButtonClick} className="mt-6 inline-block bg-white text-blue-600  hover:text-blue-500 py-2 px-4 rounded-full font-semibold">Shop Now</button>
          </div>
        </section>
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-2 mx-auto m-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </section>
        </div>
      );
    };
  
  export default Hero;