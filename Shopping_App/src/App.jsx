import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListingPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;