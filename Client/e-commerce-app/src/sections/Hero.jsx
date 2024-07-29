import React from 'react'

const Hero = () => {
    return (
        <section className="bg-blue-600 text-white text-center py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold">Welcome to Trade.Wave</h2>
            <p className="mt-4 text-lg">Discover amazing products and exclusive deals.</p>
            <a href="#products" className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded-full font-semibold">Shop Now</a>
          </div>
        </section>
      );
    };
  
  export default Hero;