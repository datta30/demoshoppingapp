import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlus } from 'react-icons/fa';

const PlantCard = ({ plant }) => {
    const { dispatch, currency } = useContext(AppContext);
    
    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload: {
                id: plant.id,
                quantity: 1
            }
        });
    };
    
    return (
        <div className="card h-100 plant-card">
            <div className="plant-image-container">
                <img src={plant.image} className="card-img-top plant-image" alt={plant.name} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{plant.name}</h5>
                <p className="card-text text-muted">{plant.category}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="price">{currency}{plant.unitprice}</span>
                    <button 
                        className="btn btn-outline-success" 
                        onClick={handleAddToCart}
                        disabled={plant.quantity > 0}
                    >
                        {plant.quantity > 0 ? 'Added to Cart' : (
                            <>
                                <FaPlus className="me-1" /> Add to Cart
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
