import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartItem = ({ plant }) => {
    const { dispatch, currency } = useContext(AppContext);
    
    const handleIncrease = () => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload: {
                id: plant.id,
                quantity: 1
            }
        });
    };
    
    const handleDecrease = () => {
        dispatch({
            type: 'RED_QUANTITY',
            payload: {
                id: plant.id,
                quantity: 1
            }
        });
    };
    
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                id: plant.id
            }
        });
    };
    
    return (
        <div className="cart-item mb-3">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <img src={plant.image} alt={plant.name} className="cart-item-image img-fluid" />
                </div>
                <div className="col-md-4">
                    <h6 className="mb-1">{plant.name}</h6>
                    <p className="text-muted mb-0">{currency}{plant.unitprice}</p>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={handleDecrease}>
                            <FaMinus />
                        </button>
                        <span className="mx-3">{plant.quantity}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={handleIncrease}>
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className="col-md-2 text-end">
                    <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                        <FaTrash />
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default CartItem;
