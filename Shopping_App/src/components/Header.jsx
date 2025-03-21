import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaShoppingCart, FaLeaf } from 'react-icons/fa';

const Header = () => {
    const { totalPlants } = useContext(AppContext);
    
    return (
        <header className="site-header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                        <FaLeaf className="me-2 text-success" size="1.8em" />
                        <h2 className="m-0">GreenThumb Plants</h2>
                    </Link>
                    
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Shop Plants</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link cart-icon-container">
                                    <FaShoppingCart size="1.5em" />
                                    {totalPlants > 0 && (
                                        <span className="cart-count">{totalPlants}</span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
