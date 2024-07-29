import React from 'react';

// Sample cart items data (you can replace this with actual cart data from context or state)
const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
    // Add more cart items as needed
];

const CartSection = () => {
    // Calculate the total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section id="cart" className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center text-lg">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-700">Price: KES{item.price.toFixed(2)}</p>
                                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                                </div>
                                <p className="text-lg font-bold">KES{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-right">
                            <h3 className="text-lg font-semibold">Total</h3>
                            <p className="text-2xl font-bold">KES {totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartSection;
