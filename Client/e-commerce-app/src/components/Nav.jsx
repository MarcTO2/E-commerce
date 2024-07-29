import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl">TradeWave</h1>
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">Products</li>
          <li className="text-white">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
