import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Trade.Wave</h1>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-blue-100"><Link to="/">Home</Link></li>
          <li className="text-white hover:text-blue-100"><Link to="/products">Products</Link></li>
          <li className="text-white hover:text-blue-100"><Link to="/about">About</Link></li>
          <li className="text-white hover:text-blue-100"><Link to="/contact">Contacts</Link></li>
          <li className="text-white hover:text-blue-100"><Link to="/cart">Cart</Link></li>
        </ul> 
      </div>
    </nav>
  );
};

export default Nav;
