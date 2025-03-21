import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from './Header';
import CartItem from './CartItem';
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa';

const ShoppingCartPage = () => {
    const { plants, totalPlants, totalCartValue, currency } = useContext(AppContext);
    
    // Filter plants that are in the cart (quantity > 0)
    const cartItems = plants.filter(plant => plant.quantity > 0);
    
    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="text-center mb-4">Your Shopping Cart</h1>
                
                {cartItems.length > 0 ? (
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Cart Items ({totalPlants})</h5>
                                    {cartItems.map(plant => (
                                        <CartItem key={plant.id} plant={plant} />
                                    ))}
                                </div>
                            </div>
                            
                            <Link to="/products" className="btn btn-outline-primary">
                                <FaArrowLeft className="me-2" /> Continue Shopping
                            </Link>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Order Summary</h5>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Total Items:</span>
                                        <span>{totalPlants}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-4">
                                        <span className="fw-bold">Total Cost:</span>
                                        <span className="fw-bold">{currency}{totalCartValue}</span>
                                    </div>
                                    <button 
                                        className="btn btn-success w-100" 
                                        onClick={() => alert('Checkout coming soon!')}
                                    >
                                        <FaCreditCard className="me-2" /> Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <h3>Your cart is empty</h3>
                        <p className="text-muted">Add some plants to get started!</p>
                        <Link to="/products" className="btn btn-primary mt-3">
                            Browse Plants
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCartPage;
