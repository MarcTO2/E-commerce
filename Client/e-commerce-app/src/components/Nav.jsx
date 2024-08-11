import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/index';
import { doSignOut } from '../Firebase/auth';

const Nav = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  
  const userLoggedIn = auth?.userLoggedIn;

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Trade.Wave</h1>
        <ul className="flex space-x-4">
          {userLoggedIn ? (
            <>
              <li className="text-white hover:text-blue-100">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-white hover:text-blue-100">
                <Link to="/products">Products</Link>
              </li>
              <li className="text-white hover:text-blue-100">
                <Link to="/about">About</Link>
              </li>
              <li className="text-white hover:text-blue-100">
                <Link to="/contact">Contacts</Link>
              </li>
              <li className="text-white hover:text-blue-100">
                <Link to="/cart">🛒</Link>
              </li>

              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate('/login');
                  });
                }}
                className="bg-white text-blue-600 py-1 px-4 hover:text-blue-500 inline-block rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="text-white hover:text-blue-100" to="/login">
                Login
              </Link>
              <Link className="text-white hover:text-blue-100" to="/register">
                Sign Up
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
