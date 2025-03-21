import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="display-4 fw-bold">GreenThumb Plants</h1>
                        <p className="lead my-4">
                            We bring nature indoors with our carefully selected collection of houseplants.
                            GreenThumb Plants has been providing high-quality, sustainably-grown houseplants since 2010.
                            Our mission is to help everyone experience the joy and benefits of living with plants,
                            no matter their experience level or living space.
                        </p>
                        <Link to="/products" className="btn btn-success btn-lg get-started-btn">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
